import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  constructor(
    //inyeccion de dependecias
    private fb:FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email:["",[Validators.required, Validators.email]],
      password:["",[Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
    })
    
   }

   onLogin(){
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    } else {
      console.log("Invalid", "Usuario o Contraseña invalidos");
    }
  }

  ngOnInit(): void {
  }

}

