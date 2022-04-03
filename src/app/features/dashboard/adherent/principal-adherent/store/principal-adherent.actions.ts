import { createAction, props } from '@ngrx/store';
import { FetchListPayload, FetchResponse } from 'src/app/shared/models';
import { ApiResponse } from 'src/app/shared/models/api-response.model';
import { AdherentSubscription } from '../../models';
import { PrincipalAdherentApiResponse } from '../../models/adherent-api-response.model';

export const TRY_FETCH_ADHERENT = createAction(
    '[PRINCIPAL ADHERENT] TRY FETCH',
    props<{ request: FetchListPayload }>()
)

export const ADHERENT_FETCHED = createAction(
    '[PRINCIPAL ADHERENT] ADHERENT FETCHED',
    props<{ response: FetchResponse }>()
)

export const ADHERENT_FETCH_FAILED = createAction(
    '[PRINCIPAL ADHERENT] ADHERENT FETCH FAILED',
    props<{ response: PrincipalAdherentApiResponse }>()
)

export const TRY_CREATE_ADHERENT = createAction(
    '[PRINCIPAL ADHERENT] TRY CREATE',
    props<{ payload: AdherentSubscription}>()
)

export const ADHERENT_CREATION_SUCCEEDED = createAction(
    '[PRINCIPAL ADHERENT] CREATION SUCCEEDED',
    props<{ response: ApiResponse }>()
)

export const ADHERENT_CREATION_FAILED = createAction(
    '[PRINCIPAL ADHERENT] CREATION FAILED',
    props<{ response: ApiResponse }>()
)


export const TRY_DELETE_ADHERENT = createAction(
    '[PRINCIPAL ADHERENT] TRY DELETE',
    props<{ payload: AdherentSubscription}>()
)

export const SET_ADHERENT = createAction(
    '[PRINCIPAL ADHERENT] SET ADHERENT',
    props<{ adherent: AdherentSubscription }>()
)

export const CLEAR_STATE = createAction(
    '[PRINCIPAL ADHERENT] CLEAR STATE'
)

export const CLEAR_MESSAGE = createAction(
    '[PRINCIPAL ADHERENT] CLEAR MESSAGE'
)