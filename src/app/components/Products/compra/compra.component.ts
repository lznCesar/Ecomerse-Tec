import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/Interfaces/ecomerse.interfaces';
import { from } from 'rxjs';
import { Products } from '../../Data/data';
import { filter, map, pluck, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  public mostrar = false;
  public product: ProductInterface

  constructor(private ActiveR:ActivatedRoute ) { 
  
    //  el metodo paramas es un observable
   this.ActiveR.params.pipe(
     pluck('id'),
     switchMap((id)=>this.GetProduct(id))
     )
     .subscribe(valor=> (this.product = valor));
    window.scroll(0,0)

  }

  ngOnInit(): void {
  }

  public GetProduct(id:number){
    return from(Products)
    .pipe(
      filter((producto)=> producto.id == id),
      map((producto)=>({
        ...producto,
        img: `./../../../../assets/${producto.img}`

      }))
    )
  }
}
