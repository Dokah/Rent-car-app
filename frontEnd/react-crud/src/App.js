import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import Register from "./components/Register";
import Login from "./components/Login";
import SveRezervacije from "./components/SveRezervacije";
import "../src/index.css";
import { withRouter } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
    this.provjera = this.provjera.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  provjera = (e) => {
    /*const Auth = require("../src/auth/auth");

    const userData = Auth.getCookie("User");
    const userDataAdmin = Auth.getCookie("User_admin");
    console.log(userData);
    console.log("PROVJERA");*/
    window.location.reload();
    //this.setState({logiran: this.props.location.logiran});
  };

  componentDidMount() {
    const Auth = require("../src/auth/auth");
    let brojac =0;

    const userData = Auth.getCookie("User");
    const userDataAdmin = Auth.getCookie("User_admin");
    if(userData)this.setState({username: userData.nadimak});
    // chjeck if exist , if exist put into state if it doesnt exist thend ont update state
    console.log(userData);
    this.setState({
      userData,
    });
    this.setState({
      userDataAdmin,
    })
  }

  logOut = () => {
    const Auth = require("../src/auth/auth");
    this.setState({ logiran: false });
    Auth.deleteCookie("User");
    Auth.deleteCookie("User_admin")
    window.location.reload();
  };

  render() {
    const { userData } = this.state;
    const {userDataAdmin } = this.state;

    if (userData && !userDataAdmin) {
      return (
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/" className="navbar-brand">
              Rent a Car aplikacija
            </a>
            <div className="navbar-nav mr-auto">
              <li className="nav-item"></li>
              <li className="nav-item">
                <Link to={"/rezervacije"} className="nav-link">
                  Vaše rezervacije
                </Link>
              </li>
            </div>
            <div className="navbar-nav">
              <li className="nav-item ">
              <button className="btn btn-secondary ml-auto" disabled>{this.state.username}</button>
                <button
                  className="btn btn-primary ml-auto"
                  onClick={this.logOut}
                >
                  Logout
                </button>
              </li>
            </div>
          </nav>
          <div className="container mt-3">
            <Switch>
              <Route exact path={["/login"]} component={Login} />
              <Route exact path={["/register"]} component={Register} />
              <Route exact path={["/"]} component={Homepage} />
              <Route exact path={["/rezervacije"]} component={SveRezervacije} />
            </Switch>
          </div>
        </div>
      );
    } else if (userData && userDataAdmin) {
      return (
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/" className="navbar-brand">
              Rent a Car aplikacija
            </a>
            <div className="navbar-nav mr-auto">
              <li className="nav-item"></li>
              <li className="nav-item">
                <Link to={"/dodajvozila"} className="nav-link">
                  Dodaj vozila
                </Link>
              </li>
            </div>
            <div className="navbar-nav">
            <div class="d-grid gap-2 d-md-block">
            <li className= "nav-item">
              <button className="btn btn-secondary ml-auto" disabled>{this.state.username}</button>
                <button
                  className="btn btn-primary ml-auto"
                  onClick={this.logOut}
                >
                  Logout
                </button>
                </li>
              </div>
            </div>
          </nav>
          <div className="container mt-3">
            <Switch>
              <Route excat path={["/login"]} component={Login} />
              <Route exact path={["/register"]} component={Register} />
              <Route exact path={["/"]} component={Homepage} />
              <Route exact path={["/rezervacije"]} component={SveRezervacije} />
            </Switch>
          </div>
        </div>
      );
    }
   else {
      return (
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark ">
            <a href="/" className="navbar-brand">
              Rent a Car aplikacija
            </a>
            <div className="navbar-nav ml-auto">
              <li className="nav-item nav-link ">
                <Link to="/login">
                  <button className="btn btn-primary">LOGIN</button>
                </Link>
              </li>
              <li className="nav-item nav-link">
                <Link to="/register">
                  <button className="btn btn-primary ">REGISTER</button>
                </Link>
              </li>
            </div>
          </nav>

          <div className="container mt-3">
            <Switch>
              <Route exact path={["/login"]} component={Login} />
              <Route exact path={["/register"]} component={Register} />
              <Route exact path={["/"]} component={Homepage} />
              <Route exact path={["/rezervacije"]} component={SveRezervacije} />
            </Switch>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(App);
