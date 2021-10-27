import { Students } from '../models/Students';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ServerHttpService {
//thong bao kieu du lieu lay ve trao doi la json
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
//dinh nghia dia chi server
private api = 'http://localhost:8080/';

//khoi tao httpclient
constructor(private httpClient: HttpClient) {}

public getSV() {
  return this.httpClient.get<any>(this.api + '/api/sv', this.httpOptions);
}

public addSV(data: any){
  return this.httpClient.post<any>(this.api + '/api/sv',data, this.httpOptions);
}

public deleteSV(studentId: any) {
  return this.httpClient.delete<any>(this.api + '/api/sv'+ studentId);
}

public getSVByMaSV(studentId: any) {
  return this.httpClient.get<any>(this.api + '/api/sv'+ studentId, this.httpOptions);
}

public updateSV(studentId: string, data: Students) {
  return this.httpClient.put<any>(this.api + '/api/sv'+ studentId, data, this.httpOptions);
}


}
