import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export function passwordMatch(passwordFormControl: AbstractControl) {
    const validtorFn: ValidatorFn = (rePasswordFormControl: AbstractControl) => {
        if (passwordFormControl.value !== rePasswordFormControl.value) {
            return {
                passwordMissmatch: true
            }
        }
        return null;
    }
    return validtorFn;
}

export function passwordMatch2(passwordFormControl: AbstractControl): ValidationErrors | null {
    const passwordGroup = passwordFormControl.parent as FormGroup;
    if (!passwordGroup) {
        return null;
    }
    const { password, rePassword } = passwordGroup.controls;
    if (password.value !== rePassword.value) {
        return {
            passwordMatch2: true
        }
    }
    return null;
}