import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})

export class PaginationComponent implements OnChanges {

  @Input() dataI:any = [];
  @Output() dataO = new EventEmitter<any>();

  dataTemp: Array<any> = [];
  maxItems: number = 12;
  currentPage: number = 2;
  totalPages: number = 0;
  viewButtonPlus: boolean = true;

  constructor() { }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges):void {
    if(this.dataI.length >= 1){
      this.totalPages = Math.ceil(this.dataI.length / this.maxItems);
      this.viewButtonPlus = true;
      this.currentPage= 2;
      this.pagination();
    }
  }

  pagination(){
    this.dataTemp = [];
    this.dataO.emit(this.dataTemp);
    for (let i = 0; i < this.maxItems; i++) {
      this.dataTemp.push(this.dataI[i]);
      if(this.maxItems - 1 == i){
        this.dataO.emit(this.dataTemp);
      }
    }
  }

  nextPage(){
    for (let i = (this.currentPage - 1) * this.maxItems; i < (this.currentPage * this.maxItems); i++) {
      if(this.dataI[i] != undefined){
        this.dataTemp.push(this.dataI[i]);
      }
    }
    if( this.currentPage != this.totalPages + 1){
      this.dataO.emit(this.dataTemp);
      this.currentPage += 1;
      if( this.currentPage == this.totalPages + 1){
        this.viewButtonPlus = false;
      }
    }
  }
}
