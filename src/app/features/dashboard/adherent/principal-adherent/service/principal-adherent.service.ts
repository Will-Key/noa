import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ApiResponse } from "src/app/shared/models/api-response.model";
import { AdherentSubscription } from "../../models";
import { PrincipalAdherentApiResponse } from "../../models/adherent-api-response.model";
import { BASE_PRINCIPAL_ADHERENT } from "./fake-data";
import { FetchListPayload } from "src/app/shared/models";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class PrincipalAdherentService {

    private baseUrl = `${environment.apiUrl}/mutuelle/souscription`

    adherentList = BASE_PRINCIPAL_ADHERENT

    constructor(private http: HttpClient) {}

    create(payload: AdherentSubscription) {
        //console.log(payload)
        //this.addNewAdherentToAdherentList(payload)
        return this.http.post<ApiResponse>(this.baseUrl, payload)
    }

    // private addNewAdherentToAdherentList(newAdherent: AdherentSubscription) {
    //     this.adherentList.push(newAdherent)
    // }
}