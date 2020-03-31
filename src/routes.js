import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Account from './Components/Account';
import Profile from './Components/Profile';
import NotFound404 from './Components/NotFound';

export const routes = (
    <Switch>
        <Route component={Home} exact path='/' />
        <Route component={Profile} path='/account/profile' />
        <Route component={Account} path='/account' />
        <Route component={NotFound404} />
    </Switch>
)
