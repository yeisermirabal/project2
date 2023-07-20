import React from 'react';

/**Styles */
import classes from './Navigation.module.css';

/**Types */
import { NavigationProps } from '../../Helpers/Types';

/**Components */
import Button from '../../UI/Button';
import LogoutIcon from '@mui/icons-material/Logout';

const Navigation = ({ isLoggedIn, onLogout }: NavigationProps) => {

  return (
    <nav className={classes.nav}>
      <ul>
        {isLoggedIn && (
          <li>
            <Button onClick={onLogout} className={`${classes.btn} ${classes.btnSecundary}`}>
              <LogoutIcon />
              Logout
            </Button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
