<h2>Welcome to Ng2-Image Viewer</h2>
<section>
    <p>This component uses the <a href="http://ignitersworld.com/lab/imageViewer.html">Image Viewer JS</a> in it's core.</p>
    <p>Ng2-Image Viewer uses MIT license, so you can use it as you wish, feel free to help contributing with the code.</p>
    <p>This component allows you to:</p>
    <ul>
        <li>
            <strong>Show images and PDF files, you can navigate through it;</strong>
        </li>
        <li>
            <strong>Rotate each image as you wish;</strong>
        </li>
        <li>
            <strong>Download images and PDF files (no additional configuration required);</strong>
        </li>
        <li>
            <strong>Zoom in and out;</strong>
        </li>
        <li>
            <strong>Fullscreen your files;</strong>
        </li>
    </ul>
</section>

## Donate:
<section>

<p>You can donate on my Patreon! (No one have donated yet, be the first one!)</p>

<p>
<a href="https://www.patreon.com/brenoprata">My Patreon o/</a>
</p>

</section>

<h3>Demo:</h3>
<section>
<a href="https://brenoprata10.github.io/ng2-image-viewer/">https://brenoprata10.github.io/ng2-image-viewer/</a>
</section>
<h3>Requirements: </h3>
<section>
    <ul>
        <li>
            Jquery;
        </li>
        <li>
            Material Icons;
        </li>
    </ul>
