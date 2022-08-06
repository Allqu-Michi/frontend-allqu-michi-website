import { Component, OnInit } from '@angular/core';
import data from '../../../../data/pets.json';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {

  pets: any = data;

  constructor() { }

  ngOnInit(): void {
  }

}
