import { AbstractControl, FormGroup, ValidatorFn } from "@angular/forms";

export function hasError(
    form: FormGroup,
    controlName: string,
    errorKey: string
): boolean {
    const control = form.get(controlName) as AbstractControl
    return (
        control?.invalid && (control?.touched || control?.dirty) && 
        !!control?.errors?.[errorKey]
    )
}