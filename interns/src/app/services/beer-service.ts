import { Injectable } from '@angular/core';
import { Beer } from '../entities/Beer';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  constructor(private http: HttpClient) {}

  public getBeer = (id: number): Observable<Beer> =>
    this.http.get<Beer>(`${environment.apiUrl}/beers/${id}`)

  public getBeers = (page: number, limit: number) =>
    this.http.get<Beer[]>(`${environment.apiUrl}/beers?page=${page}&limit=${limit}`)
}
