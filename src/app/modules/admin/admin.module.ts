import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin.component';
import { AuthComponent } from './pages/auth/auth.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule,
    ],
    exports: [],
    declarations: [
        AdminComponent, 
        AuthComponent, 
        DashboardComponent
    ],
    providers: [],
})
export class AdminModule { }
