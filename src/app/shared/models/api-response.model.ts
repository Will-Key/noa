import { User } from '../../features/auth/models'

export interface ApiResponse {
    statut: string
    contenu: User | null
    message: string
}