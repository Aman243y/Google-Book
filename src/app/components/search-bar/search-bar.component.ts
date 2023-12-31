import { Component, EventEmitter, Output } from '@angular/core';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  query: any;
  books: any;

  constructor(private bookService: BookService) {}

  search() {
    this.bookService.searchBooks(this.query).subscribe((data) => {
      this.books = data;
      console.log(data);

    });
  }

}
