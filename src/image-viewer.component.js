"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
/**
 * @author Breno Prata - 22/12/2017
 */
var ImageViewerComponent = /** @class */ (function () {
    function ImageViewerComponent() {
        this.BASE_64_IMAGE = 'data:image/png;base64,';
        this.BASE_64_PNG = this.BASE_64_IMAGE + " ";
        this.BASE_64_PDF = 'data:application/pdf;base64, ';
        this.ROTACAO_PADRAO_GRAUS = 90;
        this.TOTAL_ROTACAO_GRAUS_VERTICAL = this.ROTACAO_PADRAO_GRAUS * 3;
        this.rotate = true;
        this.download = true;
        this.fullscreen = true;
        this.resetZoom = true;
        this.loadOnInit = false;
        this.showOptions = true;
        this.zoomInButton = true;
        this.zoomOutButton = true;
        this.showPDFOnlyOption = true;
        this.primaryColor = '#0176bd';
        this.buttonsColor = 'white';
        this.buttonsHover = '#333333';
        this.defaultDownloadName = 'Image';
        this.rotateRightTooltipLabel = 'Rotate right';
        this.rotateLeftTooltipLabel = 'Rotate left';
        this.resetZoomTooltipLabel = 'Reset zoom';
        this.fullscreenTooltipLabel = 'Fullscreen';
        this.zoomInTooltipLabel = 'Zoom In';
        this.zoomOutTooltipLabel = 'Zoom Out';
        this.downloadTooltipLabel = 'Download';
        this.showPDFOnlyLabel = 'Show only PDF';
        this.enableTooltip = true;
        this.onNext = new core_1.EventEmitter();
        this.onPrevious = new core_1.EventEmitter();
        this.mostrarPainelOpcoes = true;
        this.showOnlyPDF = false;
        this.zoomPercent = 100;
    }
    ImageViewerComponent.prototype.ngOnInit = function () {
        if (this.loadOnInit) {
            this.isImagensPresentes();
        }
    };
    ImageViewerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.inicializarCores();
        if (this.loadOnInit) {
            this.inicializarImageViewer();
            setTimeout(function () {
                _this.showImage();
            }, 1000);
        }
    };
    ImageViewerComponent.prototype.inicializarCores = function () {
        $('.inline-icon').css('background-color', this.primaryColor);
        $('.footer-info').css('background-color', this.primaryColor);
        $('.footer-icon').css('color', this.buttonsColor);
        $('.footer-icon').hover(function () {
            $(this).css('color', this.buttonsHover);
        });
    };
    ImageViewerComponent.prototype.ngOnChanges = function (changes) {
        this.imagesChange(changes);
        this.primaryColorChange(changes);
        this.buttonsColorChange(changes);
        this.buttonsHoverChange(changes);
        this.defaultDownloadNameChange(changes);
    };
    ImageViewerComponent.prototype.zoomIn = function () {
        this.zoomPercent += 10;
        this.viewer.zoom(this.zoomPercent);
    };
    ImageViewerComponent.prototype.zoomOut = function () {
        if (this.zoomPercent == 100)
            return;
        this.zoomPercent -= 10;
        if (this.zoomPercent < 0)
            this.zoomPercent = 0;
        this.viewer.zoom(this.zoomPercent);
    };
    ImageViewerComponent.prototype.primaryColorChange = function (changes) {
        var _this = this;
        if (changes['primaryColor'] || changes['showOptions']) {
            setTimeout(function () {
                $('.inline-icon').css('background-color', _this.primaryColor);
                $('.footer-info').css('background-color', _this.primaryColor);
            }, 350);
        }
    };
    ImageViewerComponent.prototype.buttonsColorChange = function (changes) {
        var _this = this;
        if (changes['buttonsColor'] || changes['rotate'] || changes['download']
            || changes['fullscreen']) {
            setTimeout(function () {
                $('.footer-icon').css('color', _this.buttonsColor);
            }, 350);
        }
    };
    ImageViewerComponent.prototype.buttonsHoverChange = function (changes) {
        if (changes['buttonsHover']) {
            $('.footer-icon').hover(function () {
                $(this).css('color', this.buttonsHover);
            });
        }
    };
    ImageViewerComponent.prototype.defaultDownloadNameChange = function (changes) {
        if (changes['defaultDownloadName']) {
            this.defaultDownloadName = this.defaultDownloadName;
        }
    };
    ImageViewerComponent.prototype.imagesChange = function (changes) {
        var _this = this;
        if (changes['images'] && this.isImagensPresentes()) {
            this.inicializarImageViewer();
            setTimeout(function () {
                _this.showImage();
            }, 1000);
        }
    };
    ImageViewerComponent.prototype.isImagensPresentes = function () {
        return this.images
            && this.images.length > 0;
    };
    ImageViewerComponent.prototype.inicializarImageViewer = function () {
        this.indexImagemAtual = 1;
        this.totalImagens = this.images.length;
        this.wrapper = $("#" + this.idContainer);
        this.curSpan = this.wrapper.find('.current');
        this.viewer = ImageViewer(this.wrapper.find('.image-container'));
        this.wrapper.find('.total').html(this.totalImagens);
        this.rotacaoImagemAtual = 0;
    };
    ImageViewerComponent.prototype.showImage = function () {
        this.prepararTrocaImagem();
        var imgObj = this.BASE_64_PNG;
        if (this.isPDF()) {
            this.carregarViewerPDF();
        }
        else {
            imgObj = this.BASE_64_PNG + this.getImagemAtual();
            this.stringDownloadImagem = this.BASE_64_IMAGE + this.getImagemAtual();
        }
        this.viewer.load(imgObj, imgObj);
        this.curSpan.html(this.indexImagemAtual);
        this.inicializarCores();
    };
    ImageViewerComponent.prototype.carregarViewerPDF = function () {
        this.esconderBotoesImageViewer();
        var _a = this.getTamanhoIframe(), widthIframe = _a.widthIframe, heightIframe = _a.heightIframe;
        this.injetarIframe(widthIframe, heightIframe);
    };
    ImageViewerComponent.prototype.injetarIframe = function (widthIframe, heightIframe) {
        $("<iframe class=\"iframeViewer\"\n        style=\"width: " + widthIframe + "px; height: " + heightIframe + "px\"\n        src=\"" + this.converterPDFBase64ParaBlob() + "\"\n       </iframe>").appendTo('.iv-image-wrap');
    };
    ImageViewerComponent.prototype.getTamanhoIframe = function () {
        var widthIframe = parseFloat($("#" + this.idContainer).css('width'));
        var heightIframe = parseFloat($("#" + this.idContainer).css('height'));
        return { widthIframe: widthIframe, heightIframe: heightIframe };
    };
    ImageViewerComponent.prototype.esconderBotoesImageViewer = function () {
        $('.iv-loader').css('visibility', 'hidden');
        $('.options-image-viewer').css('visibility', 'hidden');
    };
    ImageViewerComponent.prototype.isPDF = function () {
        return this.getImagemAtual().startsWith('JVBE') || this.getImagemAtual().startsWith('0M8R');
    };
    ImageViewerComponent.prototype.prepararTrocaImagem = function () {
        this.rotacaoImagemAtual = 0;
        this.limparCacheElementos();
    };
    ImageViewerComponent.prototype.limparCacheElementos = function () {
        $('.iframeViewer').remove();
        $('.iv-large-image').remove();
        $('.iv-loader').css('visibility', 'auto');
        $('.options-image-viewer').css('visibility', 'inherit');
    };
    ImageViewerComponent.prototype.getPdfBase64 = function () {
        return "" + this.BASE_64_PDF + this.getImagemAtual();
    };
    ImageViewerComponent.prototype.proximaImagem = function () {
        this.isImagemVertical = false;
        this.indexImagemAtual++;
        if (this.indexImagemAtual > this.totalImagens) {
            this.indexImagemAtual = 1;
        }
        this.onNext.emit(this.indexImagemAtual);
        if (!this.isPDF() && this.showOnlyPDF) {
            this.proximaImagem();
            return;
        }
        this.showImage();
    };
    ImageViewerComponent.prototype.imagemAnterior = function () {
        this.isImagemVertical = false;
        this.indexImagemAtual--;
        if (this.indexImagemAtual <= 0) {
            this.indexImagemAtual = this.totalImagens;
        }
        this.onPrevious.emit(this.indexImagemAtual);
        if (!this.isPDF() && this.showOnlyPDF) {
            this.imagemAnterior();
            return;
        }
        this.showImage();
    };
    ImageViewerComponent.prototype.rotacionarDireita = function () {
        var _this = this;
        var timeout = this.resetarZoom();
        setTimeout(function () {
            _this.rotacaoImagemAtual += _this.ROTACAO_PADRAO_GRAUS;
            _this.isImagemVertical = !_this.isImagemVertical;
            _this.atualizarRotacao();
        }, timeout);
    };
    ImageViewerComponent.prototype.rotacionarEsquerda = function () {
        var _this = this;
        var timeout = this.resetarZoom();
        setTimeout(function () {
            _this.rotacaoImagemAtual -= _this.ROTACAO_PADRAO_GRAUS;
            _this.isImagemVertical = !_this.isImagemVertical;
            _this.atualizarRotacao();
        }, timeout);
    };
    ImageViewerComponent.prototype.resetarZoom = function () {
        this.zoomPercent = 100;
        this.viewer.zoom(this.zoomPercent);
        var timeout = 800;
        if (this.viewer.zoomValue === this.zoomPercent) {
            timeout = 0;
        }
        return timeout;
    };
    ImageViewerComponent.prototype.atualizarRotacao = function (isAnimacao) {
        if (isAnimacao === void 0) { isAnimacao = true; }
        var scale = '';
        if (this.isImagemVertical && this.isImagemSobrepondoNaVertical()) {
            scale = "scale(" + this.getScale() + ")";
        }
        var novaRotacao = "rotate(" + this.rotacaoImagemAtual + "deg)";
        this.carregarImagem(novaRotacao, scale, isAnimacao);
    };
    ImageViewerComponent.prototype.getScale = function () {
        return (parseFloat($('.iv-large-image').css('width')) - (parseFloat($("#" + this.idContainer).css('height')))) * 2.3 / (parseFloat($("#" + this.idContainer).css('height')));
    };
    ImageViewerComponent.prototype.isImagemSobrepondoNaVertical = function () {
        var margemErro = 5;
        return parseFloat($("#" + this.idContainer).css('height')) < parseFloat($('.iv-large-image').css('width')) + margemErro;
    };
    ImageViewerComponent.prototype.carregarImagem = function (novaRotacao, scale, isAnimacao) {
        var _this = this;
        if (isAnimacao === void 0) { isAnimacao = true; }
        if (isAnimacao) {
            this.adicionarAnimacao('.iv-snap-image');
            this.adicionarAnimacao('.iv-large-image');
        }
        this.adicionarRotacao('.iv-snap-image', novaRotacao, scale);
        this.adicionarRotacao('.iv-large-image', novaRotacao, scale);
        setTimeout(function () {
            if (isAnimacao) {
                _this.retirarAnimacao('.iv-snap-image');
                _this.retirarAnimacao('.iv-large-image');
            }
        }, 501);
    };
    ImageViewerComponent.prototype.retirarAnimacao = function (componente) {
        $(componente).css({ 'transition': "auto" });
    };
    ImageViewerComponent.prototype.adicionarRotacao = function (componente, novaRotacao, scale) {
        $(componente).css({ 'transform': novaRotacao + " " + scale });
    };
    ImageViewerComponent.prototype.adicionarAnimacao = function (componente) {
        $(componente).css({ 'transition': "0.5s linear" });
    };
    ImageViewerComponent.prototype.mostrarFullscreen = function () {
        var _this = this;
        var timeout = this.resetarZoom();
        setTimeout(function () {
            _this.viewerFullscreen = ImageViewer();
            var imgSrc = _this.BASE_64_PNG + _this.getImagemAtual();
            _this.viewerFullscreen.show(imgSrc, imgSrc);
            _this.atualizarRotacao(false);
        }, timeout);
    };
    ImageViewerComponent.prototype.converterPDFBase64ParaBlob = function () {
        var arrBuffer = this.base64ToArrayBuffer(this.getImagemAtual());
        var newBlob = new Blob([arrBuffer], { type: 'application/pdf' });
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(newBlob);
            return;
        }
        return window.URL.createObjectURL(newBlob);
    };
    ImageViewerComponent.prototype.getImagemAtual = function () {
        return this.images[this.indexImagemAtual - 1];
    };
    ImageViewerComponent.prototype.base64ToArrayBuffer = function (data) {
        var binaryString = window.atob(data);
        var binaryLen = binaryString.length;
        var bytes = new Uint8Array(binaryLen);
        for (var i = 0; i < binaryLen; i++) {
            var ascii = binaryString.charCodeAt(i);
            bytes[i] = ascii;
        }
        return bytes;
    };
    ImageViewerComponent.prototype.showPDFOnly = function () {
        this.showOnlyPDF = !this.showOnlyPDF;
        this.proximaImagem();
    };
    __decorate([
        core_1.Input()
    ], ImageViewerComponent.prototype, "idContainer");
    __decorate([
        core_1.Input()
    ], ImageViewerComponent.prototype, "images");
    __decorate([
        core_1.Input()
    ], ImageViewerComponent.prototype, "rotate");
    __decorate([
        core_1.Input()
    ], ImageViewerComponent.prototype, "download");
    __decorate([
        core_1.Input()
    ], ImageViewerComponent.prototype, "fullscreen");
    __decorate([
        core_1.Input()
    ], ImageViewerComponent.prototype, "resetZoom");
    __decorate([
        core_1.Input()
    ], ImageViewerComponent.prototype, "loadOnInit");
    __decorate([
        core_1.Input()
    ], ImageViewerComponent.prototype, "showOptions");
    __decorate([
        core_1.Input()
    ], ImageViewerComponent.prototype, "zoomInButton");
    __decorate([
        core_1.Input()
    ], ImageViewerComponent.prototype, "zoomOutButton");
    __decorate([
        core_1.Input()
    ], ImageViewerComponent.prototype, "showPDFOnlyOption");
    __decorate([
        core_1.Input()
    ], ImageViewerComponent.prototype, "primaryColor");
    __decorate([
        core_1.Input()
    ], ImageViewerComponent.prototype, "buttonsColor");
    __decorate([
        core_1.Input()
    ], ImageViewerComponent.prototype, "buttonsHover");
    __decorate([
        core_1.Input()
    ], ImageViewerComponent.prototype, "defaultDownloadName");
    __decorate([
        core_1.Input()
    ], ImageViewerComponent.prototype, "rotateRightTooltipLabel");
    __decorate([
        core_1.Input()
    ], ImageViewerComponent.prototype, "rotateLeftTooltipLabel");
    __decorate([
        core_1.Input()
    ], ImageViewerComponent.prototype, "resetZoomTooltipLabel");
    __decorate([
        core_1.Input()
    ], ImageViewerComponent.prototype, "fullscreenTooltipLabel");
    __decorate([
        core_1.Input()
    ], ImageViewerComponent.prototype, "zoomInTooltipLabel");
    __decorate([
        core_1.Input()
    ], ImageViewerComponent.prototype, "zoomOutTooltipLabel");
    __decorate([
        core_1.Input()
    ], ImageViewerComponent.prototype, "downloadTooltipLabel");
    __decorate([
        core_1.Input()
    ], ImageViewerComponent.prototype, "showPDFOnlyLabel");
    __decorate([
        core_1.Input()
    ], ImageViewerComponent.prototype, "enableTooltip");
    __decorate([
        core_1.Output()
    ], ImageViewerComponent.prototype, "onNext");
    __decorate([
        core_1.Output()
    ], ImageViewerComponent.prototype, "onPrevious");
    ImageViewerComponent = __decorate([
        core_1.Component({
            selector: 'app-image-viewer',
            templateUrl: './image-viewer.component.html',
            styleUrls: ['./image-viewer.component.scss']
        })
    ], ImageViewerComponent);
    return ImageViewerComponent;
}());
exports.ImageViewerComponent = ImageViewerComponent;
