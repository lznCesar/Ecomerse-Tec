import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/Interfaces/ecomerse.interfaces';
import { Departments, Products } from '../../Data/data';
import { filter, map, tap } from 'rxjs/operators';
import { from } from 'rxjs';

@Component({
  selector: 'app-fotografia',
  templateUrl: './fotografia.component.html',
  styleUrls: ['./fotografia.component.css']
})
export class FotografiaComponent implements OnInit {
  public productsShow: Array<ProductInterface> = [];

  constructor() {
    this.GetProducts()
   }
  ngOnInit(): void {
  }

  public GetProducts() {
    let Departamento = Departments.find(
      (departamento) => departamento.departament === 'Fotografía'
    );
   
    from(Products).pipe(
      filter(producto => producto.departament === Departamento.id),
      map(producto =>{
        let direccionImg = `./../../../../assets/${producto.img}`;
        return{
          ...producto,
          img:direccionImg,
        };
      }),
      tap(productoActualizado => this.productsShow.push(productoActualizado))
    ).subscribe(value=> console.log(value)
    )
  }
}
