import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import RezervacijaDataService from "../services/rezervacije.service";
import VoziloDataService from "../services/vozilo.service";
import SalonDataService from "../services/salon.service";

export default class Register extends React.Component {
  constructor(props) {
      super(props);
      this.dohvatiRezervacije = this.dohvatiRezervacije.bind(this);
      this.state = {rezervacija: "", rezervacija2: []};
  }

   dohvatiRezervacije (){
    const Auth = require("../auth/auth");
    const userData = Auth.getCookie("User");
    var sviPodaciOAutima = [];

     RezervacijaDataService.getById(userData.korisnik_id)
      .then((Response) => {
        this.setState({ rezervacija: Response.data }, async() => {
          for(let i=0;i<this.state.rezervacija.length;i++){
          let podaci = {auto:"", salon:"", datumRezervacije: "", datumDo: "",};
            
         await VoziloDataService.getById(Response.data[i].vozilo_id).then((Response1)=>{
            podaci.auto= Response1.data[0].opis_vozila;
          }) //Kraj vozilo data servisa

         await SalonDataService.getById(Response.data[i].salon_id).then((Response2)=>{
            let podaciSalon = Response2.data[0].naziv_salona;
            podaci.salon = podaciSalon;
          }) //kraj Salon data servisa

          var mySQLDateRezervacije = Response.data[i].datum_rezervacije;
          mySQLDateRezervacije= mySQLDateRezervacije.split('T')[0];
          podaci.datumRezervacije= mySQLDateRezervacije;

          var mySQLDateDo = Response.data[i].datum_do;
          mySQLDateDo = mySQLDateDo.split('T')[0];
          podaci.datumDo = mySQLDateDo;

          sviPodaciOAutima.push(podaci);
        } //kraj petlje
        console.log(sviPodaciOAutima[0]);
        this.setState({rezervacija2: sviPodaciOAutima},()=>{
          console.log("----");
          console.log(this.state.rezervacija2);
        });
        }); //Kraj početnoga responsa
      })
      .catch((e) => {
        console.log(e);
      });
  };

  componentDidMount(){
      this.dohvatiRezervacije();
  }

  render(){
      if(this.state.rezervacija2 === undefined){
      return(
        <ul class="list-group">
        <li class="list-group-item">
            <text>Pozdrav</text>
        </li>
      </ul>
      )
  }
else{
    return(
      <div>
        <ul class="list-group">
            <h3>Popis vaših rezervacija</h3>
          {this.state.rezervacija2.map((src, index)=> (
            <li key={index} class="list-group-item">
            <text key={index}>Naziv vozila: {src.auto}, </text>
            <text key={index}>Naziv salona: {src.salon}, </text>
            <text key={index}>Datum rezervacije: {src.datumRezervacije}, </text>
            <text key={index}>Datum isteka: {src.datumDo} </text>
        </li>
          ))}
      </ul>
      </div>
      )
}
}
}