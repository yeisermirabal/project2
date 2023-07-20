import React, { useContext } from 'react';

/*Components */
import Home from './components/Pages/Home';
import Login from './components/Pages/Login';
import AuthContext from './context/auth-context';

/**Styles */

const App = () => {
  const ctx = useContext(AuthContext)
  return (
    <>
      {!ctx.isLoggedIn && <Login onLogin={ctx.onLogin} />}
      {ctx.isLoggedIn && <Home onLogout={ctx.onLogout} />}
    </>
  );
}

export default App;
