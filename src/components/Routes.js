import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/index';
import Add from './Row/Add';
import Edit from './Row/Edit';
function Routes() {
    return (
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/Add" exact>
                <Add />
            </Route>
            <Route path="/Edit/:index" exact>
                <Edit />
            </Route>
        </Switch>
    )
}
export default Routes;