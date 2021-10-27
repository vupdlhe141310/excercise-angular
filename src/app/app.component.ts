import { Component, ViewChild, OnInit } from '@angular/core';
import { ServerHttpService } from './service/server-http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public isOpened = false;
  public totalStudents = 0;

  constructor(
    private serverHttp: ServerHttpService
  ) {}

  ngOnInit(): void {

  }

}

