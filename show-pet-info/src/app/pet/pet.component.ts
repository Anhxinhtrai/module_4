import { Component, OnInit } from '@angular/core';
import {Pet} from "../pet";

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  pet: Pet={
    name: 'becgie',
    image: 'https://thucanhvn.com/wp-content/uploads/2018/04/cho-becgie-bi.png'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
