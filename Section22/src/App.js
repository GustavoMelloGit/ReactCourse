import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthContext from './context/AuthContext';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

function App() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <Layout>
      {!isLoggedIn && <Redirect to="/auth" />}
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        {!isLoggedIn && <Route path='/auth'>
          <AuthPage />
        </Route>}
        <Route path='/profile'>
          <UserProfile />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
