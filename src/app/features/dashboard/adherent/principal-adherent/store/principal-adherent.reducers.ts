import { createFeature, createReducer, on } from "@ngrx/store";
import { AdherentSubscription } from "../../models";
import * as PrincipalAdherentActions from "./principal-adherent.actions";

export interface State {
    principalAdherentList: AdherentSubscription[],
    principalAdherentSelected: AdherentSubscription | null,
    message: string | null,
    loading: boolean
}

const initialState: State = {
    principalAdherentList: [],
    principalAdherentSelected: null,
    message: null,
    loading: false
}

export const principalAdherentReducer = createFeature({
    name: 'principal-adherent',
    reducer: createReducer(
        initialState,
        on(PrincipalAdherentActions.TRY_CREATE_ADHERENT, (state) => ({
            ...state,
            loading: true
        })),
        on(PrincipalAdherentActions.ADHERENT_CREATION_SUCCEEDED, (state, { response }) => ({
            ...state,
            message: response.message,
            loading: false
        })),
        on(PrincipalAdherentActions.ADHERENT_CREATION_FAILED, (state, { response }) => ({
            ...state,
            message: response.message,
            loading: false
        })),
        on(PrincipalAdherentActions.TRY_FETCH_ADHERENT, (state) => ({
            ...state,
            loading: true
        })),
        on(PrincipalAdherentActions.ADHERENT_FETCHED, (state, { response }) => ({
            ...state,
            message: response.message,
            loading: false,
            principalAdherentList: response.contenu as AdherentSubscription []
        })),
        on(PrincipalAdherentActions.SET_ADHERENT, (state, { adherent }) => ({
            ...state,
            principalAdherentSelected: adherent
        })),
        on(PrincipalAdherentActions.CLEAR_STATE, (state) => ({
            ...state,
            message: null,
            loading: false,
            principalAdherentSelected: null,
            principalAdherentList: []
        })),
        on(PrincipalAdherentActions.CLEAR_MESSAGE, (state) => ({
            ...state,
            message: null,
            loading: false
        }))
    )
})

export const { 
    name, 
    reducer, 
    selectPrincipalAdherentList,  
    selectPrincipalAdherentSelected,
    selectLoading,
    selectMessage
} = principalAdherentReducer