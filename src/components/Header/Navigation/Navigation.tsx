import React, { useContext } from 'react';

/**Styles */
import classes from './Navigation.module.css';

/**Components */
import Button from '../../UI/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import AuthContext from '../../../context/auth-context';

const Navigation = () => {
  const ctx = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <Button onClick={ctx.onLogout} className={`${classes.btn} ${classes.btnSecundary}`}>
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
