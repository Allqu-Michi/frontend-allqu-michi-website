import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '@supabase/supabase-js';
import { finalize } from 'rxjs';
import { SupabaseService } from 'src/app/core/services/supabase.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit{
  
  loading:boolean = false;
  alertEmail:string = '';
  alertPassword:string = '';
  session = this.supabase.session;

  constructor(
    private readonly supabase: SupabaseService,
    private toast: ToastService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    if(this.session){
      this.router.navigate(['./dashboard'],{relativeTo: this.route});
    }
  }

  authForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(8)])
  });

  get email() {
    if(this.authForm.get('email')?.value==""){
      return "Ingrese un correo.";
    }
    else if(this.authForm.get('email')?.errors?.['required']) {
      return "Ingrese un correo."
    } else if(this.authForm.get('email')?.errors?.['email']) {
      return "Ingrese un correo válido."
    } else {
      return ""
    }
  }
  get password() {
    if(this.authForm.get('password')?.value==""){
      return "Ingrese una contraseña.";
    }
    else if(this.authForm.get('password')?.errors?.['minlength']) {
      return "La contraseña debe tener 8 caracteres como mínimo."
    } else {
      return ""
    }
  }

  async handleLogin() {
    this.alertEmail = await this.email;
    this.alertPassword = await this.password;
    if(this.authForm.valid){
      this.loading = true;
      try {
        const {user, error, ...rest} = await this.supabase.signIn(this.authForm.value as any);
        if(rest.session != null){
          this.router.navigate(['./dashboard'],{relativeTo: this.route});
        }
        this.toast.initiate({
          title:'MENSAJE',
          content:(rest.session == null) ? 'Credenciales incorrectas.' : 'Credenciales Correctas.',
          type:(rest.session == null) ? 0 : 1
        })
      } catch (error) {
        this.toast.initiate({
          title:'MENSAJE',
          content:'Ocurrió un error.',
          type:0
        })
      } finally {
        this.loading = false;
      }
    }
  }

}
