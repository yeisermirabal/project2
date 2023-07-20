import React, { ChangeEvent, FormEvent, useContext, useEffect, useReducer, useState } from 'react';

/**Components */
import Card from '../../UI/Card';
import Button from '../../UI/Button';
import AuthContext from '../../../context/auth-context';
import { emailRegex } from '../../Helpers/Helpers'
import Input from '../../UI/Input';

/**Types */
import { ActionReducer, IStateReducer } from '../../Helpers/Types';

/**Styles */
import classes from './Login.module.css';
import inputClass from '../../UI/Input/Input.module.css'

/*Icons*/
import { ReactComponent as LoginIcon } from "../../../global/assets/icon1.svg";

const emailReducer = (state: IStateReducer, action: ActionReducer) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.value, isValid: emailRegex.test(action.value) }
    }

    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: emailRegex.test(state.value) }
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

const Login = () => {
    const ctx = useContext(AuthContext);
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
    };

    const passwordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        dispatchPassword({ type: 'USER_INPUT', value: event.target.value });
    };

    const validateEmailHandler = () => {
        dispatchEmail({ type: 'INPUT_BLUR' });
    };

    const validatePasswordHandler = () => {
        dispatchPassword({ type: 'INPUT_BLUR' });
    };

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();
        ctx.onLogin(emailState.value, passwordState.value);
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
                        <Input

                            isValid={emailState.isValid}
                            label='E-Mail'
                            type='email'
                            id='email'
                            value={emailState.value}
                            onChange={emailChangeHandler}
                            onBlur={validateEmailHandler}
                        />
                        <Input

                            isValid={passwordState.isValid}
                            label='Password'
                            type='password'
                            id='password'
                            className={inputClass.lastElement}
                            value={passwordState.value}
                            onChange={passwordChangeHandler}
                            onBlur={validatePasswordHandler}
                        />
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
