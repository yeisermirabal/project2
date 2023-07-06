import React from "react";

/**Components */
import Card from "../Card";
import Button from "../Button";

/**Styles */
import classes from './ErrorModal.module.css'

/*Types */
import { IError } from "../../../global/utils/Types";

const ErrorModal = ({ title, message, onConfirm }: IError) => {

    return (
        <div className={classes.modal}>
            <div
                className={classes.backdrop}
                onClick={onConfirm}
            ></div>
            <div className={classes.wrapper}>
                <Card>
                    <div className={classes.content}>
                        <div className={classes.header}>
                            {title}
                        </div>
                        <div className={classes.body}>
                            {message}
                        </div>
                        <div className={classes.actions}>
                            <Button type="button" onClick={onConfirm}>Okay</Button>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default ErrorModal;