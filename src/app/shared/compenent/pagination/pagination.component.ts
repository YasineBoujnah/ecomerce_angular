import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent implements OnChanges {
  @Input() data: any[] = [];
  @Input() itemsPerPage: number = 8;
  @Output() paginatedData = new EventEmitter<any[]>();

  currentPage: number = 1;
  totalPages: number = 1;
  totalItems: number = 0;
  Math = Math; // Expose Math to template

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.totalItems = this.data.length;
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage) || 1;
      this.currentPage = 1;
      this.calculatePagination();
    }
  }

  calculatePagination() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    const slice = this.data.slice(startIndex, endIndex);

    this.paginatedData.emit(slice);

    // Scroll to top of the list
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.calculatePagination();
    }
  }

  goToPreviousPage() {
    this.changePage(this.currentPage - 1);
  }

  goToNextPage() {
    this.changePage(this.currentPage + 1);
  }

  getPageNumbers(): number[] {
    const pages: number[] = [];

    if (this.totalPages <= 5) {
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      let start = Math.max(2, this.currentPage - 1);
      let end = Math.min(this.totalPages - 1, this.currentPage + 1);

      if (start > 2) {
        pages.push(-1);
        start = this.currentPage - 1;
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (end < this.totalPages - 1) {
        pages.push(-1);
      }

      pages.push(this.totalPages);
    }

    return pages;
  }
}
