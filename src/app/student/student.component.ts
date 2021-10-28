import { Students } from '../models/Student';
import { Component, OnInit } from '@angular/core';
import { ServerHttpService } from '../service/server-http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-component',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})

export class StudentComponent implements OnInit {
  public students: Students[] = [];

  constructor(
    private serverHttp: ServerHttpService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.getAllSV();
  }

  public getAllSV() {
    this.serverHttp.getSV().subscribe((data) => {
      this.students = data;
    });
  }

  public themSV() {
    this.route.navigate(['studentform', '']);
  }

  public suaSV(masv: any) {
    this.route.navigate(['studentform', masv]);
  }

  public xoaSV(masv: any) {
    this.serverHttp.deleteSV(masv).subscribe((data) => {
      console.log('delete', data);
      this.getAllSV();
    });
  }

  public timSV(key: string): void {
    const newStudents: Students[] = [];

    this.students.forEach(sv => {
      if (sv.masv.indexOf(key) != -1 || sv.maLop.indexOf(key) != -1) {
        newStudents.push(sv)
      }
    });

    this.students = newStudents;
    if (newStudents.length != 0) {
      this.getAllSV();
    }
  }

}
