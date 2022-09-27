import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup-support',
  templateUrl: './popup-support.component.html',
  styleUrls: ['./popup-support.component.scss']
})
export class PopupSupportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
  }

  closeSupportLeft(){
    document.getElementById("popupsupport-left")!.style.left = '-480px';
  }

  closeSupportBottom(){
    document.getElementById("popupsupport-bottom")!.style.display = 'none';
  }

  handleBtnBottom(){
    document.getElementById("popupsupport-left")!.style.left = '0';
    document.getElementById("popupsupport-bottom")!.style.display = 'none';
  }

}
