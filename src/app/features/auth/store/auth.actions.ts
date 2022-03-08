import { createAction, props } from "@ngrx/store"
import { AuthApiResponse } from "../models"
import { FinalParamConnexion } from "../models/login.model"


export const LOGIN = createAction(
    '[Auth] LOGIN',
    props<{ body: FinalParamConnexion}>(),
)

export const LOGIN_SUCCEEDED = createAction(
    '[Auth] LOGIN SUCCEEDED',
    props<{ response: AuthApiResponse }>(),
)

export const LOGIN_FAILED = createAction(
    '[Auth] LOGIN FAILED',
    props<{ message: string }>()
)

export const CLEAR_MESSAGE = createAction(
    '[Auth] CLEAR MESSAGE'
)