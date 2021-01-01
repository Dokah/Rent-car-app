import React, { Component } from "react";
import {Link, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { Router, Switch } from "react-router-dom";
import Homepage from "./components/Homepage"
import Register from "./components/Register"
import Login from "./components/Login";
import SveRezervacije from "./components/SveRezervacije";
import "../src/index.css";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {logiran: false};
    this.state = {je_admin: false};
    this.state = {username: ""};
    this.provjera= this.provjera.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  provjera=e=>{
    console.log("PROVJERA");
    //this.setState({logiran: this.props.location.logiran});
    console.log(this.state.logiran);
  }

  componentDidMount(){
    this.setState({logiran: true});
    this.setState({je_admin: false});
  }

  logOut =()=>{
    this.setState({logiran: false});
  }
  componentWillReceiveProps(){
    this.setState({logiran: this.props.location.logiran});
  }


  render() {
    if(this.state.logiran && !this.state.je_admin){
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
              <Link to={"/rezervacije"} className="nav-link">
                Vaše rezervacije
              </Link>
            </li>
            </div>
            <div className="navbar-nav">
            <li className= "nav-item ">
              <button className= "btn btn-primary ml-auto" onClick={this.logOut}>Logout</button>
            </li>
            </div>
        </nav>
        <div className="container mt-3">
           <Switch>
             <Route excat path = {["/login"]} component = {Login} />
            <Route exact path = {["/register"]} component = {Register} />
            <Route exact path={[ "/"]} component={Homepage} />
            <Route exact path ={["/rezervacije"]} component ={SveRezervacije}/>
          </Switch> 
        </div>
      </div>
    );
  }
  else if(this.state.logiran && this.state.je_admin){
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/" className="navbar-brand">
            Rent a Car aplikacija
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
            </li>
            <li className= "nav-item">
              <Link to={"/dodajvozila"} className= "nav-link">
                Dodaj vozila
              </Link>
            </li>
            </div>
            <div className="navbar-nav">
            <li className= "nav-item ">
              <button className= "btn btn-primary ml-auto" onClick={this.logOut}>Logout</button>
            </li>
            </div>
        </nav>
        <div className="container mt-3">
           <Switch>
             <Route excat path = {["/login"]} component = {Login} />
            <Route exact path = {["/register"]} component = {Register} />
            <Route exact path={[ "/"]} component={Homepage} />
            <Route exact path ={["/rezervacije"]} component ={SveRezervacije}/>
          </Switch> 
        </div>
      </div>
    );
  }
  else{
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark ">
          <a href="/" className="navbar-brand">
            Rent a Car aplikacija
          </a>
          <button onClick={this.provjera}>Bezveze</button>
          <div className="navbar-nav ml-auto">
            <li className="nav-item nav-link ">
              <Link to ="/login">
              <button className= "btn btn-primary">
              LOGIN
              </button>
              </Link>
            </li>
            <li className="nav-item nav-link">
              <Link to = "/register">
              <button className= "btn btn-primary ">
                REGISTER
              </button>
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
           <Switch>
             <Route excat path = {["/login"]} component = {Login} />
            <Route exact path = {["/register"]} component = {Register} />
            <Route exact path={[ "/"]} component={Homepage} />
            <Route exact path ={["/rezervacije"]} component ={SveRezervacije}/>
          </Switch> 
        </div>
      </div>
    );
  }
}
  }

export default App;