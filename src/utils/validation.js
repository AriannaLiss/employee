import { NOT_EMPTY_FIELDS } from "./const";

export function hasEmpty(object, setErrors){
    let err = false
    Object.entries(object).forEach(([key,value]) => {
        if (!NOT_EMPTY_FIELDS.includes(key)) return;
        if (typeof value === 'string' && value.trim().length===0){
            setErrors(prev=>[...prev, {field:key, message:`This field shouldn't be empty.`}])
            err = true;
        }
    })
    return err;
}

export function isUnique(field, prop, arr, setErrors){
    const hasName = arr.some(elem => elem[prop].trim().toLowerCase() === field.trim().toLowerCase());
    if (hasName) setErrors(prev=>[...prev,{field: prop, message: `User with ${prop} '${field}' already exists.`}])
    return !hasName;
}

export function hasError(errors, field){
    return errors&&errors.some(error => error.field==field);
}

export function getErrorMsg(errors, field){
    return errors&&errors.find(error => error.field==[field])?.message;
}
