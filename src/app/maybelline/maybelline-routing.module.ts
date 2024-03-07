import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaybellineComponent } from './maybelline.component';
import { ProductsComponent } from './products/products.component';
import { YourCartComponent } from './your-cart/your-cart.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BeautyAdviceComponent } from './beauty-advice/beauty-advice.component';

const routes: Routes = [
  {
    path: 'maybelline',
    component: MaybellineComponent,

    children: [
      { path: 'allProducts', component: ProductsComponent },
      { path: 'yourCart', component: YourCartComponent },
      { path: 'homepage', component: HomepageComponent },
      { path: 'beautyAdvice', component: BeautyAdviceComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaybellineRoutingModule {}
