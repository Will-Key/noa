import { createFeature, createReducer, on } from "@ngrx/store";
import * as PrincipalAdherentActions from "./principal-adherent.actions";

export interface State {
    principalAdherent: [] | null
}

const initialState: State = {
    principalAdherent: null
}

export const principalAdherentReducer = createFeature({
    name: 'principal-adherent',
    reducer: createReducer(
        initialState,
        on(PrincipalAdherentActions.CREATE_ADHERENT, (state) => {
            return { ...state}
        })
    )
})

export const { name, reducer } = principalAdherentReducer