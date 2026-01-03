import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from '../../../shared/models/product';
import { RouterLink } from "@angular/router";
import { LoadingComponent } from "../../../shared/compenent/loading/loading.component";
import { SearchBarComponent } from "../../../shared/compenent/search-bar/search-bar.component";
import { PaginationComponent } from "../../../shared/compenent/pagination/pagination.component";

@Component({
  selector: 'app-all-product',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, LoadingComponent, SearchBarComponent, PaginationComponent],
  templateUrl: './all-product.component.html',
  styleUrl: './all-product.component.css'
})
export class AllProductComponent implements OnInit {
  selectedCategory: string = 'All Categories';
  searchText: string = '';
  allproduct: Product[] = [];
  filteredProduct: Product[] = [];
  paginatedProducts: Product[] = [];
  categories: any[] = ["All Categories"];

  // Pagination properties
  itemsPerPage: number = 8;
  loading: boolean = true;

  constructor(private productService: ProductService) { }
  ngOnInit(): void {
    this.productService.getallprouduct().subscribe(res => {
      this.allproduct = res;
      this.getallcategory();
      this.Filters();
      this.loading = false;
    }, error => {
      console.log(error);
    })
  }

  getallcategory() {
    const uniqueCategories = [...new Set(this.allproduct.map(p => p.category))];
    this.categories.push(...uniqueCategories);
  }

  Filters() {
    this.filteredProduct = this.allproduct.filter(product => {
      const matchesSearch = !this.searchText ||
        product.title.toLowerCase().includes(this.searchText.toLowerCase());
      const matchesCategory = this.selectedCategory === 'All Categories' ||
        product.category === this.selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }

  handleSearch(event: { text: string, category: string }) {
    this.searchText = event.text;
    this.selectedCategory = event.category;
    this.Filters();
  }
}
