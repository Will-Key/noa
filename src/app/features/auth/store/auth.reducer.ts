import { createFeature, createReducer, on } from "@ngrx/store"
import { User } from "../models"
import * as AuthActions from './auth.actions'

export interface State {
    user: User | null
    message: string | null
    loading: boolean
}

const initialState: State = {
    user: null,
    message: null,
    loading: false
}

export const authFeature = createFeature({
    name: 'auth',
    reducer: createReducer(
        initialState,
        on(AuthActions.LOGIN, (state) => ({
            ...state,
            user: null,
            message: null,
            loading: true
        })),
        on(AuthActions.LOGIN_SUCCEEDED, (state, { response }) => ({
            ...state,
            user: response.contenu,
            message: null,
            loading: false
        })),
        on(AuthActions.LOGIN_FAILED, (state, {message}) => ({
            ...state,
            user: null,
            message: message,
            loading: false
        })),
        on(AuthActions.CLEAR_MESSAGE, (state) => ({
            ...state,
            message: null
        }))
    )
})

export const {
    name,
    reducer,
    selectAuthState,
    selectLoading,
    selectMessage,
    selectUser
} = authFeature