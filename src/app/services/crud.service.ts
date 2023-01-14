import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private http: HttpClient) {}

  private url = 'http://192.168.33.10:3000/api';

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/users`);
  }

  get(id: any): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/users/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${this.url}/create_users/`, data);
  }

  update(id : any, data : any): Observable<any> {
    return this.http.put(`${this.url}/update_users/${id}`, data);
  }

  delete(id : any): Observable<any> {
    return this.http.delete(`${this.url}/delete_users/${id}`);
  }
}
