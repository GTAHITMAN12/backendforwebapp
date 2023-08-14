import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { StoreComponent } from './store/store.component';
import { DashbroadComponent } from './dashbroad/dashbroad.component';

const routes: Routes = [ {path: '' ,component: OrderComponent},
{path: 'Order' ,component: OrderComponent},
{path: 'Store' ,component: StoreComponent},
{path: 'Dash' ,component: DashbroadComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
