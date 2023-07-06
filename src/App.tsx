import React, { useState } from 'react';

/*Components */
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

/**Types */
import { IUser } from './global/utils/Types';

/**Styles */
import classes from './App.module.css'

function App() {
  const [userList, setUserList] = useState<IUser[]>([])

  const addUserHandler = (user: IUser) => {
    setUserList(prevUserList => [...prevUserList, { ...user, id: Math.random().toString() }]);
  }

  return (
    <div className={classes.mainContent}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-4">
            <AddUser onAddUser={addUserHandler} />
          </div>
          <div className="col-12 col-md-8">
            <UsersList users={userList} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
