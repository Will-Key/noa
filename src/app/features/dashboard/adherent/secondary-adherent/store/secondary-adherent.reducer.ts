import { createFeature, createReducer, on } from "@ngrx/store";
import { Adherent, AdherentSubscription } from "../../models";
import * as EntitledPersonActions from "./secondary-adherent.action"

export interface State {
    entitledPersonList: Adherent[] | null
    principalAdherent: AdherentSubscription[] | []
    principalAdherentSelected: AdherentSubscription | null
    message: string | null,
    loading: boolean
}

const initialState: State = {
    entitledPersonList: null,
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
            principalAdherent: response.r_contenu
        })),
        on(EntitledPersonActions.FETCH_ADHERENT_FAILED, (state, { response }) => ({
            ...state,
            loading: false,
            message: response.r_message,
        })),
        on(EntitledPersonActions.SET_ADHERENT, (state, { adherent }) => ({
            ...state,
            loading: false,
            principalAdherentSelected: adherent
        })),
        on(EntitledPersonActions.GET_ENTITLED_PERSON, (state, { entitledPerson }) => ({
            ...state,
            loading: false,
            entitledPersonList: entitledPerson
        })),
    )
})