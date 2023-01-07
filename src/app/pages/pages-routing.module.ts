import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CatalogeComponent } from './cataloge/cataloge.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { ProductComponent } from './product/product.component';

const routes:Routes = [
  //rutas hijas
  {path:'dashboard',
  component:PagesComponent,
children:[
  {path:'', component:DashboardComponent},
  {path:'cataloge', component:CatalogeComponent},
  {path:'product', component:ProductComponent},

]
},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule]
})
export class PagesRoutingModule {}
