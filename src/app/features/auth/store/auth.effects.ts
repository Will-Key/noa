import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { of } from 'rxjs';
import { map, mergeMap, catchError } from "rxjs/operators";
import * as AuthActions from "./auth.actions";
import { AuthApiResponse } from "../models";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
import { setToken } from "../../../utils";

@Injectable()
export class AuthEffects {

    login$ = createEffect(() => 
        this.action$.pipe(
            ofType(AuthActions.LOGIN),
            mergeMap(({body}) => this.authService.fakeLogin(body).pipe(
                map((response: AuthApiResponse) => {
                    setToken(response.contenu!)
                    return AuthActions.LOGIN_SUCCEEDED({ response })
                }),
                catchError((err: AuthApiResponse) => {
                    return of(AuthActions.LOGIN_FAILED({ message: err.message }))
                })
            ))
        )
    )

    loginSucceeded$ = createEffect(() =>
        this.action$.pipe(
            ofType(AuthActions.LOGIN_SUCCEEDED),
            map(() => {
                AuthActions.CLEAR_MESSAGE()
                return this.router.navigate(['/'])
            }),
        ),
        { dispatch: false }
    )

    constructor(
        private action$: Actions, 
        private authService: AuthService,
        private router: Router
    ) {}
}