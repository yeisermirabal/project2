import React, { FormEvent, useRef, useState } from "react";

/**Types */
import { IAddUser, IError } from "../../Helpers/Types";

/**Components */
import Card from "../../UI/Card";
import Button from "../../UI/Button";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";
import { emailRegex } from '../../Helpers/Helpers'

/**Styles */
import classes from './AddUser.module.css'
import inputClass from '../../UI/Input/Input.module.css'

const AddUser = ({ onAddUser }: IAddUser) => {
    const [error, setError] = useState<IError | null>()

    const formRef = useRef<HTMLFormElement>(null);
    const fullnameRef = useRef<HTMLInputElement>(null);
    const usernameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const positionRef = useRef<HTMLSelectElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();

        const fullname = fullnameRef.current?.value || '';
        const username = usernameRef.current?.value || '';
        const email = emailRef.current?.value || '';
        const position = positionRef.current?.value || 'Developer';
        const age = ageRef.current?.value || '0';

        const ageAsNumber = +age;

        if (fullname.trim().length === 0 || username.trim().length === 0) {
            return setError({
                title: 'Invalid input',
                message: 'Please enter a valid name or username.'
            });
        }

        if (!emailRegex.test(email)) {
            return setError({
                title: 'Invalid email',
                message: 'Please enter a valid email address.'
            });
        }

        if (!Number.isInteger(ageAsNumber) || ageAsNumber < 18 || ageAsNumber > 60) {
            return setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 18).'
            });
        }

        onAddUser({
            fullname,
            username,
            email,
            position,
            age: ageAsNumber
        });

        formRef.current?.reset();
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.formContainer}>
                <form onSubmit={submitHandler} ref={formRef}>
                    <div className={inputClass.formControls}>
                        <label htmlFor="fullname" className={inputClass.formLabel}>Full name</label>
                        <input
                            id="fullname"
                            type="text"
                            className={inputClass.formControl}
                            autoComplete="off"
                            ref={fullnameRef}
                        />
                    </div>
                    <div className={inputClass.formControls}>
                        <label htmlFor="username" className={inputClass.formLabel}>Username</label>
                        <input
                            id="username"
                            type="text"
                            className={inputClass.formControl}
                            autoComplete="off"
                            ref={usernameRef}
                        />
                    </div>
                    <div className={inputClass.formControls}>
                        <label htmlFor="email" className={inputClass.formLabel}>Email</label>
                        <input
                            id="email"
                            type="text"
                            className={inputClass.formControl}
                            autoComplete="off"
                            ref={emailRef}
                        />
                    </div>
                    <div className={inputClass.formControls}>
                        <label htmlFor="position" className={inputClass.formLabel}>Position</label>
                        <select
                            id="position"
                            className={`${inputClass.formControl} ${classes.formSelect}`}
                            ref={positionRef}
                        >
                            <option value="Developer">Developer</option>
                            <option value="Designer">Designer</option>
                            <option value="Manager">Manager</option>
                            <option value="Analyst">Analyst</option>
                        </select>
                    </div>
                    <div className={inputClass.formControls}>
                        <label htmlFor="age" className={inputClass.formLabel}>Age (years)</label>
                        <input
                            id="age"
                            type="number"
                            className={inputClass.formControl}
                            autoComplete="off"
                            ref={ageRef}
                        />
                    </div>
                    <div className="form-actions">
                        <Button type="submit">Add user</Button>
                    </div>
                </form>
            </Card>
        </>
    )
}

export default AddUser;