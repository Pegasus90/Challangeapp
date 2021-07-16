import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import User from "./Components/User";
import Comments from "./Components/Comments";
import Posts from "./Components/Posts";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/user/:id" component={User} />
        <Route path="/Posts/:id" component={Posts} />
        <Route path="/Comments/:id" component={Comments} />
      </Switch>
    </div>
  );
}

export default App;
