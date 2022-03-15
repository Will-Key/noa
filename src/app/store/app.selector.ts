import { createSelector } from "@ngrx/store";
import { User } from "../features/auth/models";
import * as fromApp from "./app.reducer"

export interface AppState {
    app: fromApp.State
}

export const selectApp = (state: AppState) => state.app

export const selectAppReady = createSelector(
    selectApp,
    (state: fromApp.State) => state.appReady
)

export const selectUser = createSelector(
    selectApp,
    (state: fromApp.State) => state?.user
)

export const selectUserFullName = createSelector(
    selectUser as any,
    (user: User) => user ? user.r_nom + ' ' + user.r_prenom : ''
)

export const selectUserProfile = createSelector(
    selectUser as any,
    (user: User) => user?.r_profil
)