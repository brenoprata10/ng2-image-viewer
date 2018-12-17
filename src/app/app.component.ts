import {Component, OnInit} from '@angular/core';
import {BaseImage} from "./base-image";
import {BasePDF} from "./basePDF";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  images = [];
  formGroup: FormGroup;

  ngOnInit() {
    this.formGroup = new FormGroup({
      'primaryColor': new FormControl('#0176bd'),
      'buttonsColor': new FormControl('#ffffff'),
      'buttonsHover': new FormControl('#0176bd'),
      'download': new FormControl(true),
      'fullscreen': new FormControl(true),
      'rotate': new FormControl(true),
      'options': new FormControl(true),
      'defaultDownloadName': new FormControl('Image'),
      'alertWhenChange': new FormControl(false)
    });
    this.images.push(BaseImage.IMAGE);
    this.images.push(BasePDF.PDF);
    this.images.push('https://picsum.photos/900/500/?random');
    this.images.push('https://picsum.photos/800/500/?random');
    this.images.push('https://picsum.photos/1000/500/?random');
    this.images.push('https://picsum.photos/400/500/?random');
    this.images.push('https://picsum.photos/2000/900/?random');
    this.images.push('https://picsum.photos/600/700/?random');
  }

  alertWhenChange(event) {
    if (this.formGroup.get('alertWhenChange').value) {
      alert('You are on the image number: ' + event);
    }
  }

}
