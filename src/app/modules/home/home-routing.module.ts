import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { FormPetsComponent } from './pages/form-pets/form-pets.component';
import { PetsComponent } from './pages/pets/pets.component';

const routes:Routes = [
 {path:'', component: HomeComponent, children:[
  {path:'', component: PetsComponent},
  {path:'registro', component: FormPetsComponent}
 ]},
 { path: '**', redirectTo: '', pathMatch:'prefix'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
