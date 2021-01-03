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
      this.state = {rezervacija: "", naziv:"",nazivSalona: "", datumRezervacije: "", datumDo: "",};
      this.test = this.test.bind(this);
  }

  dohvatiRezervacije (){
    const Auth = require("../auth/auth");
    const userData = Auth.getCookie("User");
    console.log(userData.korisnik_id);

    RezervacijaDataService.getById(userData.korisnik_id)
      .then((Response) => {
        this.setState({ rezervacija: Response.data }, () => {
          console.log(this.state.rezervacija);
          var mySQLDateRezervacije = Response.data[0].datum_rezervacije;
          mySQLDateRezervacije= mySQLDateRezervacije.split('T')[0];
          var mySQLDateDo = Response.data[0].datum_do;
          mySQLDateDo = mySQLDateDo.split('T')[0];
          this.setState({datumRezervacije: mySQLDateRezervacije});
          this.setState({datumDo : mySQLDateDo});

          VoziloDataService.getById(Response.data[0].vozilo_id).then((Response)=>{
              console.log(Response.data[0].opis_vozila);
              this.setState({naziv: Response.data[0].opis_vozila})
              SalonDataService.getById(this.state.rezervacija[0].salon_id).then((Response)=>{
                  console.log(Response.data[0]);
                  this.setState({nazivSalona: Response.data[0].naziv_salona});
              })

          })
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  test (){
      console.log(this.state.rezervacija[0]);
      window.location.reload();
  }

  componentDidMount(){
      this.dohvatiRezervacije();
  }

  render(){
      if(this.state.rezervacija[0] == undefined){


      return(
        <ul class="list-group">
        <li class="list-group-item">
            <text>Opet pozdrav</text>
        </li>
      </ul>
      )
  }
else{
    return(
        <ul class="list-group">
            <h3>Popis vaših rezervacija</h3>
        <li class="list-group-item">
            <text>Naziv vozila: {this.state.naziv}, </text>
            <text>Naziv salona: {this.state.nazivSalona}, </text>
            <text>Datum rezervacije: {this.state.datumRezervacije}, </text>
            <text>Datum isteka: {this.state.datumDo} </text>
        </li>
      </ul>
      )
}
}
}