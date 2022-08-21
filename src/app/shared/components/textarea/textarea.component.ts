import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TextareaComponent,
      multi: true
    }
  ]
})
export class TextareaComponent implements OnInit,ControlValueAccessor {

  @ViewChild("text") text!: ElementRef;

  @Input() textLabel:string = '';
  @Input() placeholderInput:string = '';
  @Input() alterTextArea:string = '';

  value:string = '';
  CharacterArray:any;
  countCharacter:number=0;

  private onChangefn!: Function;

  constructor() { }

  changeText($event: any):void{
    this.onChangefn($event.target.value)
  }

  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChangefn = fn;
  }
  registerOnTouched(fn: any): void { }

  setDisabledState(isDisabled: boolean):void {
    
  }

  counterChacarter(){
    this.CharacterArray = this.text ? this.text.nativeElement.value.split(/\s+/) : 0;
    this.countCharacter = this.CharacterArray ? this.CharacterArray[0].length : 0;
  }

  ngOnInit(): void {
  }

}
