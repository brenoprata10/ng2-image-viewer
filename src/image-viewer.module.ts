import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {ImageViewerComponent} from './image-viewer.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    ImageViewerComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ImageViewerComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class ImageViewerModule {}
