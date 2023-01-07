import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CatalogeComponent } from './cataloge/cataloge.component';
import { ProductComponent } from './product/product.component';
import { StaticModule } from '../static/static.module';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { FormComponent } from './product/form/form.component';
import { ListComponent } from './product/list/list.component';



@NgModule({
  declarations: [
    DashboardComponent,
    CatalogeComponent,
    ProductComponent,
    FormComponent,
    ListComponent,
  ],
  exports:[
    DashboardComponent,
    CatalogeComponent,
    ProductComponent,
  ],
  
  imports: [
    CommonModule,
    StaticModule,
    RouterModule
  ]
})
export class PagesModule { }
