import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Torneo } from '../models/torneo.model';

@Injectable({
  providedIn: 'root'
})
export class TorneoService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getTorneos(): Observable<Torneo[]> {
    const torneos$ = this.http.get<Torneo[]>(this.apiUrl);
    return torneos$;
  }
}