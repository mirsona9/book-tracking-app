import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewbooks',
  templateUrl: './viewbooks.component.html',
  styleUrls: ['./viewbooks.component.css']
})
export class ViewbooksComponent implements OnInit {

  books: any | undefined
  url: string = "http://localhost:8080/";

  constructor(private service: AppService, private router: Router) {}

  ngOnInit(): void {
    this.service.getBooks().subscribe(data =>{
      this.books = data;
    })
  }

  deleteBook(id: number) {
    this.service.deleteBook(id).subscribe(date => {
      this.books = this.books?.filter((book: { id: number; }) => book.id !== id);

    })

    setTimeout(() => {
      window.location.reload();
    }, 100);  //reload page after 100ms
  }

  updateBook(id: number) {
    this.router.navigate(['update', id]);
  }

}

