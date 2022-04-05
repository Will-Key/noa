import { AdherentSubscription } from "../../models";

export const BASE_PRINCIPAL_ADHERENT: AdherentSubscription[] = [
    {
        r_numero: '0001',
        r_nom: 'KONAN',
        r_prenoms: 'GILBERT',
        r_telephone: '2250789009201',
        r_date_naissance: '1962-05-14',
        r_sexe: '2',
        r_type_piece: '1',
        r_numero_piece: 'C 0111 1983 93',
        r_photo: 'cni.jpg',
        r_adresse: 'Yamoussoukro Kokrenou',
        r_email: 'gilbertkonan@gmail.com',
        r_parent: '1',
        r_mutuelle: 1,
        r_statut: 1,
        r_agent: [
            {
                r_i: 1, 
                r_numero: '2', 
                r_nom: 'Lapin', 
                r_prenoms: 'Pierrot'
            }
        ],
        r_produit: [
            {
                r_produit: 1,
                r_reference: 'dfk,lfslk,dsf,lsdkf',
                r_periodicite_paiement: 1,
                r_code: '0001',
                r_designation: 'Décès',
                r_statut: 1
            }
        ],
        r_adherent_secondaire: []
    },
    {
        r_numero: '0002',
        r_nom: 'KOUAME',
        r_prenoms: 'FULGENCE',
        r_telephone: '2250788929201',
        r_date_naissance: '1967-05-16',
        r_sexe: '2',
        r_type_piece: '1',
        r_numero_piece: 'C 0111 2345 93',
        r_photo: 'cni-ful.jpg',
        r_adresse: 'Yamoussoukro Kokrenou',
        r_email: 'fulgencekonan@gmail.com',
        r_parent: '2',
        r_mutuelle: 1,
        r_statut: 1,
        r_agent: [
            {
                r_i: 1, 
                r_numero: '2', 
                r_nom: 'Lapin', 
                r_prenoms: 'Pierrot'
            }
        ],
        r_produit: [
            {
                r_produit: 1,
                r_reference: 'jfdsfjiazenzanokza',
                r_periodicite_paiement: 1,
                r_code: '0001',
                r_designation: 'Décès',
                r_statut: 1
            },
            {
                r_produit: 2,
                r_reference: 'pofdsiondfs dsfndsknlds',
                r_periodicite_paiement: 1,
                r_code: '0002',
                r_designation: 'Churigie',
                r_statut: 1
            }
        ],
        r_adherent_secondaire: []
    },
]