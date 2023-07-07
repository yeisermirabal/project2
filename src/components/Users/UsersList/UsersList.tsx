import React from "react";

/*Components */
import Card from "../../UI/Card/Card";

/**Types */
import { IUserList } from "../../Helpers/Types";

/**Styles */
import classes from './UserList.module.css'


const UsersList = ({ users }: IUserList) => {
    return (
        <Card>
            <div className={classes.tableResponsive}>
                <table className={classes.table}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!users.length && (
                            <tr>
                                <td className={classes.empty} colSpan={5} align="center">The user list is empty.</td>
                            </tr>
                        )}
                        {
                            users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.fullname}</td>
                                    <td>
                                        <span className={`badge badgeStyle${Math.floor(Math.random() * 4) + 1}`}>{user.position}</span>
                                    </td>
                                    <td>{user.email}</td>
                                    <td>{user.username}</td>
                                    <td>{user.age} years old</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </Card>
    )
}

export default UsersList;