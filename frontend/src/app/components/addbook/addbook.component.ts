import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {

  constructor(private service: AppService, private router: Router) {}

  data: any

  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    pages: new FormControl('', [Validators.required])
  })

  ngOnInit(): void {}

  submit() {
    this.data = this.form.value
    console.log(this.data)

    this.service.addBook(this.data).subscribe(data => {
      console.log(data)
    })
    this.router.navigate(['/']);
  }

}
