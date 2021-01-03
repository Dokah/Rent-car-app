import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import "../index.css";
import { Router, Switch } from "react-router-dom";
import VoziloDataService from "../services/vozilo.service";
import Auth from "../auth/auth"

export default class Homepage extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        const Auth = require("../auth/auth");
        const voziloID = Auth.getCookie("Vozilo");
        console.log(voziloID);
    }

    render(){
        return(
            <div> pozz</div>
        )
    }
}