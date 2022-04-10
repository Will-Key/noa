import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from 'src/app/shared/models';
import { environment } from 'src/environments/environment';
import { Adherent } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class SecondaryAdherentService {

  private baseUrl = `${environment.apiUrl}/mutuelle/majadherent`

  constructor(private http: HttpClient) { }

  cudEntitledPerson(payload: Adherent) {
    console.log(payload)
    return this.http.post<ApiResponse>(this.baseUrl, payload)
  }
}
