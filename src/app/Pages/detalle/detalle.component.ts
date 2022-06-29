import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos/productos.service';
import { Producto, ResponseProducto } from 'src/interfaces/Productos';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
 
  producto:Producto = {};
  imagenes:Producto["pictures"];
  descripcion?:string = ""
  isLoading:boolean = true
  isError:boolean | string =false
  
  constructor(
    private activatedRoute:ActivatedRoute,
    private productosService:ProductosService
  ) { 

    const id = this.activatedRoute.snapshot.paramMap.get("id")
    console.log("id",id)
    
    if (id){
      this.productosService.getById(id)
      .subscribe({
        next:(data:Producto)=>{         
          this.producto = data;
          this.imagenes = data.pictures;
          this.isError=false
          this.isLoading=false   
        },
        error:error=>{
          console.log(error);
          this.isError=true
        }
    });
    
    this.productosService.getDescripcion(id)
    .subscribe({
      next:(data:Producto)=>{
        console.log(data);
        this.descripcion = data.plain_text;
      },
      error:(error: any)=>{
        console.log(error);
        this.isError=true;
      }
  });
    }
    else{
      console.log("El id es null")
      this.isError=true
    }
    
  }
  ngOnInit(): void {
  }

}
