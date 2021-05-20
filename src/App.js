import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MapPage } from "./pages/MapPage";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/map">
            <MapPage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
