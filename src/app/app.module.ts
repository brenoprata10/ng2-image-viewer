import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ImageViewerModule } from 'ng2-image-viewer';
import {ReactiveFormsModule} from "@angular/forms";
import {MaterializeModule, MzInputModule} from "ng2-materialize";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ImageViewerModule,
    ReactiveFormsModule,
    MzInputModule,
    BrowserAnimationsModule,
    MaterializeModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
