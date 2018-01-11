import { AfterViewInit, OnChanges, OnInit, SimpleChanges } from '@angular/core';
/**
 * @author Breno Prata - 22/12/2017
 */
export declare class ImageViewerComponent implements OnChanges, OnInit, AfterViewInit {
    BASE_64_IMAGE: string;
    BASE_64_PNG: string;
    BASE_64_PDF: string;
    ROTACAO_PADRAO_GRAUS: number;
    TOTAL_ROTACAO_GRAUS_VERTICAL: number;
    idContainer: any;
    imagens: any[];
    rotate: boolean;
    download: boolean;
    fullscreen: boolean;
    loadOnInit: boolean;
    viewer: any;
    wrapper: any;
    curSpan: any;
    viewerFullscreen: any;
    mostrarZoom: boolean;
    totalImagens: number;
    indexImagemAtual: number;
    rotacaoImagemAtual: number;
    stringDownloadImagem: string;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    isImagensPresentes(): boolean;
    inicializarVariaveisInput(): void;
    inicializarImageViewer(): void;
    showImage(): void;
    carregarViewerPDF(): void;
    injetarIframe(widthIframe: number, heightIframe: number): void;
    getTamanhoIframe(): {
        widthIframe: number;
        heightIframe: number;
    };
    esconderBotoesImageViewer(): void;
    isPDF(): any;
    prepararTrocaImagem(): void;
    limparCacheElementos(): void;
    getPdfBase64(): string;
    proximaImagem(): void;
    imagemAnterior(): void;
    rotacionarDireita(): void;
    rotacionarEsquerda(): void;
    resetarZoom(): void;
    atualizarRotacao(): void;
    isImagemSobrepondoNaVertical(): boolean;
    isImagemRotacaoVertical(): boolean;
    carregarImagem(novaRotacao: string, scale: string): void;
    retirarAnimacao(componente: string): void;
    adicionarRotacao(componente: string, novaRotacao: string, scale: string): void;
    adicionarAnimacao(componente: string): void;
    mostrarFullscreen(): void;
    converterPDFBase64ParaBlob(): string;
    private getImagemAtual();
    base64ToArrayBuffer(data: any): Uint8Array;
}
