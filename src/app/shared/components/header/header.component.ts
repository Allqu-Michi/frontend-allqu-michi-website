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
    private _renderer:Renderer2,
    private _elementRef: ElementRef 
  ) { }

  ngOnInit(): void {
    // console.log(document.getElementsByClassName('btn').length);
    document.getElementsByClassName('btn')[0].classList.add('select');
  }

  selectOptionDog(event:any){
    // for (let i = 0; i < document.getElementsByClassName('btn').length; i++) {
    //   if (document.getElementsByClassName('btn')[i].classList.contains('select')) {
    //     document.getElementsByClassName('btn')[i].classList.remove('select');
    //   }else{
    //     document.getElementsByClassName('btn')[i].classList.add('select');
    //   }
    // }
    console.log(this.AllquRef.nativeElement)
    // console.log(this._elementRef.nativeElement)
    // this._renderer.addClass(this._elementRef.nativeElement, 'select');
    // console.log( this.AllquRef.nativeElement);
    // this.AllquRef.nativeElement.classList.addClass('select')
    this._renderer.addClass(this.AllquRef.nativeElement,'select')
  }
  selectOptionCat(event:any){
    // this.MichiRef.nativeElement.classList.addClass('select')
    this._renderer.addClass(this.AllquRef.nativeElement,'select')
  }
  selectOptionAll(event:any){

  }

}
