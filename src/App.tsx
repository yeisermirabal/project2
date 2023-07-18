import React, { useEffect, useState } from 'react';

/*Components */
import Home from './components/Pages/Home';
import Login from './components/Pages/Login';

/**Styles */
import classes from './App.module.css'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userLoggedInInfo = localStorage.getItem('isLoggedIn')

    if (userLoggedInInfo === '1') {
      setIsLoggedIn(true)
    }
  }, [])

  const loginHandler = (email: string, password: string) => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false);
  };


  return (
    <>
      {!isLoggedIn && <Login onLogin={loginHandler} />}
      {isLoggedIn && <Home onLogout={logoutHandler} />}
    </>
  );
}

export default App;
