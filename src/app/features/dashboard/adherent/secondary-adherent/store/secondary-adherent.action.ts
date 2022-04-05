import { createAction, props } from '@ngrx/store';
import { ApiResponse, FetchListPayload, FetchResponse } from 'src/app/shared/models';
import { Adherent, AdherentSubscription } from '../../models';
import { PrincipalAdherentApiResponse } from '../../models/adherent-api-response.model';

export const TRY_FETCH_ADHERENT = createAction(
    '[SECONDARY ADHERENT] TRY FETCH ADHERENT',
    props<{ request: FetchListPayload}>()
)

export const FETCH_ADHERENT_SUCCEEDED = createAction(
    '[SECONDARY ADHERENT] FETCH ADHERENT SUCCEEDED',
    props<{ response: PrincipalAdherentApiResponse }>()
)

export const SET_ADHERENT = createAction(
    '[SECONDARY ADHERENT] SET ADHERENT',
    props<{ adherent: AdherentSubscription }>()
)

export const GET_ENTITLED_PERSON = createAction(
    '[SECONDARY ADHERENT] ENTITLED PERSON FETCHED',
    props<{ entitledPerson: Adherent[] }>()
)

export const FETCH_ADHERENT_FAILED = createAction(
    '[SECONDARY ADHERENT] ENTITLED PERSON FETCH FAILED',
    props<{ response: FetchResponse }>()
)

export const TRY_CUD_ENTITLED_PERSON = createAction(
    '[SECONDARY ADHERENT] TRY CUD ENTITLED PERSON',
    props<{ payload: Adherent }>()
)

export const CUD_ENTITLED_PERSON_SUCCEEDED = createAction(
    '[SECONDARY ADHERENT] CUD ENTITLED PERSON SUCCEEDED',
    props<{ response: ApiResponse }>()
)

export const CUD_ENTITLED_PERSON_FAILED = createAction(
    '[SECONDARY ADHERENT] CUD ENTITLED PERSON SUCCEEDED',
    props<{ response: ApiResponse }>()
)