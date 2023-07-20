import React from 'react';

/**Components */
import Navigation from './Navigation';

/**Styles */
import classes from './Header.module.css';

/**Types */

const Header = () => {

    return (
        <header className={classes.mainHeader}>
            <div className={classes.navbarHeader}>
                <h1 className={classes.titleHeader}>User Management App</h1>
                <Navigation />
            </div>
        </header>
    );
};

export default Header;
