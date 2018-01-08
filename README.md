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
<h3>Requirements: </h3>
<section>
    <ul>
        <li>
            Jquery;
        </li>
        <li>
            Material Icons (you can use your own icons customizing it on the <code>image-viewer.component.html</code> file);
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
            <td align="center">imagens</td>
            <td align="center">BASE64[]</td>
            <td align="center"></td>
            <td align="center">NULL</td>
            <td align="justify">It is the array containing the base64 data, the component differs the images and the PDF files, so don't worry.</td>
        </tr>
        <tr>
            <td align="center">rotate</td>
            <td align="center">boolean</td>
            <td align="center"></td>
            <td align="center">true</td>
            <td align="justify">It is the boolean that renders the rotate left and right buttons</td>
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
            <td align="center">loadOnInit</td>
            <td align="center">boolean</td>
            <td align="center"></td>
            <td align="center">false</td>
            <td align="justify">It is the boolean that lets you choose if you want to load the component on the OnInit event or on the OnChanges event, It was created because i faced some trouble with the primeNG tab using the change event.</td>
        </tr>
        </tbody>
    </table>
</section>
<h3>Configuring the component:</h3>
<section>
    <p>The installation consists basically on a copy and paste process, you might have to ajust some paths on your project, but don't worry, this tutorial might cover all the steps required to install it.</p>
    <h4>Step 1:</h4>
    <ul>
        <li>
            Download all the files on the repository;
        </li>
        <li>
            Extract the .zip files to your project;
        </li>
    </ul>
    <h4>Step 2:</h4>
    <ul>
        <li>
            The <code>src</code> directory contains the component core files, it contains the module and the component itself, paste it on your views directory;
        </li>
        <li>
            The <code>scss</code> directory contains the style file, import it on the 'styles.scss' file present on your project:
            <br/>
            <code>@import 'PATH_TO/imageviewer'</code>;
        </li>
        <li>
            The <code>js</code> directory contains the same JS used on the <a href="http://ignitersworld.com/lab/imageViewer.html">Image Viewer</a>, paste it on your project and map it on your
            <code>angular-cli.json -> scripts</code>;
        </li>
        <li>
            Finally, the <code>icons</code> directory contains the .svg files used as the arrows to change each file;
        </li>
    </ul>
    <h4>Step 3:</h4>
    <ul>
        <li>
            Import the <code>ImageViewerModule</code> on your own module;
        </li>
        <li>
            Change the src path of the 'next' and 'previous' icon (present on <code>image-viewer.component.html</code>), by default it's path references to: <code>assets/images/left.svg</code>
        </li>
    </ul>
</section>
