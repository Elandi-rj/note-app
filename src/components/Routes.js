import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/index';
import Add from './Row/Add';
import Edit from './Row/Edit';
function Routes() {
    return (
        <Switch>
            <Route exact path="/note-app/">
                <Home />
            </Route>
            <Route path="/note-app/Add">
                <Add />
            </Route>
            <Route path="/note-app/Edit/:index">
                <Edit />
            </Route>
        </Switch>
    )
}
export default Routes;