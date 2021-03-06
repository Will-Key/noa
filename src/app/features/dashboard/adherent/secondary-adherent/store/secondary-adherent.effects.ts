import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { ApiResponse, FetchResponse } from "src/app/shared/models";
import { ListService } from "src/app/shared/services/list.service";
import { effectErrorHandler, manageResponse } from "src/app/utils";
import { PrincipalAdherentApiResponse } from "../../models/adherent-api-response.model";
import { SecondaryAdherentService } from "../service/secondary-adherent.service";
import * as EntitledPersonActions from "./secondary-adherent.action"

@Injectable()
export class EntitledPersonEffects {
    constructor(
        private actions$: Actions,
        private secondaryAdherentService: SecondaryAdherentService,
        private listService: ListService,
        private store: Store
    ) {}

    tryFetchAdherent = createEffect(() =>
        this.actions$.pipe(
            ofType(EntitledPersonActions.TRY_FETCH_ADHERENT),
            mergeMap(({ request }) => this.listService.fetch(request).pipe(
                map((response: FetchResponse) => {
                    return EntitledPersonActions.FETCH_ADHERENT_SUCCEEDED({ response })
                }),
                catchError((response: PrincipalAdherentApiResponse) => {
                    effectErrorHandler(response)
                    return of(EntitledPersonActions.FETCH_ADHERENT_FAILED({ response }))
                })
            ) )
        )
    )
    
    cudAdherent = createEffect(() =>
        this.actions$.pipe(
            ofType(EntitledPersonActions.TRY_CUD_ENTITLED_PERSON),
            mergeMap(({ payload }) => this.secondaryAdherentService.cudEntitledPerson(payload).pipe(
                map((response: ApiResponse) => {
                    manageResponse(this.store, response)
                    return EntitledPersonActions.CUD_ENTITLED_PERSON_SUCCEEDED({ response })
                }),
                catchError((response) => {
                    effectErrorHandler(response)
                    return of(EntitledPersonActions.FETCH_ADHERENT_FAILED({ response }))
                })
            ))
        )
    )
}