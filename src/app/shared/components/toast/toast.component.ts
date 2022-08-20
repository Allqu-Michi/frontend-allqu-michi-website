import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  animations: [
    trigger('openClose',[
      state(
        'closed',
        style({
          visibility: 'hidden',
          right: '-400px',
        })
      ),
      state(
        'open',
        style({
          right: '40px',
        })
      ),
      transition('open <=> closed',[animate('0.5s ease-in-out')]),
    ]),
  ],
})
export class ToastComponent implements OnInit {

  @ViewChild('element', { static: false }) progressBar: ElementRef = {} as ElementRef;
  progressInterval:any;

  constructor(public toastService: ToastService) { }

  ngOnInit(): void {
    this.toastService.hide();
    this.toastService.open.subscribe((data)=>{
      if(data.show) {
        setTimeout(() => {
          this.toastService.hide();
        }, 3000);
      }
    })
  }

}
