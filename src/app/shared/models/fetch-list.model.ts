import { ApiResponse } from "./api-response.model"

export interface FetchListPayload {
    p_code: string
    p_arguments: string
}

export interface FetchResponse extends ApiResponse {
    contenu: any
}
