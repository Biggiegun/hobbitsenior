import React from 'react'
import { BrowserRouter as Router,
Switch, 
Route
 } from 'react-router-dom'
import {HobbitScreen} from '../components/HobbitScreen';
import {SeniorScreen} from '../components/SeniorScreen';
import { NavBar } from '../components/NavBar';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar/>
                <Switch>
                    <Route path="/senior" component={SeniorScreen}/>
                    <Route path="/Hobbit" component={HobbitScreen}/>
                </Switch>
            </div>
        </Router>
    )
}
