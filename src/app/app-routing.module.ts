import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentFormComponent } from './studentform/studentform.component';

const routes: Routes = [
  { path: 'studentform/:masv', component: StudentFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
