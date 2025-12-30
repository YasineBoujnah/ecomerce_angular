import { Routes } from '@angular/router';
import { AllProductComponent } from './compenet/all-product/all-product.component';
import { ProductDetailsComponent } from './compenet/product-details/product-details.component';

export const PRODUCT_ROUTES: Routes = [
    { path: '', component: AllProductComponent },
    { path: 'details/:id', component: ProductDetailsComponent },
];
