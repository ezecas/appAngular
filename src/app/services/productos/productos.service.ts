import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Producto , ResponseProducto } from 'src/interfaces/Productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(
    //inyeccion de dependencia
    private http:HttpClient
  ) {}

  //funcion para leer productos
  getAll():Observable<Producto[]>{
    //De esta manera obtenemos toda la estructura de los objetos que nos devuelve ML
    //return this.http.get("https://api.mercadolibre.com/sites/MLA/search?q=ipod");

    //De esta manera filtramos lo que nos devuelve solo en "results"
    return this.http.get<ResponseProducto>("https://api.mercadolibre.com/sites/MLA/search?q=ipod")
      .pipe(map((value:ResponseProducto)=>value.results)); //Importar map de rxjs/operators (ver rxjs.dev)
  }

  getById(id:string):Observable<Producto>{//:Promise<Producto>{
    /* return lastValueFrom(this.http.get<Producto>(environment.apiEndpoint+"items/"+id)) */
    //return lastValueFrom(this.http.get<Producto>("https://api.mercadolibre.com/items/id"))
    return this.http.get<Producto>("https://api.mercadolibre.com/items/"+id);
  }

  getDescripcion(id:string){
    return this.http.get<Producto>("https://api.mercadolibre.com/items/"+id+"/description");
  }

  //se pasa el body con los datos del elemento a crear
  create(body:any){
    //primer parametro de POST es la URL y el segundo parametro el elemento a crear (body)
    return this.http.post("https://api.mercadolibre.com/sites/MLA/search?q=ipod", body); 
  }

  update(body:any){
    return this.http.put("https://api.mercadolibre.com/sites/MLA/search?q=ipod", body); 
  }

  delete(){
    return this.http.delete("https://api.mercadolibre.com/sites/MLA/search?q=ipod"); 
  }
}
