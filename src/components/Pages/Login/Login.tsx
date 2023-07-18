import React, { ChangeEvent, FormEvent, useEffect, useReducer, useState } from 'react';

/**Components */
import Card from '../../UI/Card';
import Button from '../../UI/Button';

/**Types */
import { ActionReducer, IStateReducer, LoginProps } from '../../Helpers/Types';

/**Styles */
import classes from './Login.module.css';

/*Icons*/
import { ReactComponent as LoginIcon } from "../../../global/assets/icon1.svg";

const emailReducer = (state: IStateReducer, action: ActionReducer) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.value, isValid: action.value.includes('@') }
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.includes('@') }
    }
    return { value: '', isValid: false }
}

const passwordReducer = (state: IStateReducer, action: ActionReducer) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.value, isValid: action.value.trim().length > 6 }
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.trim().length > 6 }
    }
    return { value: '', isValid: false }
}

const Login = ({ onLogin }: LoginProps) => {
    const [formIsValid, setFormIsValid] = useState(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: false })
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, { value: '', isValid: false })

    useEffect(() => {
        const identifier = setTimeout(() => {
            setFormIsValid(
                emailState.isValid && passwordState.isValid
            )
        }, 500)

        return () => {
            clearTimeout(identifier);
        }
    }, [emailState.isValid, passwordState.isValid])

    const emailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        dispatchEmail({ type: 'USER_INPUT', value: event.target.value });

        setFormIsValid(
            event.target.value.includes('@') && passwordState.isValid
        );
    };

    const passwordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        dispatchEmail({ type: 'USER_INPUT', value: event.target.value });

        setFormIsValid(
            emailState.isValid && event.target.value.trim().length > 6
        );
    };

    const validateEmailHandler = () => {
        dispatchEmail({ type: 'INPUT_BLUR' });
    };

    const validatePasswordHandler = () => {
        dispatchPassword({ type: 'INPUT_BLUR' });
    };

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();
        onLogin(emailState.value, passwordState.value);
    };

    const LoginHeader = () => {
        return (
            <div className={classes.loginHeader}>
                <div className={classes.loginHeaderWrapper}>
                    <h5 className={classes.loginTitle}>Welcome Back !</h5>
                    <p className={classes.loginSubtitle}>Sign in to continue...</p>
                    <div className={classes.loginHolderIcon}>
                        <LoginIcon />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={classes.login}>
            <Card className={classes.loginCard}>
                <LoginHeader />
                <div className={classes.loginBody}>
                    <form onSubmit={submitHandler}>
                        <div
                            className={`formControls ${emailState.isValid === false ? classes.invalid : ''
                                }`}
                        >
                            <label htmlFor="email" className='formLabel'>E-Mail</label>
                            <input
                                type="email"
                                id="email"
                                className='formControl'
                                autoComplete='off'
                                value={emailState.value}
                                onChange={emailChangeHandler}
                                onBlur={validateEmailHandler}
                            />
                        </div>
                        <div
                            className={`formControls ${passwordState.isValid === false ? classes.invalid : ''
                                }`}
                        >
                            <label htmlFor="password" className='formLabel'>Password</label>
                            <input
                                type="password"
                                id="password"
                                autoComplete='off'
                                className='formControl'
                                value={passwordState.value}
                                onChange={passwordChangeHandler}
                                onBlur={validatePasswordHandler}
                            />
                        </div>
                        <div className={classes.actions}>
                            <Button type="submit" className={classes.btn} disabled={!formIsValid}>
                                Login
                            </Button>
                        </div>
                    </form>
                </div>
            </Card>
        </div>

    );
};

export default Login;
