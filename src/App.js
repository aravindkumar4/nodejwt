import React from 'react';
import Register from './auth/register';
import Login from './auth/login';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ProtectedRouter from './auth/protected';
import Home from './auth/home';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <ProtectedRouter exact path='/home' component={Home} />
      </Switch>
      <ToastContainer />
    </div>
  );
}

export default App;
