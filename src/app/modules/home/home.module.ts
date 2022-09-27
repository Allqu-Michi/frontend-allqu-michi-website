import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { PetsComponent } from './pages/pets/pets.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormPetsComponent } from './pages/form-pets/form-pets.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    PetsComponent,
    FormPetsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})

export class HomeModule { }
