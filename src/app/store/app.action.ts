import { createAction, props } from "@ngrx/store";
import { User } from "../features/auth/models";

export const FETCH_USER_DATA = createAction(
    '[App] Fetch user data',
    props<{ login: string }>(),
)

export const USER_DATA_FETCHED = createAction(
    '[App] User data fetched',
    props<{ user: User }>(),
)

export const LOGOUT = createAction('[App] Logout')