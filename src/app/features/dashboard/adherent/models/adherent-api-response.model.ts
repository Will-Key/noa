import { ApiResponse } from "../../../../shared/models/api-response.model";
import { Adherent } from "./adherent.model";
import { AdherentSubscription } from "./subscription.model";

export interface PrincipalAdherentApiResponse extends ApiResponse {
    contenu: AdherentSubscription[]
}

export interface SecondaryAdherentApiResponse extends ApiResponse {
    contenu: Adherent[]
}