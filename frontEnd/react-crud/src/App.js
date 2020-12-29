import React, { Component } from "react";
import {Link, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { Router, Switch } from "react-router-dom";
import {Homepage} from "./components/Homepage"

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/" className="navbar-brand">
            Rent a Car aplikacija
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
            </li>
            <li className="nav-item">
              <Link to={"/vozila"} className="nav-link">
                Sva vozila
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
           <Switch>
            <Route exact path={["/", "/home"]} component={Homepage} />
          </Switch> 
        </div>
      </div>
    );
  }
  }

export default App;