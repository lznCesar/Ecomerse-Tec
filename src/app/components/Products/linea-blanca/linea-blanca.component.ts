import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/Interfaces/ecomerse.interfaces';
import { Departments, Products } from '../../Data/data';
import { from } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-linea-blanca',
  templateUrl: './linea-blanca.component.html',
  styleUrls: ['./linea-blanca.component.css']
})
export class LineaBlancaComponent implements OnInit {
  public productsShow: Array<ProductInterface> = [];

  constructor() {
    this.GetProducts()
   }
  ngOnInit(): void {
  }

  public GetProducts() {
    let Departamento = Departments.find(
      (departamento) => departamento.departament === 'Línea Blanca'
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
