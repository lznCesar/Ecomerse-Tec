import { Component, OnInit } from '@angular/core';
import { Products } from '../../Data/data';
import { from } from "rxjs";
import { take, pluck, tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-second-gallery',
  templateUrl: './second-gallery.component.html',
  styleUrls: ['./second-gallery.component.css']
})
export class SecondGalleryComponent implements OnInit {

  public FotosArray:Array<string> = []
  constructor() { 
    this.Getimage()
  }


  ngOnInit(): void {
  }


  public Getimage(){
    let valorElementoAnterior = 0;

    for (let index = 0; index<2; index++){
      let element = Math.floor(Math.random()*(Products.length - 1)+1);
    
     if(valorElementoAnterior == element){
       element++
     }
     valorElementoAnterior = element
      const temporal = Products[element]
      this.FotosArray.push(`./../../../../assets/${temporal.img}`)
  }
}
}
