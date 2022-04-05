import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { AuthApiResponse, FinalParamConnexion, User } from '../models'
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  fakeUser: User = {
    r_i: 1,
    r_nom: "TOURE",
    r_email: "ceco15jc@gmail.com",
    r_prenom: "CEDRICK",
    r_login: "MUE01",
    r_profil: "ADMIN",
    id_profil: 1,
    r_profil_i: 1,
    r_telephone: "0747996917",
    r_code_profil: "PF001",
    r_date_derniere_cnx: "04/03/2022"
  }
  fakeUserMdp: string = "12345"

  fakeAuthApiResponseInSuccessCase: AuthApiResponse = {
    statut: "200",
    contenu: this.fakeUser,
    message: "Connexion succeeded",
  }

  fakeAuthApiResponseInFailedCase: AuthApiResponse = {
    statut: "400",
    contenu: null,
    message: "Connexion failed"
  }

  apiUrl = `${environment.apiUrl}/mutuelle`
  constructor(private http: HttpClient) { }

  login(body: FinalParamConnexion) {
    return this.http.post<AuthApiResponse>(`${this.apiUrl}/connexion`, body)
  }

  fakeLogin(body: FinalParamConnexion): Observable<AuthApiResponse> {
    return this.handleAuthentication(body)
  }

  getFakeUser() {
    return of(this.fakeUser)
    //return this.handleUser(login)
  }

  private handleAuthentication(body: FinalParamConnexion) {
    if (body.param_cnx.p_login === this.fakeUser.r_login &&
        body.param_cnx.p_mdp === this.fakeUserMdp
      ) {
        return of(this.fakeAuthApiResponseInSuccessCase)
      }
    return of(this.fakeAuthApiResponseInFailedCase)
  }

  private handleUser(login: string): Observable<User | null> {
    if (this.fakeUser.r_login === login) return of(this.fakeUser)
    return of(null)
  }

}
