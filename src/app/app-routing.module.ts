import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth/auth-routing.module';


const routes:Routes = [
  {path: '', redirectTo:'/dashboard', pathMatch:'full'},
  {path:'**',component:NotFoundComponent},
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    PagesRoutingModule,
    AuthRoutingModule,
    RouterModule.forRoot(routes), 
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
