import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { SET_ALERT } from "src/app/features/alert/store/alert.actions";
import { SNACKBAR_ERROR_TIMEOUT, SNACKBAR_SUCCESS_TIMEOUT } from "src/app/shared/constants";
import { FetchResponse } from "src/app/shared/models";
import { ApiResponse } from "src/app/shared/models/api-response.model";
import { ListService } from "src/app/shared/services/list.service";
import { effectErrorHandler, effectSuccessHandler, manageResponse } from "src/app/utils";
import { PrincipalAdherentApiResponse } from "../../models/adherent-api-response.model";
import { PrincipalAdherentService } from "../service/principal-adherent.service";
import * as PrincipalAdherentActions from "./principal-adherent.actions"


@Injectable()
export class PrincipalAdherentEffects {

    tryFetchAdherent = createEffect(() => 
        this.actions$.pipe(
            ofType(PrincipalAdherentActions.TRY_FETCH_ADHERENT),
            mergeMap(({ request }) => this.listService.fetch(request).pipe(
                map((response: FetchResponse) => {
                    return PrincipalAdherentActions.ADHERENT_FETCHED({ response })
                }),
                catchError((response: PrincipalAdherentApiResponse) => {
                    effectErrorHandler(response)
                    return of(PrincipalAdherentActions.ADHERENT_FETCH_FAILED({ response }))
                })
            ) )
        )
    )

    tryCreateAdherent = createEffect(() => 
        this.actions$.pipe(
            ofType(PrincipalAdherentActions.TRY_CREATE_ADHERENT),
            mergeMap(({ payload }) => this.principalAdherentService.create(payload).pipe(
                tap((response) => effectSuccessHandler(this.store, response.message)),
                map((response: ApiResponse) => {
                    manageResponse(this.store, response)

                    return PrincipalAdherentActions.ADHERENT_CREATION_SUCCEEDED({ response })
                }),
                catchError((error) => {
                    effectErrorHandler(error)
                    return of(PrincipalAdherentActions.ADHERENT_CREATION_FAILED({ response: error }))
                })
            ))
        )
    )

    tryDeleteAdherent = createEffect(() => 
        this.actions$.pipe(
            ofType(PrincipalAdherentActions.TRY_DELETE_ADHERENT),
            mergeMap(({ payload }) => this.principalAdherentService.create(payload).pipe(
                tap((response) => effectSuccessHandler(this.store, response.message)),
                map((response: ApiResponse) => {
                    manageResponse(this.store, response)
                    PrincipalAdherentActions.TRY_FETCH_ADHERENT({ request: { p_code: 'REQ007', p_arguments: '' } })
                    return PrincipalAdherentActions.ADHERENT_CREATION_SUCCEEDED({ response })
                }),
                catchError((error) => {
                    effectErrorHandler(error)
                    return of(PrincipalAdherentActions.ADHERENT_CREATION_FAILED({ response: error }))
                })
            ))
        )
    )

    constructor(
        private actions$: Actions, 
        private principalAdherentService: PrincipalAdherentService, 
        private listService: ListService,
        private router: Router,
        private store: Store
    ) {}
}

// map((response: PrincipalAdherentApiResponse) => PrincipalAdherentActions.ADHERENT_FETCHED({ response })),
//                 catchError((response) => PrincipalAdherentActions.ADHERENT_FETCH_FAILED({ response }))