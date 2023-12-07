import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function prohibitedWords(regExp: RegExp): ValidatorFn 
{
    return (abstractControl: AbstractControl): ValidationErrors | null => {
        if (abstractControl.value == null) {
            return null; // skip testing...
        }

        let notAllowed = regExp.test(abstractControl.value.toLowerCase());

        if (notAllowed) {
            return {
                // Used in nameFormControl.errors?.['prohibited'] or emailFormControl.errors?.['prohibited']
                // Note you can use completely different name ...
                prohibited: {value: abstractControl.value}  // validation failed. 
            };
        } else {
            return null;    // validation success.
        }
    }
}

export function validateWholeNumber(abstractControl: AbstractControl) 
{
    let formValue = abstractControl.value;
    let isNumber =  /^[0-9]*$/.test(formValue);

    if (!isNumber) {
        return {
            notintegervalue: {value: abstractControl.value}  // validation failed.  
        }  
    }
    return null;    // validation success.
}
    