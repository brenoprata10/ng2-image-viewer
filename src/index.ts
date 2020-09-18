import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageViewerComponent} from './image-viewer.component';

export * from './image-viewer.component'

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ImageViewerComponent
    ],
    exports: [
        ImageViewerComponent,
    ]
})
export class ImageViewerModule {
    static forRoot(): ModuleWithProviders<ImageViewerModule> {
        return {
            ngModule: ImageViewerModule,
        };
    }
}
