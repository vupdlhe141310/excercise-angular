import { Students } from '../models/Students';
import { Component, OnInit } from '@angular/core';
import { ServerHttpService } from '../Service/server-http.service';
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
  //chuyen den form dien thong tin sv
  public themSV() {
    this.route.navigate(['studentform', '']);
  }

  public suaSV(studentId: any) {
    this.route.navigate(['studentform', studentId]);
  }

  public xoaSV(studentId: any) {
    this.serverHttp.deleteSV(studentId).subscribe((data) => {
      console.log('delete', data);
      this.getAllSV();
    });
  }

  public timSV(key: string): void {
    const newStudents: Students[] = [];

    this.students.forEach(element => {
      if (element.masv.toLowerCase().indexOf(key.toLowerCase()) != -1 || element.malop.toLowerCase().indexOf(key.toLowerCase()) != -1) {
        newStudents.push(element)
      }
    });

    this.students = newStudents;
    if (newStudents.length != 0) {
      this.getAllSV();
    }
  }

}
