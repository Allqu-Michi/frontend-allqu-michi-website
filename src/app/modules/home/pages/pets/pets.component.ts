import { ChangeDetectorRef, Component, OnInit, SimpleChanges } from '@angular/core';
import data from '../../../../data/pets.json';
import { ServicePetsService } from './services/service-pets.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {

  pets: any = [];
  spinner: boolean = false;
  petsFinal: any = [];

  constructor(
   private _cd:ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){

  }

  ngAfterViewChecked(){
    this._cd.detectChanges();
  }
}
