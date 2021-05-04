import React, { useState, useEffect } from 'react'

// Components
import MainPage from './Components/MainPage/MainPage'
import UserPage from './Components//UserPage/UserPage'
import Header from './Components/Header'
import RateLimit from './Components/RateLimit'

import './styles/index.css'

// React-Router
import { useLocation, HashRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
    // Id 0 stands for List view, id 1 - Grid
    // ( This is global state and is used in id header&main page )
    const [view, setView] = useState(0)


    return (
        <Router>

            <Header view={view} setView={setView} />
            <hr />


            <Switch>
                <Route 
                    exact path='/' 
                    render={() => <MainPage view={view} />} 
                />
                <Route 
                    path='/:username' 
                    component={UserPage} 
                />
            </Switch>


            <RateLimit />

        </Router>
    )
}

export default App