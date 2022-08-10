import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { ServicePetsService } from 'src/app/modules/home/pages/pets/services/service-pets.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('AllquRef') AllquRef: ElementRef = {} as ElementRef;
  @ViewChild('MichiRef') MichiRef: ElementRef = {} as ElementRef;
  @ViewChild('AllquMichiRef') AllquMichiRef: ElementRef = {} as ElementRef;

  @Output() petsO = new EventEmitter<any>();
  @Output() spinnerO = new EventEmitter<any>();

  constructor(
    private _renderer:Renderer2,
    private _PetsS:ServicePetsService
  ) { }

  ngOnInit(): void {
   this.selectOptionAll();
  }

  selectOptionDog(){
    this.spinnerO.emit(true);
    this.petsO.emit([]);
    this._PetsS.getPetById(1).subscribe(data=>{
      this.petsO.emit(data);
      this.spinnerO.emit(false);
    })

    this._renderer.addClass(this.AllquRef.nativeElement,'select');
    this._renderer.removeClass(this.MichiRef.nativeElement,'select');
    this._renderer.removeClass(this.AllquMichiRef.nativeElement,'select');
  }
  selectOptionCat(){
    this.spinnerO.emit(true);
    this.petsO.emit([]);
    this._PetsS.getPetById(2).subscribe(data=>{
      this.petsO.emit(data);
      this.spinnerO.emit(false);
    })
    this._renderer.removeClass(this.AllquRef.nativeElement,'select');
    this._renderer.addClass(this.MichiRef.nativeElement,'select');
    this._renderer.removeClass(this.AllquMichiRef.nativeElement,'select');
  }
  selectOptionAll(){
    this.spinnerO.emit(true);
    this.petsO.emit([]);
    this._PetsS.getPets().subscribe(data=>{
      this.petsO.emit(data);
      this.spinnerO.emit(false);
    })
    this._renderer.removeClass(this.AllquRef.nativeElement,'select');
    this._renderer.removeClass(this.MichiRef.nativeElement,'select');
    this._renderer.addClass(this.AllquMichiRef.nativeElement,'select');    
  }

}
