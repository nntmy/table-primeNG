import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoServerService {
  public API: string = "http://localhost:3000/task"; // khai bao url
  constructor(public http: HttpClient) {}

  //phuong thuc lay object tu url
  getTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.API);
  }

}
