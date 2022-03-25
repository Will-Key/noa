import { Adherent } from "./adherent.model";

export interface AdherentSubscription extends Adherent {
    r_i?: number;
    r_agent: number
    r_produit: Product
}

export interface Product {
    r_produit: number;
    r_reference: string;
    r_periodicite_paiement: number;
}