import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as AppActions from "./app.action";
import { User } from "../features/auth/models";
import { AuthService } from "../features/auth/services/auth.service";
import { getToken } from "../utils";
import { map, mergeMap } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class AppEffects {

    constructor(
        private actions$: Actions, 
        private authService: AuthService,
        private router: Router
    ) {}

    fetchUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AppActions.FETCH_USER_DATA),
            mergeMap(() => this.authService.getFakeUser().pipe(
                map((user: User) => {
                    console.log(user)
                    return AppActions.USER_DATA_FETCHED({user})
                    //if (Object.keys(token).length !== 0) 
                    //return AppActions.LOGOUT()
                })
            ))
        ),
    )

    logout$ = createEffect(() =>
        this.actions$.pipe(
            map(() => {
                localStorage.clear()
                return this.router.navigate(['/auth/login'])
            })
        ),
        { dispatch: false}
    )
}