import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './components/Home/home/home.component';
import { SmartPhonesComponent } from './components/Products/smart-phones/smart-phones.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { LineaBlancaComponent } from './components/Products/linea-blanca/linea-blanca.component';
import { FotografiaComponent } from './components/Products/fotografia/fotografia.component';
import { CustomerCareComponent } from './components/ToolBar/customer-care/customer-care.component';
import { VisitUSComponent } from './components/ToolBar/visit-us/visit-us.component';
import { CompraComponent } from './components/Products/compra/compra.component';


const Rutas:Routes = [
    { path: '', component:HomeComponent },
    { path: 'smarthphone', component: SmartPhonesComponent },
    { path: 'lineaBlanca', component: LineaBlancaComponent },
    { path: 'fotografia', component: FotografiaComponent },
    { path: 'customer', component: CustomerCareComponent },
    { path: 'visitUs', component: VisitUSComponent },
    { path: 'compra/:id', component: CompraComponent },
    { path: 'notFound', component:NotFoundComponent},
    { path: '**', pathMatch: 'full', redirectTo:'notFound'},

]

export const APP_ROUTES = RouterModule.forRoot(Rutas)

  