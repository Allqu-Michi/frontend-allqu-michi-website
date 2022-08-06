import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CardPetComponent } from './components/card-pet/card-pet.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    CardPetComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    CardPetComponent,
    FooterComponent
  ]
})
export class SharedModule { }
