import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Watchlist } from "./components/Watchlist";
import { Watched } from "./components/Watched";
import { Add } from "./components/Add";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";
import { GlobalProvider } from "./context/GlobalState";
//import { library } from '@fortawesome/fontawesome-svg-core'
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
//import {faTimes} from '@fortawesome/free-solid-svg-icons';
//import {faEyeSlash} from '@fortawesome/free-regular-svg-icons';
//library.add(faTimes, faEyeSlash);
function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header  />

        <Switch>
          <Route exact path="/">
            <Watchlist />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/watched">
            <Watched />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
