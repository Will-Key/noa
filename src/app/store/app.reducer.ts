import { createReducer, on } from "@ngrx/store";
import { User } from "../features/auth/models";
import * as AppActions from "./app.action"

export interface State {
    user: User | null,
    appReady: boolean
}

const initialState: State = {
    user: null,
    appReady: false
}

export const reducer = createReducer<State>(
    initialState,
    on(AppActions.USER_DATA_FETCHED, (state, { user }) => ({
        ...state,
        user,
        appReady: true
    })),
    on(AppActions.LOGOUT, () => {
        localStorage.clear()

        return initialState
    })
)