import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true
    }
  ]
})
export class InputComponent implements OnInit,ControlValueAccessor {

  @Input() textLabel:string = '';
  @Input() typeInput:string = '';
  @Input() placeholderInput:string = '';
  @Input() alterInput:string = '';

  value:string = '';

  disabled = false;

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

  ngOnInit(): void {
  }

}
