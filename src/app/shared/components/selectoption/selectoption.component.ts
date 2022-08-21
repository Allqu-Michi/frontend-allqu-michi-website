import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-selectoption',
  templateUrl: './selectoption.component.html',
  styleUrls: ['./selectoption.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SelectoptionComponent,
      multi: true
    }
  ]
})
export class SelectoptionComponent implements OnInit,ControlValueAccessor {

  @Input() textLabel:string = '';
  @Input() alterSelect:string = '';

  value:string = '';

  private onChangefn!: Function;
  private onTouched!: Function;

  constructor() { }

  changeText($event: any):void{
    this.onChangefn($event.target.value)
    this.onTouched($event.target.value)
  }

  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChangefn = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean):void {
    
  }

  ngOnInit(): void {
  }

}
