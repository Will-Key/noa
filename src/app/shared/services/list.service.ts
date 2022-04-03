import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FetchListPayload, FetchResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private baseUrl = `${environment.apiUrl}/liste/`

  constructor(private http: HttpClient) { }

  fetch(request: FetchListPayload) {
    return this.http.post<FetchResponse>(this.baseUrl, request)
  }
}
