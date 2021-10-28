import { Students } from '../models/Student';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ServerHttpService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

private api = 'localhost:8080/api/sv';

//khoi tao httpclient
constructor(private httpClient: HttpClient) {}

public getSV() {

  return this.httpClient.get<any>(this.api, this.httpOptions);
}

public addSV(data: any){
  return this.httpClient.post<any>(this.api, data, this.httpOptions);
}

public deleteSV(masv: string) {
  return this.httpClient.delete<any>(this.api + '/'+ masv);
}

public getSVByMaSV(masv: string) {
  return this.httpClient.get<any>(this.api + '/'+ masv, this.httpOptions);
}

public updateSV(masv: string, data: Students) {
  return this.httpClient.put<any>(this.api + '/'+ masv, data, this.httpOptions);
}
public getSVNu(maLop: string) {
  return this.httpClient.get<any>('localhost:8080/api/getsvnu/'+ maLop, this.httpOptions);
}

}
