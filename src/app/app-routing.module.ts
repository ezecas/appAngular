import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegistroComponent } from './Pages/registro/registro.component';
import { DetalleComponent } from './Pages/detalle/detalle.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"ingresar",component:LoginComponent},
  {path:"registro",component:RegistroComponent},
  {path:"producto/:id",component:DetalleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
