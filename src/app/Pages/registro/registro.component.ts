import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  registroForm:FormGroup
  constructor(
    //inyeccion de dependecias
    private fb:FormBuilder
  ) { 
    this.registroForm = this.fb.group({
      nombre:["",[Validators.required,Validators.minLength(2)]],
      apellido:["",[Validators.required,Validators.minLength(2)]],
      telefono:[""],
      email:["",[Validators.required, Validators.email]],
      password:["",[Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
    })
  }

  resetForm(){
    this.registroForm.reset();
  }
  onRegistro(){
    if (this.registroForm.valid) {
      console.log(this.registroForm.value);
      this.resetForm;
    } else {
      console.log("Invalid", "Formulario Invalido");
    }

  }

  ngOnInit(): void {
  }

}
