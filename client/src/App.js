
import React, {useEffect} from 'react';
import { Switch, Route } from 'react-router-dom'
//import "assets/scss/material-kit-react.scss";

import './App.css';
import Alert from "./components/layout/Alert";

//Redux
import { Provider } from "react-redux";
import store from "./store";

import HomePage from "./pages/homepage/homepage.component";
import SectionPage from "./pages/section/section.component";
import Header from "./components/header/header.component";
import { BrowserRouter as Router } from "react-router-dom";

//import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import SignUp from "./components/sign-up/sign-up-component";
import SignIn from "./components/sign-in/sign-in.component";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";


if (localStorage.token) {
    setAuthToken(localStorage.token)
}

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser())
    }, []);
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Header/>
                    <Alert />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/section" component={SectionPage} />
                        <Route exact path="/signin" component={SignIn} />
                        <Route exact path="/signup" component={SignUp} />
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
=======
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/section" component={SectionPage} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );

}

export default App;