</section>
<h3>How to use it:</h3>
<section>
    <p>The component already have some input references:</p>
    <table>
        <thead>
        <tr>
            <td align="center">Name</td>
            <td align="center">Type</td>
            <td align="center">Required</td>
            <td align="center">Default Value</td>
            <td align="center">Description</td>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td align="center">idContainer</td>
            <td align="center">string</td>
            <td align="center">X</td>
            <td align="center">NULL</td>
            <td align="justify">It is the id of the component on the HTML, this parameter allows you to inject as many components as you wish.</td>
        </tr>
        <tr>
            <td align="center">images</td>
            <td align="center">BASE64[]</td>
            <td align="center"></td>
            <td align="center">NULL</td>
            <td align="justify">It is the array containing the base64 data, the component differs the images and the PDF files, so don't worry.</td>
        </tr>
        <tr>
            <td align="center">defaultDownloadName</td>
            <td align="center">string</td>
            <td align="center"></td>
            <td align="center">'Image'</td>
            <td align="justify">It is the default name used on the file to be downloaded, Ex: Image 1, Image 2</td>
        </tr>
        <tr>
            <td align="center">rotate</td>
            <td align="center">boolean</td>
            <td align="center"></td>
            <td align="center">true</td>
            <td align="justify">It is the boolean that renders the rotate left and right buttons</td>
        </tr>
        <tr>
            <td align="center">resetZoom</td>
            <td align="center">boolean</td>
            <td align="center"></td>
            <td align="center">true</td>
            <td align="justify">It is the boolean that renders the resetZoom button</td>
        </tr>
        <tr>
            <td align="center">download</td>
            <td align="center">boolean</td>
            <td align="center"></td>
            <td align="center">true</td>
            <td align="justify">It is the boolean that renders the download button</td>
        </tr>
        <tr>
            <td align="center">fullscreen</td>
            <td align="center">boolean</td>
            <td align="center"></td>
            <td align="center">true</td>
            <td align="justify">It is the boolean that renders the fullscreen button</td>
        </tr>
        <tr>
            <td align="center">showOptions</td>
            <td align="center">boolean</td>
            <td align="center"></td>
            <td align="center">true</td>
            <td align="justify">It is the boolean that renders the options panel at the top right corner</td>
        </tr>
        <tr>
            <td align="center">showPDFOnlyOption</td>
            <td align="center">boolean</td>
            <td align="center"></td>
            <td align="center">true</td>
            <td align="justify">It is the boolean that renders the PDF only button</td>
        </tr>
        <tr>
            <td align="center">loadOnInit</td>
            <td align="center">boolean</td>
            <td align="center"></td>
            <td align="center">false</td>
            <td align="justify">It is the boolean that lets you choose if you want to load the component on the OnInit event or on the OnChanges event, It was created because i faced some trouble with the primeNG tab using the change event.</td>
        </tr>
        <tr>
            <td align="center">primaryColor</td>
            <td align="center">string</td>
            <td align="center"></td>
            <td align="center">'#0176bd'</td>
            <td align="justify">It is the background-color used on the footer and on the options panel</td>
        </tr>
        <tr>
            <td align="center">buttonsColor</td>
            <td align="center">string</td>
            <td align="center"></td>
            <td align="center">'white'</td>
            <td align="justify">It is the color used on the buttons on the options panel</td>
        </tr>
        <tr>
            <td align="center">buttonsHover</td>
            <td align="center">string</td>
            <td align="center"></td>
            <td align="center">'#333333'</td>
            <td align="justify">It is the color used on the hover event, when the button receive the mouse pointer</td>
        </tr>
        <tr>
            <td align="center">enableTooltip</td>
            <td align="center">boolean</td>
            <td align="center"></td>
            <td align="center">true</td>
            <td align="justify">It is the boolean that renders the tooltips above the buttons</td>
        </tr> 
        <tr>
            <td align="center">rotateRightTooltipLabel</td>
            <td align="center">string</td>
            <td align="center"></td>
            <td align="center">'Rotate right'</td>
            <td align="justify">It is the tooltip value you want for the rotate right button</td>
        </tr>     
        <tr>
            <td align="center">rotateLeftTooltipLabel</td>
            <td align="center">string</td>
            <td align="center"></td>
            <td align="center">'Rotate left'</td>
            <td align="justify">It is the tooltip value you want for the rotate left button</td>
        </tr>   
        <tr>
            <td align="center">resetZoomTooltipLabel</td>
            <td align="center">string</td>
            <td align="center"></td>
            <td align="center">'Reset zoom'</td>
            <td align="justify">It is the tooltip value you want for the reset zoom button</td>
        </tr>     
        <tr>
            <td align="center">fullscreenTooltipLabel</td>
            <td align="center">string</td>
            <td align="center"></td>
            <td align="center">'Fullscreen'</td>
            <td align="justify">It is the tooltip value you want for the fullscreen button</td>
        </tr>     
        <tr>
            <td align="center">downloadTooltipLabel</td>
            <td align="center">string</td>
            <td align="center"></td>
            <td align="center">'Download'</td>
            <td align="justify">It is the tooltip value you want for the download button</td>
        </tr>    
        <tr>
            <td align="center">showPDFOnlyLabel</td>
            <td align="center">string</td>
            <td align="center"></td>
            <td align="center">'Show only PDF'</td>
            <td align="justify">It is the tooltip value you want for the show PDF only button</td>
        </tr>  
        <tr>
            <td align="center">onNext</td>
            <td align="center">EventEmitter</td>
            <td align="center"></td>
            <td align="center"></td>
            <td align="justify">It is the event triggered when you change to next file, it emits the actual index of the array on the component</td>
        </tr>
        <tr>
            <td align="center">onPrevious</td>
            <td align="center">EventEmitter</td>
            <td align="center"></td>
            <td align="center"></td>
            <td align="justify">It is the event triggered when you change to previous file, it emits the actual index of the array on the component</td>
        </tr>
        </tbody>
    </table>
</section>

## Installation

To install this library, run:

```bash
$ npm install ng2-image-viewer --save
```

## Consuming the library

And then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { ImageViewerModule } from 'ng2-image-viewer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    ImageViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Now just add the these codes on your angular-cli.json file:

```json
"styles": [
    "../node_modules/ng2-image-viewer/imageviewer.scss"
],
"scripts": [
    "../node_modules/ng2-image-viewer/imageviewer.js"
],
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  Image Viewer
</h1>
<app-image-viewer [images]="['iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==']"
[idContainer]="'idOnHTML'"
[loadOnInit]="true"></app-image-viewer>
```

## Changelog
<h4>- 1.0.9:</h4>
<ul>
    <li>Increased performance</li>
    <li>Fix bug when rotating images</li>
    <li>Added tooltips</li>
    <li>Added input to hide tooltips</li>
    <li>Added input to costumize tooltips labels</li>
    <li>Added new button: Show PDF only</li>
    <li>Added new input to hide showPDFOnly button</li>
    <li>Some design changes</li>
</ul>
<h4>- 1.0.8:</h4>
<ul>
    <li>Added two event emitters(OnNext and OnPrevious)</li>
    <li>Adjust on the smart scale when rotating</li>
</ul>

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [brenoprata10](mailto:brenoprata10@gmail.com)
