import React, { ChangeEvent, FormEvent, useState } from "react";

/**Types */
import { IAddUser, IUser, IError } from "../../Helpers/Types";

/**Components */
import Card from "../../UI/Card";
import Button from "../../UI/Button";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";
import { emailRegex } from '../../Helpers/Helpers'

/**Styles */
import classes from './AddUser.module.css'

const USER_DATA = {
    username: '',
    fullname: '',
    email: '',
    position: 'Developer',
    age: 0
}

const AddUser = ({ onAddUser }: IAddUser) => {
    const [userData, setUserData] = useState<IUser>(USER_DATA)
    const [error, setError] = useState<IError | null>()

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();
        const { age, fullname, username, email } = userData;
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

        onAddUser(userData);
        setUserData(USER_DATA);
    }

    const inputChangeHandler = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = event.target;

        setUserData(prevState => ({ ...prevState, [id]: value }));
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.formContainer}>
                <form onSubmit={submitHandler}>
                    <div className={classes.formControls}>
                        <label htmlFor="fullname" className={classes.formLabel}>Full name</label>
                        <input
                            id="fullname"
                            type="text"
                            className={classes.formControl}
                            onChange={inputChangeHandler}
                            autoComplete="off"
                            value={userData.fullname}
                        />
                    </div>
                    <div className={classes.formControls}>
                        <label htmlFor="username" className={classes.formLabel}>Username</label>
                        <input
                            id="username"
                            type="text"
                            className={classes.formControl}
                            onChange={inputChangeHandler}
                            autoComplete="off"
                            value={userData.username}
                        />
                    </div>
                    <div className={classes.formControls}>
                        <label htmlFor="email" className={classes.formLabel}>Email</label>
                        <input
                            id="email"
                            type="text"
                            className={classes.formControl}
                            onChange={inputChangeHandler}
                            autoComplete="off"
                            value={userData.email}
                        />
                    </div>
                    <div className={classes.formControls}>
                        <label htmlFor="position" className={classes.formLabel}>Position</label>
                        <select
                            id="position"
                            className={`${classes.formControl} ${classes.formSelect}`}
                            value={userData.position}
                            onChange={inputChangeHandler}
                        >
                            <option value="Developer">Developer</option>
                            <option value="Designer">Designer</option>
                            <option value="Manager">Manager</option>
                            <option value="Analyst">Analyst</option>
                        </select>
                    </div>
                    <div className={classes.formControls}>
                        <label htmlFor="age" className={classes.formLabel}>Age (years)</label>
                        <input
                            id="age"
                            type="number"
                            className={classes.formControl}
                            onChange={inputChangeHandler}
                            autoComplete="off"
                            value={userData.age}
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