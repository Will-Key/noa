import { createFeature, createReducer, on } from "@ngrx/store";
import { Adherent, AdherentSubscription } from "../../models";
import * as EntitledPersonActions from "./secondary-adherent.action"

export interface State {
    entitledPersonList: Adherent[] | null
    entitledPersonSelected: Adherent | null
    principalAdherent: AdherentSubscription[] | []
    principalAdherentSelected: AdherentSubscription | null
    message: string | null,
    loading: boolean
}

const initialState: State = {
    entitledPersonList: null,
    entitledPersonSelected: null,
    principalAdherent: [],
    principalAdherentSelected: null,
    message: null,
    loading: false
}

export const entitledPersonReducer = createFeature({
    name: 'Entitled Person',
    reducer: createReducer(
        initialState,
        on(EntitledPersonActions.TRY_FETCH_ADHERENT, (state) => ({
            ...state,
            loading: true
        })),
        on(EntitledPersonActions.FETCH_ADHERENT_SUCCEEDED, (state, { response }) => ({
            ...state,
            loading: false,
            principalAdherent: response.contenu
        })),
        on(EntitledPersonActions.FETCH_SUB_ADHERENT_SUCCEEDED, (state, { response }) => ({
            ...state,
            loading: false,
            entitledPersonList: response.contenu
        })),
        on(EntitledPersonActions.FETCH_ADHERENT_FAILED, (state, { response }) => ({
            ...state,
            loading: false,
            message: response.message,
        })),
        on(EntitledPersonActions.SET_ADHERENT, (state, { adherent }) => ({
            ...state,
            loading: false,
            principalAdherentSelected: adherent
        })),
        on(EntitledPersonActions.SET_ENTITLED_PERSON, (state, { entitledPerson }) => ({
            ...state,
            entitledPersonSelected: entitledPerson
        })),
        on(EntitledPersonActions.GET_ENTITLED_PERSON, (state, { entitledPersons }) => ({
            ...state,
            loading: false,
            entitledPersonList: entitledPersons
        })),
    )
})

export const {
    selectLoading,
    selectEntitledPersonList,
    selectEntitledPersonSelected,
    selectPrincipalAdherent,
    selectPrincipalAdherentSelected
} = entitledPersonReducer