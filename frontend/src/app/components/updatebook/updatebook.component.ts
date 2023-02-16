import { Book } from './../../Book';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {

  book?: Book
  data: any

  constructor(private service: AppService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getBookById(id).subscribe(data => {
      this.book = data;
      console.log(this.book)
    })
  }

  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    pages: new FormControl('', [Validators.required])
  })

  submit() {
    this.data = this.form.value
    console.log(this.data)

    this.service.updateBook(this.book?.id!, this.data).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['/']);
  }
}
