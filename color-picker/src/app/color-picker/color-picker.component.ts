import { Component, OnInit } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {

  background = '#D03535';
  constructor() { }

  ngOnInit() {
  }

  onChange(value:any) {
    console.log(value);
    console.log(value.target);
    this.background = value;
  }

}
