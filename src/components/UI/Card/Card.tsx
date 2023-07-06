import React, { HTMLAttributes } from "react";

/**Types */


/**Styles */
import classes from './Card.module.css'


const Card = ({ children, className }: HTMLAttributes<HTMLElement>) => {
    return (
        <div className={`${classes.card} ${className}`}>
            {children}
        </div>
    )
}

export default Card;