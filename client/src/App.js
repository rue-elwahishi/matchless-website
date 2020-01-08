import React from 'react';
import {Switch, Route } from 'react-router-dom'

import './App.css';

import HomePage from "./pages/homepage/homepage.component";
import SectionPage from "./pages/section/section.component";
import Header from "./components/header/header.component";


function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/section" component={SectionPage} />
            </Switch>
        </div>
    );
}

export default App;
