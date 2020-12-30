import React, { Component } from "react";
import {Link, Route} from 'react-router-dom';
import "../index.css";
import { Router, Switch } from "react-router-dom";
import KorisnikDataService from "../services/korisnik.service";
import Homepage from "../components/Homepage";

export default class Login extends Component {
    
    constructor(props){
        super(props);
        this.state = {username: ''};
        this.state = {password: ''};
        this.state = {korisnik: []};
        this.state = {logiran: false};
        this.checkValues = this.checkValues.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.provjeraLozinke = this.provjeraLozinke.bind(this);
    }

    handleChangeUsername = event => {
        this.setState({username: event.target.value});
    };

    handleChangePassword = event => {
        this.setState({password: event.target.value});
    };

    checkValues =event =>{
        console.log(this.state.username);
        console.log(this.state.password);

        KorisnikDataService.get_nadimak_id(this.state.username).then(Response => {
            this.setState({korisnik: Response.data});
        }).catch (e=> {
            console.log(e);
        });
    };

     provjeraLozinke=event=>{

        if (this.state.password === this.state.korisnik[0].lozinka){
            console.log(" Točna lozinka!");
            this.setState({logiran: true});
        }
        else {
            console.log( "Kriva lozinka!");
        }
    }



    render() {
        if(this.state.logiran){
            return (
                <p>Saka čast!</p>
            )
        }
        else{
        return (
            <form>
                <h3>Log in</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Enter username" onChange={this.handleChangeUsername} value={this.state.username} name = "username" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={this.handleChangePassword} value={this.state.password} password = "password"/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <button type="button" className="btn btn-dark btn-lg btn-block" onClick={this.provjeraLozinke}>Sign in</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                <p>OR</p>
                <Link to= "/register">
                <button type= "button" className ="btn btn-dark btn-lg btn-block">Register</button>
                </Link>
            </form>
        );
    }
}
}