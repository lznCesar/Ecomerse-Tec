import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/Interfaces/ecomerse.interfaces';
import { Products, Departments } from '../../Data/data';
import { from } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { Router } from "@angular/router";

@Component({
  selector: 'app-smart-phones',
  templateUrl: './smart-phones.component.html',
  styleUrls: ['./smart-phones.component.css'],
})
export class SmartPhonesComponent implements OnInit {
  public productsShow: Array<ProductInterface> = [];

  constructor(private router:Router) {
    this.GetProducts();
  }

  ngOnInit(): void {}

  public GetProducts() {
    let Departamento = Departments.find(
      (departamento) => departamento.departament === 'SmartPhones'
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
    ).subscribe()
  }

  public GetIdToChangeScreen(id:number){
    this.router.navigate(['compra',id])

  }
}
