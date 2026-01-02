import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from '../../../shared/models/product';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-all-product',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './all-product.component.html',
  styleUrl: './all-product.component.css'
})
export class AllProductComponent implements OnInit {
  selectedCategory: string = 'All Categories';
  searchText: string = '';
  allproduct: Product[] = [];
  filteredProduct: Product[] = [];
  categories: any[] = ["All Categories"];
  constructor(private productService: ProductService) { }
  ngOnInit(): void {
    this.productService.getallprouduct().subscribe(res => {
      this.allproduct = res;
      this.getallcategory();
      this.applyFilters();
    }, error => {
      console.log(error);
    })
  }

  getallcategory() {
    this.categories = ["All Categories"];
    const uniqueCategories = [...new Set(this.allproduct.map(p => p.category))];
    this.categories.push(...uniqueCategories);
  }

  filtreBySearch() {
    this.applyFilters();
  }

  applyFilters() {
    this.filteredProduct = this.allproduct.filter(product => {
      const matchesSearch = !this.searchText ||
        product.title.toLowerCase().includes(this.searchText.toLowerCase());
      const matchesCategory = this.selectedCategory === 'All Categories' ||
        product.category === this.selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }
}
