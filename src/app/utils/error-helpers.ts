import { AbstractControl, FormGroup, ValidatorFn } from "@angular/forms";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { SET_ALERT } from "../features/alert/store/alert.actions";
import { SNACKBAR_ERROR_TIMEOUT, SNACKBAR_SUCCESS_TIMEOUT } from "../shared/constants";
import { ApiResponse } from "../shared/models";

export function hasError(
    form: FormGroup,
    controlName: string,
    errorKey: string
): boolean {
    const control = form?.get(controlName) as AbstractControl
    return (
        control?.invalid && (control?.touched || control?.dirty) && 
        !!control?.errors?.[errorKey]
    )
}

export function hasSelectError(): ValidatorFn {
    return (control: AbstractControl) =>
      control.value === 0 ? { badValueSelect: true } : null
}

export const effectErrorHandler = (e: any) => {
    return of(
      SET_ALERT({
        alert: {
          type: 'error',
          message: getErrorMsg(e),
          timeout: SNACKBAR_ERROR_TIMEOUT,
        },
      }),
    )
}
  
export function effectSuccessHandler(store: Store, message: string) {
    store.dispatch(
        SET_ALERT({
        alert: {
            type: 'success',
            message: message,
            timeout: SNACKBAR_SUCCESS_TIMEOUT,
        },
        }),
    )
}

export function manageResponse(response: ApiResponse) {
    if (response.r_statut != '200') {
        return SET_ALERT({
            alert: {
              type: 'error',
              message: response.r_message,
              timeout: SNACKBAR_ERROR_TIMEOUT,
            },
        })
    }
    return SET_ALERT({
        alert: {
          type: 'success',
          message: response.r_message,
          timeout: SNACKBAR_SUCCESS_TIMEOUT,
        },
    })

}


export function getErrorMsg(httpError: any): string {
    if (httpError.status === 0) {
        return `Erreur lors du traitement de votre requête.`
    }
    return httpError.message
}