import { User } from '../models'

export interface AuthApiResponse {
    statut: string
    contenu: User | null
    message: string
}