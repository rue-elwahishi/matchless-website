import React from 'react';
import {Switch, Route } from 'react-router-dom'

import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import SectionPage from "./pages/section/section.component";


function App() {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/section" component={SectionPage} />

        </Switch>
    );
}

export default App;
