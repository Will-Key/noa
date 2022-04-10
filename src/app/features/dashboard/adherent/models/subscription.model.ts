import { Adherent } from "./adherent.model";
import { Product, Agent } from "./fields.model";

export interface AdherentSubscription extends Adherent {
    r_agent: Agent[]
    r_produit: Product[]
    r_adherent_secondaire: Adherent[]
}
