import { ApiResponse } from 'src/app/shared/models/api-response.model'
import { User } from '../models'

export interface AuthApiResponse extends ApiResponse {
    contenu: User | null
}