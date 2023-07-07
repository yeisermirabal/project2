import React from "react";
import ReactDOM from 'react-dom';

/**Components */
import Card from "../Card";
import Button from "../Button";

/**Styles */
import classes from './ErrorModal.module.css'

/*Types */
import { IPortalActions, IError } from "../../Helpers/Types";

const ErrorModal = ({ title, message, onConfirm }: IError) => {

    const Backdrop = ({ onConfirm }: IPortalActions) => {
        return (<div className={classes.backdrop} onClick={onConfirm}></div>)
    }

    const ModalOverlay = ({ onConfirm }: IPortalActions) => {
        return (
            <div className={classes.modal}>
                <Card className={classes.wrapper}>
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
        )
    }

    return (
        <>
            {ReactDOM.createPortal(<Backdrop onConfirm={onConfirm} />, document.getElementById('backdrop-root') || document.createElement('div'))}
            {ReactDOM.createPortal(<ModalOverlay onConfirm={onConfirm} />, document.getElementById('overlay-root') || document.createElement('div'))}
        </>
    )
}

export default ErrorModal;