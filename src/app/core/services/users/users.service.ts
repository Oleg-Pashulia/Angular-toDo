import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../../interfaces/users.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = 'http://localhost:3000/users'

  constructor(
    private http: HttpClient
    ) { }

  getUsers(): Observable<Array<Users>> {
    return this.http.get<Array<Users>>(this.url) 
  }
  getUser(userId: number): Observable<Array<Users>> {
    return this.http.get<Array<Users>>(`${this.url}/${userId}`) 
  }    
}
