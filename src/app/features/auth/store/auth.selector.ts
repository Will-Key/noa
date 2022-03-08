import { createSelector } from '@ngrx/store'
import { User } from '../models'
import { selectUser } from './auth.reducer'

export const selectUserFullName = createSelector(
    selectUser as any,
    (user: User) => (user ? user.r_nom + ' ' + user.r_prenom : '' )
)

export const selectUserProfile = createSelector(
    selectUser as any,
    (user: User) => user?.r_profil
)