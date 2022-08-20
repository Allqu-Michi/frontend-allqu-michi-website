import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CardPetComponent } from './components/card-pet/card-pet.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastComponent } from './components/toast/toast.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CardPetComponent,
    FooterComponent,
    SpinnerComponent,
    PaginationComponent,
    InputComponent,
    ButtonComponent,
    ToastComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    CardPetComponent,
    FooterComponent,
    SpinnerComponent,
    PaginationComponent,
    InputComponent,
    ButtonComponent,
    ToastComponent
  ]
})
export class SharedModule { }
