import { Students } from '../models/Student';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServerHttpService } from 'src/app/service/server-http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-studentform-component',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.scss']
})
export class StudentFormComponent implements OnInit {
public masv = '';
  constructor(
    private serverHttp: ServerHttpService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    //neu co masv thi update
    this.masv = (this.route.snapshot.paramMap.get('masv') || '');
    if (this.masv.length != 0) {
      this.loadData(this.masv);
    }
  }

  public studentForm = new FormGroup({
    masv:new FormControl(''),
    hodem: new FormControl(''),
    ten: new FormControl(''),
    ngaysinh: new FormControl(''),
    gioitinh: new FormControl(''),
    tinh: new FormControl(''),
    malop: new FormControl(''),
  });

  private loadData(masv: any) {
    console.log("load data",masv)
    this.serverHttp.getSVByMaSV(masv).subscribe((data) =>{
      console.log(data);
      for(const controlName in this.studentForm.controls){
        if(controlName){
          this.studentForm.controls[controlName].setValue(data[controlName]);
        }
      }
    });
  }

  private createSV() {
    const newStudent = {};
    for (const controlName in this.studentForm.controls) {
      if (controlName) {
        //newStudent[controlName] = this.studentForm.controls[controlName].value;
      }
    }
    return newStudent as Students;
  }



  public luuSV() {
    if (this.masv != '') {
      this.serverHttp.updateSV(this.masv, this.createSV()).subscribe((data) => {
          this.router.navigate(['student']);
        });
    } else {
      this.serverHttp.addSV(this.createSV()).subscribe((data) => {
        this.router.navigate(['student']);
      });
    }
  }

}
