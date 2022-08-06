import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsComponent } from './pages/pets/pets.component';

const routes:Routes = [
 {path:'', component: PetsComponent},
 { path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
