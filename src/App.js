import React from 'react';
import PropTypes from 'prop-types';
import { lazy, Suspense } from 'react';
import Loader from 'react-loader-spinner';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import UserMenu from './Components/Common/UserMenu/UserMenu';

import AppBar from './Components/Common/AppBar/AppBar';

const RegisterView = lazy(() => import('./views/RegisterView.js' /* webpackChunkName: "RegisterView"*/),);
const LoginView = lazy(() => import('./views/LoginView.js' /* webpackChunkName: "LoginView"*/),);
const ContactsView = lazy(() => import('./views/ContactsView.js' /* webpackChunkName: "ContactsView"*/),);
const NotFoundView = lazy(() => import('./views/NotFoundView.js' /* webpackChunkName: "NotFoundView"*/),);

export default function App() {


  // Добавь маршрутизацию и несколько страниц:
  // /register - публичный маршрут регистрации нового пользователя с формой
  // /login - публичный маршрут логина сущестующего пользователя с формой
  // /contacts - приватный маршрут для работы с коллекцией контактов пользователя
  // Добавь навигационные ссылки для перехода по маршрутам.
  // Добавь компонент UserMenu, состоящий из почты пользователя и кнопки Выйти.

   return (
    <>
    <div className="App">
    <UserMenu />
    <h1 className="header">Phonebook</h1>            
    
    <AppBar />

    <Suspense fallback={<Loader type="ThreeDots" color="brown" height={80} width={80} />}>
    <Switch>
      

      <Route path="/register" exact>
        <RegisterView />
      </Route>

      <Route path="/login">
        <LoginView />
      </Route>

      <Route path="/contacts" exact>
        <ContactsView />
      </Route>

      <Route>
        <NotFoundView />
      </Route>

    </Switch>
    </Suspense>
    </div>
  </>        
  ); 
}

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.any.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
  ),
  totalContacts: PropTypes.number,
};


