import React, { Component } from "react";
import {Link, Route} from 'react-router-dom';
import "../index.css";
import { Router, Switch } from "react-router-dom";
import KorisnikDataService from "../services/korisnik.service";



export default class Homepage extends Component {

    rerender =()=>{
        this.forceUpdate();
    }

    componentDidMount(){
        this.rerender();
    }

  render() {
    return( 
            <h2>Hi, I am a Car!</h2>
        )
}
}
