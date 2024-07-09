import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleSubject } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  http = inject(HttpClient);
  url = 'assets/subject.json';
  getApiData(): Observable<SingleSubject[]> {
    return this.http.get<SingleSubject[]>(this.url);
  }
}
