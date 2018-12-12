"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
exports.__esModule = true;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var image_viewer_component_1 = require("./image-viewer.component");
__export(require("./image-viewer.component"));
var ImageViewerModule = /** @class */ (function () {
    function ImageViewerModule() {
    }
    ImageViewerModule_1 = ImageViewerModule;
    ImageViewerModule.forRoot = function () {
        return {
            ngModule: ImageViewerModule_1
        };
    };
    ImageViewerModule = ImageViewerModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                image_viewer_component_1.ImageViewerComponent
            ],
            exports: [
                image_viewer_component_1.ImageViewerComponent,
            ]
        })
    ], ImageViewerModule);
    return ImageViewerModule;
    var ImageViewerModule_1;
}());
exports.ImageViewerModule = ImageViewerModule;
