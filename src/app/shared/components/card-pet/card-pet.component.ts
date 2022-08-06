import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pet',
  templateUrl: './card-pet.component.html',
  styleUrls: ['./card-pet.component.scss']
})
export class CardPetComponent implements OnInit {

  @Input() pets: any = [];

  constructor() {
    
   }

  ngOnInit(): void {
    // console.log(this.pets)
  }

}
