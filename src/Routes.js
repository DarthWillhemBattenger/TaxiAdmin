import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { Auth } from './Auth/Auth';
import { Registration } from './Auth/Registration';
import { RegistrationDone } from './Auth/RegistrationDone';
import { EventPage } from './MainScreen/pages/EventPage';
import { DriversPage } from './MainScreen/pages/DriversPage';

const Routes = ({isAuth}) => {
    if (isAuth) {
        return (
            <Switch>
                <Route exact path="/main/events">
                    <EventPage />
                </Route>
                <Route exact path="/main/drivers">
                    <DriversPage />
                </Route>
                <Redirect to="/main/events" />
            </Switch>
        )
    }
    else {
        return (
            <Switch>
                <Route exact path="/auth">
                    <Auth />
                </Route>
                <Route exact path="/registration">
                    <Registration />
                </Route>
                <Route exact path="/done">
                    <RegistrationDone />
                </Route>
                <Redirect to="/auth" />
            </Switch>
        )
    }
};

export {
    Routes
}