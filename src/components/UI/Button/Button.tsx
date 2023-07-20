import React, { ButtonHTMLAttributes } from "react";

/**Types */

/**Styles */
import classes from "./Button.module.css"

const Button = ({ children, className, type, disabled, onClick }: ButtonHTMLAttributes<HTMLButtonElement>) => {
    const buttonType: "button" | "reset" | "submit" | undefined = type;

    return (
        <button
            className={`${classes.button} ${className}`}
            type={buttonType || "button"}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button;