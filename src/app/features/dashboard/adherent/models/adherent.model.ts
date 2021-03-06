
export interface Adherent {
    r_i?: number
    r_numero: string
    r_nom: string
    r_prenoms: string
    r_telephone: string
    r_date_naissance: string
    r_age?: string
    r_sexe: string
    r_type_piece: string
    r_numero_piece: string
    r_photo: string
    r_adresse: string
    r_email: string
    r_parent: string
    r_mutuelle: number
    r_statut: number
    r_nom_prenoms_parent?: string
    r_parent_data?: Adherent
}