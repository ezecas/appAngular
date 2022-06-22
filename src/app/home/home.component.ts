import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos:any = [];
  constructor(
    //Inyectamos el servicio
    private produtoService:ProductosService
  ) { 
      //llamamos a la funcion getAll del servicio
      //Devuelve un observable (datos de manera asincronica) y se manejan con .suscribe (parecio a las promesa con async away)
      //data tiene los datos que nos devuelve la API de ML
      //subscribe recibe dos funciones, la primera es de succes y la segunda de error
      this.produtoService.getAll()
        .subscribe(
          (data:any)=>{
            console.log(data);
            //this.productos = data["results"]; se coloca asi si en el service no filtramos
            this.productos = data; //ahora data tiene solo los datos de results de la API de ML
        /* Comento esto para que no aparezca deprecado el subscribe }, 
          error=>{
            console.log(error);
        } */
      });
  }
  

  ngOnInit(): void {
  }

}
