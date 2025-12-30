import { Routes } from '@angular/router';
import { NotFoundComponent } from './shared/compenent/not-found/not-found.component';

export const routes: Routes = [
    {
        path: 'products',
        loadChildren: () => import('./product/product.routes').then(m => m.PRODUCT_ROUTES)
    },
    {
        path: 'cart',
        loadChildren: () => import('./carts/carts.routes').then(m => m.CARTS_ROUTES)
    },
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
];
