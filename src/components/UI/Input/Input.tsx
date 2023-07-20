import React from "react";

/**Styles */
import classes from './Input.module.css'

/**Types */
import { IInputProps } from "../../Helpers/Types";

const Input = ({ value, onChange, onBlur, type, id, isValid, label, className }: IInputProps) => {

    return (
        <div className={`${classes.formControls} ${className} ${!isValid ? classes.invalid : ''}`}>
            <label htmlFor={id} className={classes.formLabel}>{label}</label>
            <input
                id={id}
                type={type}
                className={classes.formControl}
                autoComplete="off"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
        </div>
    )
}

export default Input;