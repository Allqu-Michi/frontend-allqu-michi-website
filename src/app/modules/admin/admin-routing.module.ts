import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardsGuard } from 'src/app/core/guards/guards.guard';
import { AdminComponent } from './admin.component';
import { AuthComponent } from './pages/auth/auth.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormPetsComponent } from './pages/form-pets/form-pets.component';

export const routes: Routes = [
    { path:'', component: AdminComponent,children:[
        {path:'', component: AuthComponent},
        {path:'dashboard', component: DashboardComponent, canActivate:[GuardsGuard] },
        {path:'pets', component: FormPetsComponent, canActivate:[GuardsGuard] },
    ] },
    { path: '**', redirectTo: '' }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }