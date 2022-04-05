import { ApiResponse } from "../../../../shared/models/api-response.model";
import { AdherentSubscription } from "./subscription.model";

export interface PrincipalAdherentApiResponse extends ApiResponse {
    r_contenu: AdherentSubscription[]
}