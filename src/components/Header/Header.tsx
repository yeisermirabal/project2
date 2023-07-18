import React from 'react';

/**Components */
import Navigation from './Navigation';

/**Styles */
import classes from './MainHeader.module.css';

/**Types */
import { HeaderProps } from '../Helpers/Types';

const MainHeader = ({ isAuthenticated, onLogout }: HeaderProps) => {
    return (
        <header className={classes['main-header']}>
            <h1>A Typical Page</h1>
            <Navigation isLoggedIn={isAuthenticated} onLogout={onLogout} />
        </header>
    );
};

export default MainHeader;
