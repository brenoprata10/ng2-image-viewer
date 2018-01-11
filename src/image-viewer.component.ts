import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

declare var $: any;
declare var ImageViewer: any;

/**
 * @author Breno Prata - 22/12/2017
 */
@Component({

  selector: 'app-image-viewer',

  templateUrl: './image-viewer.component.html',

  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent implements OnChanges, OnInit, AfterViewInit {

  BASE_64_IMAGE = 'data:image/png;base64,';
  BASE_64_PNG = `${this.BASE_64_IMAGE} `;
  BASE_64_PDF = 'data:application/pdf;base64, ';
  ROTACAO_PADRAO_GRAUS = 90;
  TOTAL_ROTACAO_GRAUS_VERTICAL = this.ROTACAO_PADRAO_GRAUS * 3;

  @Input() idContainer;
  @Input() imagens: any[];
  @Input() rotate = true;
  @Input() download = true;
  @Input() fullscreen = true;
  @Input() loadOnInit = false;

  viewer;
  wrapper;
  curSpan;
  viewerFullscreen;
  mostrarZoom: boolean;
  totalImagens: number;
  indexImagemAtual: number;
  rotacaoImagemAtual: number;
  stringDownloadImagem: string;

  ngOnInit() {
    if (this.loadOnInit) {
      this.isImagensPresentes();
      this.inicializarVariaveisInput();
    }
  }

  ngAfterViewInit() {
    if (this.loadOnInit) {
      this.inicializarImageViewer();
      setTimeout(() => {
        this.showImage();
      }, 1000);
    }
  }


  ngOnChanges(changes: SimpleChanges) {
    if (changes['imagens'] && this.isImagensPresentes()) {
      this.inicializarVariaveisInput();
      this.inicializarImageViewer();
      setTimeout(() => {
        this.showImage();
      }, 1000);
    }
  }


  isImagensPresentes() {
    return this.imagens
      && this.imagens.length > 0;
  }

  inicializarVariaveisInput() {
    this.mostrarZoom = true;
  }

  inicializarImageViewer() {
    this.indexImagemAtual = 1;
    this.totalImagens = this.imagens.length;
    this.wrapper = $(`#${this.idContainer}`);
    this.curSpan = this.wrapper.find('.current');
    this.viewer = ImageViewer(this.wrapper.find('.image-container'));
    this.wrapper.find('.total').html(this.totalImagens);
    this.rotacaoImagemAtual = 0;
  }

  showImage() {
    this.prepararTrocaImagem();

    let imgObj = this.BASE_64_PNG;
    if (this.isPDF()) {
      this.carregarViewerPDF();
    } else {
      imgObj = this.BASE_64_PNG + this.getImagemAtual();
      this.stringDownloadImagem = this.BASE_64_IMAGE + this.getImagemAtual();
    }
    this.viewer.load(imgObj, imgObj);
    this.curSpan.html(this.indexImagemAtual);
  }

  carregarViewerPDF() {
    this.esconderBotoesImageViewer();
    const {widthIframe, heightIframe} = this.getTamanhoIframe();
    this.injetarIframe(widthIframe, heightIframe);
  }

  injetarIframe(widthIframe: number, heightIframe: number) {
    $(`<iframe class="iframeViewer"
        style="width: ${widthIframe}px; height: ${heightIframe}px"
        src="${this.converterPDFBase64ParaBlob()}"
       </iframe>`).appendTo('.iv-image-wrap');
  }

  getTamanhoIframe() {
    const widthIframe = parseFloat($(`#${this.idContainer}`).css('width'));
    const heightIframe = parseFloat($(`#${this.idContainer}`).css('height'));
    return {widthIframe, heightIframe};
  }

  esconderBotoesImageViewer() {
    this.rotate = false;
    this.download = false;
    this.fullscreen = false;
    this.mostrarZoom = false;
    $('.iv-loader').css('visibility', 'hidden');
  }

  isPDF() {
    return this.getImagemAtual().startsWith('JVBE') || this.getImagemAtual().startsWith('0M8R');
  }

  prepararTrocaImagem() {
    this.rotate = true;
    this.download = true;
    this.fullscreen = true;
    this.mostrarZoom = true;
    this.rotacaoImagemAtual = 0;
    this.limparCacheElementos();
  }

  limparCacheElementos() {
    $('.iframeViewer').remove();
    $('.iv-large-image').remove();
    $('.iv-loader').css('visibility', 'auto');
  }

  getPdfBase64(): string {
    return `${this.BASE_64_PDF}${this.getImagemAtual()}`;
  }

  proximaImagem() {
    this.indexImagemAtual++;
    if (this.indexImagemAtual > this.totalImagens) {
      this.indexImagemAtual = 1;
    }
    this.showImage();
  }

  imagemAnterior() {
    this.indexImagemAtual--;
    if (this.indexImagemAtual <= 0) {
      this.indexImagemAtual = this.totalImagens;
    }
    this.showImage();
  }

  rotacionarDireita() {
    this.resetarZoom();
    if (this.rotacaoImagemAtual === 360) {
      this.rotacaoImagemAtual = this.ROTACAO_PADRAO_GRAUS;
    } else {
      this.rotacaoImagemAtual += this.ROTACAO_PADRAO_GRAUS;
    }
    this.atualizarRotacao();
  }

  rotacionarEsquerda() {
    this.resetarZoom();
    if (this.rotacaoImagemAtual === 0) {
      this.rotacaoImagemAtual = this.TOTAL_ROTACAO_GRAUS_VERTICAL;
    } else {
      this.rotacaoImagemAtual -= this.ROTACAO_PADRAO_GRAUS;
    }
    this.atualizarRotacao();
  }

  resetarZoom() {
    this.viewer.zoom(100);
  }

  atualizarRotacao() {
    let scale = '';
    if (this.isImagemRotacaoVertical() && this.isImagemSobrepondoNaVertical()) {
      scale = `scale(0.46)`;
    }
    const novaRotacao = `rotate(${this.rotacaoImagemAtual}deg)`;
    this.carregarImagem(novaRotacao, scale);
  }

  isImagemSobrepondoNaVertical() {
    const margemErro = 5;
    return parseFloat($(`#${this.idContainer}`).css('height')) < parseFloat($('.iv-large-image').css('width')) + margemErro;
  }

  isImagemRotacaoVertical(): boolean {
    return this.rotacaoImagemAtual === this.ROTACAO_PADRAO_GRAUS
      || this.rotacaoImagemAtual === this.TOTAL_ROTACAO_GRAUS_VERTICAL;
  }

  carregarImagem(novaRotacao: string, scale: string) {
    this.adicionarAnimacao('.iv-snap-image');
    this.adicionarAnimacao('.iv-large-image');
    this.adicionarRotacao('.iv-snap-image', novaRotacao, scale);
    this.adicionarRotacao('.iv-large-image', novaRotacao, scale);
    setTimeout(() => {
      this.retirarAnimacao('.iv-snap-image');
      this.retirarAnimacao('.iv-large-image');
    }, 501);
  }

  retirarAnimacao(componente: string) {
    $(componente).css({'transition': `auto`});
  }

  adicionarRotacao(componente: string, novaRotacao: string, scale: string) {
    $(componente).css({'transform': `${novaRotacao} ${scale}`});
  }

  adicionarAnimacao(componente: string) {
    $(componente).css({'transition': `0.5s linear`});
  }

  mostrarFullscreen() {
    this.viewerFullscreen = ImageViewer();
    const imgSrc = this.BASE_64_PNG + this.getImagemAtual();
    this.viewerFullscreen.show(imgSrc, imgSrc);
    this.atualizarRotacao();
  }

  converterPDFBase64ParaBlob() {

    const arrBuffer = this.base64ToArrayBuffer(this.getImagemAtual());

    const newBlob = new Blob([arrBuffer], { type: 'application/pdf' });

    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(newBlob);
      return;
    }

    return window.URL.createObjectURL(newBlob);
  }

  private getImagemAtual() {
    return this.imagens[this.indexImagemAtual - 1];
  }

  base64ToArrayBuffer(data) {
    const binaryString = window.atob(data);
    const binaryLen = binaryString.length;
    const bytes = new Uint8Array(binaryLen);
    for (let i = 0; i < binaryLen; i++) {
      const ascii = binaryString.charCodeAt(i);
      bytes[i] = ascii;
    }
    return bytes;
  }

}
