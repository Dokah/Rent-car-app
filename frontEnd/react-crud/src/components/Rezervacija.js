import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import "../index.css";
import { Router, Switch } from "react-router-dom";
import VoziloDataService from "../services/vozilo.service";
import ModelDataService from "../services/model.service";
import RezervacijaDataService from "../services/rezervacije.service";
import Auth from "../auth/auth"

export default class Homepage extends Component {

    constructor(props){
        super(props);
        this.state=({vozilo: "", korisnik: "", cijena: "", datum: "", datum_do: "", salon: "",})
        this.onChangeDatumDo = this.onChangeDatumDo.bind(this);
        this.spremiRezervaciju = this.spremiRezervaciju.bind(this);
    }

    componentDidMount(){
        const Auth = require("../auth/auth");
        const voziloID = Auth.getCookie("Vozilo");
        const korisnik = Auth.getCookie("User");
        console.log(voziloID);
        console.log(korisnik);
        VoziloDataService.getById(voziloID).then((Response)=>{
            console.log(Response.data[0]);
            this.setState({vozilo: Response.data[0]});
            ModelDataService.getById(Response.data[0].model_id).then((Response)=>{
                this.setState({cijena: Response.data[0].cijena});
            })
        })
        this.setState({korisnik: korisnik});
        var datum = new Date().toISOString().split('T')[0];
        this.setState({datum: datum});

        if(voziloID == 1 || voziloID == 2){
            this.setState({salon: 1},()=>{
                console.log("salon" + this.state.salon);
            });
        }
        if(voziloID == 3 || voziloID == 4){
            this.setState({salon: 2},()=>{
                console.log("salon"+ this.state.salon)
            });
        }
    }

    onChangeDatumDo (e){
        this.setState({datum_do: e.target.value 
        },()=>{console.log(this.state.datum_do)});
    }

    spremiRezervaciju (){
    var data = {
      korisnik_id: this.state.korisnik.korisnik_id,
      vozilo_id: this.state.vozilo.vozilo_id,
      salon_id: this.state.salon,
      datum_rezervacije: this.state.datum,
      datum_do: this.state.datum_do
    };

    RezervacijaDataService.create(data)
      .then(response => {
        this.setState({
          korisnik_id: response.data.korisnik_id,
          vozilo_id: response.data.vozilo_id,
          salon_id: response.data.salon_id,
          datum_rezervacije: response.data.datum_rezervacije,
          datum_do: response.data.datum_do
          
        });
        console.log(response.data);
        if(response.data.errno == 1644){
            alert("Nema više ovog vozila na zalihi!")
        }
        this.props.history.push("/");
      })
      .catch(e => {
        console.log(e);
      });
    }

    render(){
        if(this.state.korisnik && this.state.vozilo){
        return(
            <div>
            <ul class="list-group">
            <h3>Rezervacija</h3>
            <li class="list-group-item">
                Ime: {this.state.korisnik.ime}
            </li>
            <li class="list-group-item">
                Prezime: {this.state.korisnik.prezime}
            </li>
            <li class="list-group-item">
            Automobil: {this.state.vozilo.opis_vozila}
            </li>
            <li class="list-group-item">
            Cijena: {this.state.cijena} kn/dan
            </li>
            <li class="list-group-item">
            Datum rezervacije: {this.state.datum}
            </li>
            <li class="list-group-item">
            <label htmlFor="datum_do">Datum do kojeg želite iznajmiti automobil: </label>
            <div className="form-group">
            <input type="date" name="datum_do" onInput={this.onChangeDatumDo} placeholder="yyyy/mm/dd" />
        </div>
            </li>
            </ul>
            <button onClick={this.spremiRezervaciju} className="btn btn-primary vertical-center">Potvrdi i rezerviraj!</button>
            </div>
        )
    }
    else{
        return(
            <div></div>
        )
    }
}
}