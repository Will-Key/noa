export interface Agent {
    r_i: number
    r_numero: string
    r_nom: string
    r_prenoms: string
}

export interface Product {
    r_produit: number
    r_designation: string
    r_code: string
    r_reference: string
    r_periodicite_paiement: number
    r_statut: number
}

export interface pieceType {
    r_i: number
    r_libelle: string
    r_type_parametre: string
    r_code: string
}