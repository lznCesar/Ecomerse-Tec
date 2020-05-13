import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {


  public tituloEmpresa:String = 'VESTE';

  public NavbarTitulos:Array<string>= [
    'CELSELL','PRODUCTOS', 'CUSTOMER CARE', 'VISIT US'
  ]



  constructor() { }

  ngOnInit(): void {
  }

}
