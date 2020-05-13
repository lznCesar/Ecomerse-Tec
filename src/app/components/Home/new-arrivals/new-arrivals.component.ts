import { Component, OnInit, ViewChild } from '@angular/core';
import { fromEvent, from } from 'rxjs';
import { take, tap, map } from 'rxjs/operators';
import { ProductInterface } from 'src/app/Interfaces/ecomerse.interfaces';
import { Products } from "./../../Data/data";
import { Router } from "@angular/router";

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.css']
})
export class NewArrivalsComponent implements OnInit {
public mostrar:boolean = false;
public ArrivalProducts:Array<ProductInterface> = []

  constructor( private router:Router) { 
    this.obtenerNewArrival()
    
  }

  ngOnInit(): void {
    
  }



obtenerNewArrival(){
  from(Products)
  .pipe(
    map((producto)=>{
     let DireccionImagen = `./../../../../assets/${producto.img}`;

     return {
       ...producto, img:DireccionImagen
     }
    }),
    take(3),
  tap((value)=> this.ArrivalProducts.push(value))
  )
  .subscribe((value)=> console.log(this.ArrivalProducts)
  )
}

GetIdToChangeScreen(id:number){
  console.log(id);
  this.router.navigate(['compra',id])
}
}

