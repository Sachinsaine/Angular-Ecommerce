import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaybellineRoutingModule } from './maybelline-routing.module';
import { BeautyAdviceComponent } from './beauty-advice/beauty-advice.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SubNavbarComponent } from './sub-navbar/sub-navbar.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { YourCartComponent } from './your-cart/your-cart.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FilterComponent } from './products/filter/filter.component';
import { ProductsComponent } from './products/products.component';
import { MaybellineComponent } from './maybelline.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { ItemDeletePopupComponent } from './item-delete-popup/item-delete-popup.component';
import { ButtonModule } from 'primeng/button';
import { CardCarouselComponent } from './card-carousel/card-carousel.component';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [
    BeautyAdviceComponent,
    NavbarComponent,
    SubNavbarComponent,
    ProductListComponent,
    PopUpComponent,
    YourCartComponent,
    CarouselComponent,
    FilterComponent,
    ProductsComponent,
    MaybellineComponent,
    HomepageComponent,
    FooterComponent,
    ItemDeletePopupComponent,
    CardCarouselComponent,
  ],
  imports: [
    CommonModule,
    MaybellineRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    CarouselModule,
  ],
})
export class MaybellineModule {}
