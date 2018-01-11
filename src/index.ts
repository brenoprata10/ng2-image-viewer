import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleService } from './sample.service';
import {ImageViewerComponent} from './image-viewer.component';

export * from './sample.service';
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
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ImageViewerModule,
            providers: [SampleService]
        };
    }
}