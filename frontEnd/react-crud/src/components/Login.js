import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import "../index.css";
import { Router, Switch } from "react-router-dom";
import KorisnikDataService from "../services/korisnik.service";
import AdministratorDataService from "../services/administrator.service";
import Homepage from "../components/Homepage";
import App from "../App";
const Auth = require('../auth/auth');


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      korisnik: [],
      logiran: false,
      krivaLozinka: false,
      nemaKorisnika: false,
      je_admin: false,
    };

    this.checkValues = this.checkValues.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.provjeraAdminLozinka = this.provjeraAdminLozinka.bind(this);
    this.handleWrongUser = this.handleWrongUser.bind(this);
    this.handleAdminChange = this.handleAdminChange.bind(this);
    this.reload = this.reload.bind(this);
  }

  handleChange = (event, _key) => {
    var obj = { [_key]: event.target.value || null };
    this.setState({ obj });
  };

  handleChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  handleChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  handleWrongUser = () => {
    console.log("HENDLAM");
    this.setState({ nemaKorisnika: true });
  };

  handleAdminChange = () => {
    this.setState({ je_admin: true });
  };

  checkValues = (event) => {
    console.log(this.state.username);
    console.log(this.state.password);

    KorisnikDataService.get_nadimak_id(this.state.username)
      .then((Response) => {
        this.setState({ korisnik: Response.data }, () => {
          console.log(this.state.korisnik[0]);
          if (this.state.korisnik[0] === undefined) {
            this.handleWrongUser();
          } else {
            this.provjeraAdminLozinka();
          }
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  provjeraAdminLozinka = () => {
    console.log(this.state.korisnik[0].lozinka);

    if (this.state.password === this.state.korisnik[0].lozinka) {
      console.log(" Točna lozinka!");
      Auth.setCookie("User", this.state.korisnik[0]);      
      this.setState({ logiran: true });
      AdministratorDataService.get(this.state.korisnik[0].korisnik_id).then(
        (Response) => {
          if (Response.data[0] != undefined) {
            console.log("Ovaj korisnik je admin!");
            this.setState({ je_admin: true });
            Auth.setCookie("User_admin", this.state.korisnik[0]);  
          }
        }
      );
      this.props.history.push("/");
      this.reload();
    } else {
      console.log("Kriva lozinka!");
      this.setState({ krivaLozinka: true }, () => {
        console.log(this.state.krivaLozinka);
      });
    }
  };

  reload =()=>{
    window.location.href="/";
    this.forceUpdate();
  }

  componentWillUnmount() {
    this.setState = (state,callback)=>{
        return;
    };
}

  render() {
    if (this.state.logiran) {
      return (
        <div className="container">
          <Route exact path={["/"]} component={App} />
          <div className="center">
            <Link to={{ pathname: "/" }}>
              <button type="button" className="btn btn-dark btn-lg btn-block" onClick={this.reload}>
                GO TO HOME SCREEN
              </button>
            </Link>
          </div>
        </div>
      );
    }
    if (!this.state.nemaKorisnika && !this.state.krivaLozinka) {
      return (
        <form>
          <h3>Log in</h3>

          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              onChange={this.handleChangeUsername}
              value={this.state.username}
              name="username"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={this.handleChangePassword}
              value={this.state.password}
              password="password"
            />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-dark btn-lg btn-block"
            onClick={this.checkValues}
          >
            Sign in
          </button>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
          <p>OR</p>
          <Link to="/register">
            <button type="button" className="btn btn-dark btn-lg btn-block">
              Register
            </button>
          </Link>
        </form>
      );
    } else if (this.state.nemaKorisnika || this.state.krivaLozinka) {
      return (
        <form>
          <h3>Log in</h3>

          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              onChange={this.handleChangeUsername}
              value={this.state.username}
              name="username"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={this.handleChangePassword}
              value={this.state.password}
              password="password"
            />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <div className="form-group">
            <p className="wrong-password">Wrong password or username!</p>
          </div>
          <button
            type="button"
            className="btn btn-dark btn-lg btn-block"
            onClick={this.checkValues}
          >
            Sign in
          </button>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
          <p>OR</p>
          <Link to="/register">
            <button type="button" className="btn btn-dark btn-lg btn-block">
              Register
            </button>
          </Link>
        </form>
      );
    }
  }
}
