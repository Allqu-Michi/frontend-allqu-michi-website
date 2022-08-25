import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-card-pet',
  templateUrl: './card-pet.component.html',
  styleUrls: ['./card-pet.component.scss']
})
export class CardPetComponent implements OnChanges {

  @Input() pets: any = [];

  constructor(
    private _cd:ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges):void{}

  ngAfterViewInit(){}

  ngAfterViewChecked(){}
  prueba(value:any){
    if((value.imageUrl == "" || value.imageUrl == null) && value.petTypeId == 1){
      return "../../../../assets/pet_dog.png";
    } 
    else if((value.imageUrl == "" || value.imageUrl == null) && value.petTypeId == 2) {
      return "../../../../assets/pet_cat.png";
    } else{
      return value.imageUrl;
    }    
  }
}
