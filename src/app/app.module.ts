import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/Share/navbar/navbar.component';
import { HomeComponent } from './components/Home/home/home.component';
import { CarrouselComponent } from './components/Home/carrousel/carrousel.component';
import { NewArrivalsComponent } from './components/Home/new-arrivals/new-arrivals.component';
import { RegistroComponent } from './components/Home/registro/registro.component';
import { SecondGalleryComponent } from './components/Home/second-gallery/second-gallery.component';
import { FooterComponent } from './components/Share/footer/footer.component';
import { SmartPhonesComponent } from './components/Products/smart-phones/smart-phones.component';
import { FotografiaComponent } from './components/Products/fotografia/fotografia.component';
import { LineaBlancaComponent } from './components/Products/linea-blanca/linea-blanca.component';
import { TodosComponent } from './components/Products/todos/todos.component';
import { CustomerCareComponent } from './components/ToolBar/customer-care/customer-care.component';
import { VisitUSComponent } from './components/ToolBar/visit-us/visit-us.component';
import { CompraComponent } from './components/Products/compra/compra.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { APP_ROUTES } from './app.routes';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CarrouselComponent,
    NewArrivalsComponent,
    RegistroComponent,
    SecondGalleryComponent,
    FooterComponent,
    SmartPhonesComponent,
    FotografiaComponent,
    LineaBlancaComponent,
    TodosComponent,
    CustomerCareComponent,
    VisitUSComponent,
    CompraComponent,
    NotFoundComponent,
  
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
