import { Component, Injectable, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SampleService = (function () {
    function SampleService() {
    }
    SampleService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SampleService.ctorParameters = function () { return []; };
    return SampleService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @author Breno Prata - 22/12/2017
 */
var ImageViewerComponent = (function () {
    function ImageViewerComponent() {
        this.BASE_64_IMAGE = 'data:image/png;base64,';
        this.BASE_64_PNG = this.BASE_64_IMAGE + " ";
        this.BASE_64_PDF = 'data:application/pdf;base64, ';
        this.ROTACAO_PADRAO_GRAUS = 90;
        this.TOTAL_ROTACAO_GRAUS_VERTICAL = this.ROTACAO_PADRAO_GRAUS * 3;
        this.rotate = true;
        this.download = true;
        this.fullscreen = true;
        this.loadOnInit = false;
    }
    /**
     * @return {?}
     */
    ImageViewerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.loadOnInit) {
            this.isImagensPresentes();
            this.inicializarVariaveisInput();
        }
    };
    /**
     * @return {?}
     */
    ImageViewerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.loadOnInit) {
            this.inicializarImageViewer();
            setTimeout(function () {
                _this.showImage();
            }, 1000);
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ImageViewerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (changes['images'] && this.isImagensPresentes()) {
            this.inicializarVariaveisInput();
            this.inicializarImageViewer();
            setTimeout(function () {
                _this.showImage();
            }, 1000);
        }
    };
    /**
     * @return {?}
     */
    ImageViewerComponent.prototype.isImagensPresentes = /**
     * @return {?}
     */
    function () {
        return this.images
            && this.images.length > 0;
    };
    /**
     * @return {?}
     */
    ImageViewerComponent.prototype.inicializarVariaveisInput = /**
     * @return {?}
     */
    function () {
        this.mostrarZoom = true;
    };
    /**
     * @return {?}
     */
    ImageViewerComponent.prototype.inicializarImageViewer = /**
     * @return {?}
     */
    function () {
        this.indexImagemAtual = 1;
        this.totalImagens = this.images.length;
        this.wrapper = $("#" + this.idContainer);
        this.curSpan = this.wrapper.find('.current');
        this.viewer = ImageViewer(this.wrapper.find('.image-container'));
        this.wrapper.find('.total').html(this.totalImagens);
        this.rotacaoImagemAtual = 0;
    };
    /**
     * @return {?}
     */
    ImageViewerComponent.prototype.showImage = /**
     * @return {?}
     */
    function () {
        this.prepararTrocaImagem();
        var /** @type {?} */ imgObj = this.BASE_64_PNG;
        if (this.isPDF()) {
            this.carregarViewerPDF();
        }
        else {
            imgObj = this.BASE_64_PNG + this.getImagemAtual();
            this.stringDownloadImagem = this.BASE_64_IMAGE + this.getImagemAtual();
        }
        this.viewer.load(imgObj, imgObj);
        this.curSpan.html(this.indexImagemAtual);
    };
    /**
     * @return {?}
     */
    ImageViewerComponent.prototype.carregarViewerPDF = /**
     * @return {?}
     */
    function () {
        this.esconderBotoesImageViewer();
        var _a = this.getTamanhoIframe(), widthIframe = _a.widthIframe, heightIframe = _a.heightIframe;
        this.injetarIframe(widthIframe, heightIframe);
    };
    /**
     * @param {?} widthIframe
     * @param {?} heightIframe
     * @return {?}
     */
    ImageViewerComponent.prototype.injetarIframe = /**
     * @param {?} widthIframe
     * @param {?} heightIframe
     * @return {?}
     */
    function (widthIframe, heightIframe) {
        $("<iframe class=\"iframeViewer\"\n        style=\"width: " + widthIframe + "px; height: " + heightIframe + "px\"\n        src=\"" + this.converterPDFBase64ParaBlob() + "\"\n       </iframe>").appendTo('.iv-image-wrap');
    };
    /**
     * @return {?}
     */
    ImageViewerComponent.prototype.getTamanhoIframe = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ widthIframe = parseFloat($("#" + this.idContainer).css('width'));
        var /** @type {?} */ heightIframe = parseFloat($("#" + this.idContainer).css('height'));
        return { widthIframe: widthIframe, heightIframe: heightIframe };
    };
    /**
     * @return {?}
     */
    ImageViewerComponent.prototype.esconderBotoesImageViewer = /**
     * @return {?}
     */
    function () {
        this.rotate = false;
        this.download = false;
        this.fullscreen = false;
        this.mostrarZoom = false;
        $('.iv-loader').css('visibility', 'hidden');
    };
    /**
     * @return {?}
     */
    ImageViewerComponent.prototype.isPDF = /**
     * @return {?}
     */
    function () {
        return this.getImagemAtual().startsWith('JVBE') || this.getImagemAtual().startsWith('0M8R');
    };
    /**
     * @return {?}
     */
    ImageViewerComponent.prototype.prepararTrocaImagem = /**
     * @return {?}
     */
    function () {
        this.rotate = true;
        this.download = true;
        this.fullscreen = true;
        this.mostrarZoom = true;
        this.rotacaoImagemAtual = 0;
        this.limparCacheElementos();
    };
    /**
     * @return {?}
     */
    ImageViewerComponent.prototype.limparCacheElementos = /**
     * @return {?}
     */
    function () {
        $('.iframeViewer').remove();
        $('.iv-large-image').remove();
        $('.iv-loader').css('visibility', 'auto');
    };
    /**
     * @return {?}
     */
    ImageViewerComponent.prototype.getPdfBase64 = /**
     * @return {?}
     */
    function () {
        return "" + this.BASE_64_PDF + this.getImagemAtual();
    };
    /**
     * @return {?}
     */
    ImageViewerComponent.prototype.proximaImagem = /**
     * @return {?}
     */
    function () {
        this.indexImagemAtual++;
        if (this.indexImagemAtual > this.totalImagens) {
            this.indexImagemAtual = 1;
        }
        this.showImage();
    };
    /**
     * @return {?}
     */
    ImageViewerComponent.prototype.imagemAnterior = /**
     * @return {?}
     */
    function () {
        this.indexImagemAtual--;
        if (this.indexImagemAtual <= 0) {
            this.indexImagemAtual = this.totalImagens;
        }
        this.showImage();
    };
    /**
     * @return {?}
     */
    ImageViewerComponent.prototype.rotacionarDireita = /**
     * @return {?}
     */
    function () {
        this.resetarZoom();
        if (this.rotacaoImagemAtual === 360) {
            this.rotacaoImagemAtual = this.ROTACAO_PADRAO_GRAUS;
        }
        else {
            this.rotacaoImagemAtual += this.ROTACAO_PADRAO_GRAUS;
        }
        this.atualizarRotacao();
    };
    /**
     * @return {?}
     */
    ImageViewerComponent.prototype.rotacionarEsquerda = /**
     * @return {?}
     */
    function () {
        this.resetarZoom();
        if (this.rotacaoImagemAtual === 0) {
            this.rotacaoImagemAtual = this.TOTAL_ROTACAO_GRAUS_VERTICAL;
        }
        else {
            this.rotacaoImagemAtual -= this.ROTACAO_PADRAO_GRAUS;
        }
        this.atualizarRotacao();
    };
    /**
     * @return {?}
     */
    ImageViewerComponent.prototype.resetarZoom = /**
     * @return {?}
     */
    function () {
        this.viewer.zoom(100);
    };
    /**
     * @return {?}
     */
    ImageViewerComponent.prototype.atualizarRotacao = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ scale = '';
        if (this.isImagemRotacaoVertical() && this.isImagemSobrepondoNaVertical()) {
            scale = "scale(0.46)";
        }
        var /** @type {?} */ novaRotacao = "rotate(" + this.rotacaoImagemAtual + "deg)";
        this.carregarImagem(novaRotacao, scale);
    };
    /**
     * @return {?}
     */
    ImageViewerComponent.prototype.isImagemSobrepondoNaVertical = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ margemErro = 5;
        return parseFloat($("#" + this.idContainer).css('height')) < parseFloat($('.iv-large-image').css('width')) + margemErro;
    };
    /**
     * @return {?}
     */
    ImageViewerComponent.prototype.isImagemRotacaoVertical = /**
     * @return {?}
     */
    function () {
        return this.rotacaoImagemAtual === this.ROTACAO_PADRAO_GRAUS
            || this.rotacaoImagemAtual === this.TOTAL_ROTACAO_GRAUS_VERTICAL;
    };
    /**
     * @param {?} novaRotacao
     * @param {?} scale
     * @return {?}
     */
    ImageViewerComponent.prototype.carregarImagem = /**
     * @param {?} novaRotacao
     * @param {?} scale
     * @return {?}
     */
    function (novaRotacao, scale) {
        var _this = this;
        this.adicionarAnimacao('.iv-snap-image');
        this.adicionarAnimacao('.iv-large-image');
        this.adicionarRotacao('.iv-snap-image', novaRotacao, scale);
        this.adicionarRotacao('.iv-large-image', novaRotacao, scale);
        setTimeout(function () {
            _this.retirarAnimacao('.iv-snap-image');
            _this.retirarAnimacao('.iv-large-image');
        }, 501);
    };
    /**
     * @param {?} componente
     * @return {?}
     */
    ImageViewerComponent.prototype.retirarAnimacao = /**
     * @param {?} componente
     * @return {?}
     */
    function (componente) {
        $(componente).css({ 'transition': "auto" });
    };
    /**
     * @param {?} componente
     * @param {?} novaRotacao
     * @param {?} scale
     * @return {?}
     */
    ImageViewerComponent.prototype.adicionarRotacao = /**
     * @param {?} componente
     * @param {?} novaRotacao
     * @param {?} scale
     * @return {?}
     */
    function (componente, novaRotacao, scale) {
        $(componente).css({ 'transform': novaRotacao + " " + scale });
    };
    /**
     * @param {?} componente
     * @return {?}
     */
    ImageViewerComponent.prototype.adicionarAnimacao = /**
     * @param {?} componente
     * @return {?}
     */
    function (componente) {
        $(componente).css({ 'transition': "0.5s linear" });
    };
    /**
     * @return {?}
     */
    ImageViewerComponent.prototype.mostrarFullscreen = /**
     * @return {?}
     */
    function () {
        this.viewerFullscreen = ImageViewer();
        var /** @type {?} */ imgSrc = this.BASE_64_PNG + this.getImagemAtual();
        this.viewerFullscreen.show(imgSrc, imgSrc);
        this.atualizarRotacao();
    };
    /**
     * @return {?}
     */
    ImageViewerComponent.prototype.converterPDFBase64ParaBlob = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ arrBuffer = this.base64ToArrayBuffer(this.getImagemAtual());
        var /** @type {?} */ newBlob = new Blob([arrBuffer], { type: 'application/pdf' });
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(newBlob);
            return;
        }
        return window.URL.createObjectURL(newBlob);
    };
    /**
     * @return {?}
     */
    ImageViewerComponent.prototype.getImagemAtual = /**
     * @return {?}
     */
    function () {
        return this.images[this.indexImagemAtual - 1];
    };
    /**
     * @param {?} data
     * @return {?}
     */
    ImageViewerComponent.prototype.base64ToArrayBuffer = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var /** @type {?} */ binaryString = window.atob(data);
        var /** @type {?} */ binaryLen = binaryString.length;
        var /** @type {?} */ bytes = new Uint8Array(binaryLen);
        for (var /** @type {?} */ i = 0; i < binaryLen; i++) {
            var /** @type {?} */ ascii = binaryString.charCodeAt(i);
            bytes[i] = ascii;
        }
        return bytes;
    };
    ImageViewerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-image-viewer',
                    template: "<div id=\"{{idContainer}}\" class=\"image-gallery-2\"> <div class=\"image-container\"></div> <div class=\"inline-icon\"> <i class=\"material-icons footer-icon\" (click)=\"rotacionarDireita()\" *ngIf=\"rotate\">rotate_right</i> <i class=\"material-icons footer-icon\" (click)=\"rotacionarEsquerda()\" *ngIf=\"rotate\">rotate_left</i> <i class=\"material-icons footer-icon\" (click)=\"resetarZoom()\" *ngIf=\"mostrarZoom\">fullscreen_exit</i> <i class=\"material-icons footer-icon\" (click)=\"mostrarFullscreen()\"  *ngIf=\"fullscreen\">fullscreen</i> <a href=\"{{stringDownloadImagem}}\" download=\"Imagem {{indexImagemAtual}}.png\" *ngIf=\"download\"> <i class=\"material-icons footer-icon\">file_download</i> </a> </div> <img src=\"assets/left.svg\" class=\"prev\" (click)=\"imagemAnterior()\"/> <img src=\"assets/right.svg\" class=\"next\" (click)=\"proximaImagem()\"/> <div class=\"footer-info\"> <span class=\"current\"></span>/<span class=\"total\"></span> </div> </div> ",
                    styles: [".footer-icon { font-size: xx-large; } "]
                },] },
    ];
    /** @nocollapse */
    ImageViewerComponent.ctorParameters = function () { return []; };
    ImageViewerComponent.propDecorators = {
        "idContainer": [{ type: Input },],
        "images": [{ type: Input },],
        "rotate": [{ type: Input },],
        "download": [{ type: Input },],
        "fullscreen": [{ type: Input },],
        "loadOnInit": [{ type: Input },],
    };
    return ImageViewerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ImageViewerModule = (function () {
    function ImageViewerModule() {
    }
    /**
     * @return {?}
     */
    ImageViewerModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: ImageViewerModule,
            providers: [SampleService]
        };
    };
    ImageViewerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        ImageViewerComponent
                    ],
                    exports: [
                        ImageViewerComponent,
                    ]
                },] },
    ];
    /** @nocollapse */
    ImageViewerModule.ctorParameters = function () { return []; };
    return ImageViewerModule;
}());

export { ImageViewerModule, SampleService, ImageViewerComponent };
