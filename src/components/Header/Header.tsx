import React, { useContext } from 'react';

/**Components */
import AuthContext from '../../context/auth-context';
import Navigation from './Navigation';

/**Styles */
import classes from './Header.module.css';

/**Types */

const Header = () => {
    const ctx = useContext(AuthContext);

    return (
        <header className={classes.mainHeader}>
            <div className={classes.navbarHeader}>
                <h1 className={classes.titleHeader}>User Management App</h1>
                <Navigation isLoggedIn={ctx.isLoggedIn} onLogout={ctx.onLogout} />
            </div>
        </header>
    );
};

export default Header;
