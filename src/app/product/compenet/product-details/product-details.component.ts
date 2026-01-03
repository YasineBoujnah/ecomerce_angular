import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../../shared/models/product';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from "../../../shared/compenent/loading/loading.component";

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterLink, LoadingComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  product: Product = {} as Product;
  loading: boolean = true;
  constructor(private route: ActivatedRoute, private productService: ProductService) { }
  ngOnInit(): void {
    this.getproductbyid();
  }
  getproductbyid() {
    this.productService.getproductbyid(this.route.snapshot.params['id']).subscribe(res => {
      this.product = res;
      this.loading = false;
    }, err => {
      console.log(err);
      alert(err.message);
    })
  }
}
