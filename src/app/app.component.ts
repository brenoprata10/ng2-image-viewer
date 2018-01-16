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
  tste;

  ngOnInit() {
    this.formGroup = new FormGroup({
      'primaryColor': new FormControl('#0176bd'),
      'buttonsColor': new FormControl('#333333'),
      'defaultDownloadName': new FormControl('Image')
    });
    this.images.push(BaseImage.IMAGE);
    this.images.push(BasePDF.PDF);
  }

  changePrimaryColor() {
    $('.inline-icon').css('background-color', this.formGroup.get('primaryColor').value);
    $('.footer-info').css('background-color', this.formGroup.get('primaryColor').value);
  }

  changeButtonsColor() {
    $('.footer-icon').css('color', this.formGroup.get('buttonsColor').value);
  }

}
