import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('AllquRef') AllquRef: ElementRef = {} as ElementRef;
  @ViewChild('MichiRef') MichiRef: ElementRef = {} as ElementRef;
  @ViewChild('AllquMichiRef') AllquMichiRef: ElementRef = {} as ElementRef;

  constructor(
    private _renderer:Renderer2
  ) { }

  ngOnInit(): void {
  }

  selectOptionDog(){
    this._renderer.addClass(this.AllquRef.nativeElement,'select');
    this._renderer.removeClass(this.MichiRef.nativeElement,'select');
    this._renderer.removeClass(this.AllquMichiRef.nativeElement,'select');
  }
  selectOptionCat(){
    this._renderer.removeClass(this.AllquRef.nativeElement,'select');
    this._renderer.addClass(this.MichiRef.nativeElement,'select');
    this._renderer.removeClass(this.AllquMichiRef.nativeElement,'select');
  }
  selectOptionAll(){
    this._renderer.removeClass(this.AllquRef.nativeElement,'select');
    this._renderer.removeClass(this.MichiRef.nativeElement,'select');
    this._renderer.addClass(this.AllquMichiRef.nativeElement,'select');
  }

}
