import React from 'react';
// import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { lazy, Suspense } from 'react';
import Loader from 'react-loader-spinner';
import { Switch, Redirect } from 'react-router-dom';
import { authOperations, authSelectors } from './redux/auth';

import './App.css';
import HomeView from './views/HomeView';
import AppBar from './Components/Common/AppBar/AppBar';
import PrivateRoute from './Components/Authorization/PrivateRoute/PrivateRoute';
import PublicRoute from './Components/Authorization/PublicRoute/PublicRoute';

const RegisterView = lazy(() => import('./views/RegisterView.js' /* webpackChunkName: "RegisterView"*/),);
const LoginView = lazy(() => import('./views/LoginView.js' /* webpackChunkName: "LoginView"*/),);
const ContactsView = lazy(() => import('./views/ContactsView.js' /* webpackChunkName: "ContactsView"*/),);
// const NotFoundView = lazy(() => import('./views/NotFoundView.js' /* webpackChunkName: "NotFoundView"*/),);

export default function App() {
  const dispatch = useDispatch();

  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

   return ( !isFetchingCurrentUser && (
      <div className="App">        
        <h1 className="header">Phonebook</h1>            
        <AppBar />
        <Suspense fallback={<Loader type="ThreeDots" color="brown" height={80} width={80} />}>
          <Switch>
              <PublicRoute exact path="/">
                <HomeView />
              </PublicRoute>

              <PublicRoute path="/register" restricted redirectTo="/contacts">
                <RegisterView />
              </PublicRoute>

              <PublicRoute path="/login" restricted redirectTo="/contacts">
                <LoginView />
              </PublicRoute>

              <PrivateRoute path="/contacts" redirectTo="/login">
                <ContactsView />
              </PrivateRoute>

              <PublicRoute>
                <Redirect to="/" />
              </PublicRoute>
          </Switch>
        </Suspense>
      </div>       
  )); 
}

// App.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape(
//       {
//         id: PropTypes.any.isRequired,
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired,
//       })
//   ),
//   totalContacts: PropTypes.number,
// };


