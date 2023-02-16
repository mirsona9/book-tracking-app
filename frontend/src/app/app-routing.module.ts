import { UpdatebookComponent } from './components/updatebook/updatebook.component';
import { AddbookComponent } from './components/addbook/addbook.component';
import { ViewbooksComponent } from './components/viewbooks/viewbooks.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: ViewbooksComponent},
  {path: 'add', component: AddbookComponent},
  {path: 'update/:id', component: UpdatebookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
