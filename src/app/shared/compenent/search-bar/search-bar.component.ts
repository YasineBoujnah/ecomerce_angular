import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  @Input() categories: string[] = [];
  @Output() search = new EventEmitter<{ text: string, category: string }>();
  @Input() select: string = 'All Categories';
  searchText: string = '';
  selected: string = this.select;

  onSearch() {
    this.search.emit({
      text: this.searchText,
      category: this.selected
    });
  }
}
