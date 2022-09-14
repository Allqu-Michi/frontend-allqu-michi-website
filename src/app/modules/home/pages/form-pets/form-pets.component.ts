import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/core/services/toast.service';
import { ServicePetsService } from './services/service-pets.service';

@Component({
  selector: 'app-form-pets',
  templateUrl: './form-pets.component.html',
  styleUrls: ['./form-pets.component.scss']
})
export class FormPetsComponent implements OnInit {

  loading:boolean = false;
  alertName:string = '';
  alertDescription:string = '';
  alertCellphone:string = '';
  alertAddress:string = '';
  alertColor:string = '';
  alertEmail:string = '';
  alertPetTypeId:string = '';

  constructor(
    private _PetsS:ServicePetsService,
    private toast: ToastService,
  ) { }

  ngOnInit(): void {
  }

  authForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required,Validators.maxLength(150)]),
    adopted: new FormControl(false,[Validators.required]),
    cellphone: new FormControl('',[Validators.required,Validators.maxLength(9),Validators.minLength(9),Validators.pattern("^[0-9]*$")]),
    address: new FormControl('',[Validators.required]),
    color: new FormControl('',[Validators.required]),
    imageUrl: new FormControl(''),
    email: new FormControl('',[Validators.required,Validators.email]),
    petTypeId: new FormControl('0',[Validators.required]),
  });

  get name() {
    if(this.authForm.get('name')?.value == ""){
      return "Ingrese un nombre.";
    }
    else if(this.authForm.get('name')?.errors?.['required']) {
      return "Ingrese un nombre."
    } else {
      return ""
    }
  }

  get description() {
    if(this.authForm.get('description')?.value == ""){
      return "Ingrese una descripción.";
    }
    else if(this.authForm.get('description')?.errors?.['required']) {
      return "Ingrese una descripción."
    } 
    else if(this.authForm.get('description')?.errors?.['maxlength']) {
      return "El teléfono debe contener 150 caracteres."
    }
    else {
      return ""
    }
  }

  get cellphone() {
    if(this.authForm.get('cellphone')?.value == ""){
      return "Ingrese un teléfono o celular.";
    }
    else if(this.authForm.get('cellphone')?.errors?.['required']) {
      return "Ingrese un teléfono o celular."
    }
    else if(this.authForm.get('cellphone')?.errors?.['pattern']) {
      return "El teléfono debe ser numérico."
    }
    else if(this.authForm.get('cellphone')?.errors?.['minlength']) {
      return "El teléfono debe contener 9 dígitos."
    }
    else if(this.authForm.get('cellphone')?.errors?.['maxlength']) {
      return "El teléfono debe contener 9 dígitos."
    }
    else {
      return ""
    }
  }

  get address() {
    if(this.authForm.get('address')?.value == ""){
      return "Ingrese un distrito.";
    }
    else if(this.authForm.get('address')?.errors?.['required']) {
      return "Ingrese un distrito."
    } else {
      return ""
    }
  }

  get color() {
    if(this.authForm.get('color')?.value == ""){
      return "Ingrese un color.";
    }
    else if(this.authForm.get('color')?.errors?.['required']) {
      return "Ingrese un color."
    } else {
      return ""
    }
  }

  get email() {
    if(this.authForm.get('email')?.value == ""){
      return "Ingrese un correo.";
    }
    else if(this.authForm.get('email')?.errors?.['required']) {
      return "Ingrese un correo."
    } 
    else if(this.authForm.get('email')?.errors?.['email']) {
      return "Ingrese un correo válido."
    }
    else {
      return ""
    }
  }

  get petTypeId() {
    if(this.authForm.get('petTypeId')?.value=="0"){
      return "Seleccione el tipo de mascota.";
    }
    else if(this.authForm.get('petTypeId')?.errors?.['required']) {
      return "Seleccione el tipo de mascota."
    } else {
      return ""
    }
  }

  async handleCreatePet(){
      this.alertName = await this.name;
      this.alertDescription = await this.description;
      this.alertCellphone = await this.cellphone;
      this.alertAddress = await this.address;
      this.alertColor = await this.color;
      this.alertEmail = await this.email;
      this.alertPetTypeId = await this.petTypeId;
      if(this.authForm.valid) {
        this.loading = true;
        this._PetsS.postCreatePet(this.authForm.value).subscribe((data)=>{
          if(data.status == 201){
            this.authForm.reset();
          }
          this.toast.initiate({
            title:'MENSAJE',
            content:(data.status == 201) ? 'Registro correcto.' : 'Hubo un error al registrar.',
            type:(data.status == 201) ? 1 : 0
          });
          this.loading = false;
        });
      }
  }
}
