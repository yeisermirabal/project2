import React, { useState } from 'react';

/**Components */
import AddUser from '../../Users/AddUser';
import UsersList from '../../Users/UsersList';

/**Styles */
import classes from './Home.module.css';

/**Types */
import { HomeProps, IUser } from '../../Helpers/Types';

const Home = ({ onLogout }: HomeProps) => {
    const [userList, setUserList] = useState<IUser[]>([])

    const addUserHandler = (user: IUser) => {
        setUserList(prevUserList => [...prevUserList, { ...user, id: Math.random().toString() }]);
    }

    return (
        <div className={`container-fluid ${classes.mainContent}`}>
            <div className="row">
                <div className="col-12 col-md-4">
                    <AddUser onAddUser={addUserHandler} />
                </div>
                <div className="col-12 col-md-8">
                    <UsersList users={userList} />
                </div>
            </div>
        </div>
    );
};

export default Home;
