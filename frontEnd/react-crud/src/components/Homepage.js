import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import "../index.css";
import { Router, Switch } from "react-router-dom";
import VoziloDataService from "../services/vozilo.service";
import ModelDataService from "../services/model.service";
import Auth from "../auth/auth"

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = { vozila: [],
       ucitao: false, logiran: false, cijene: [] };

    this.prosljediIDVozila = this.prosljediIDVozila.bind(this);
  }

  componentDidMount() {

    let Logiran= Auth.getCookie("User");
    if(Logiran){
      this.setState({logiran: true});
    }
    
    VoziloDataService.getAll().then((Response) => {
      this.setState({ vozila: Response.data }, () => {
        this.setState({ ucitao: true });
      });
     ModelDataService.getAll().then((Response)=>{
        console.log(Response.data);
        this.setState({cijene: Response.data},()=>{console.log(this.state.cijene[1].cijena);});
      })
    });

  }
  
  prosljediIDVozila(x){
    console.log(x)
    Auth.setCookie("Vozilo", x);
    this.props.history.push("/rezerviraj");
  }

  render() {
    if (this.state.ucitao && this.state.logiran && this.state.cijene[0] ) {
      return (
          <div >
            {this.state.vozila.map((src, index) => (
              <div key={index} className="gallery"> 
              <img
                key={index}
                src={src.slika_vozila_url}
                width="300px"
                height="300px "
              />
              <div>
              <div className="desc"> 
              <text key={index}>Marka: {src.naziv_marke}</text>
              </div>
              <div className="desc">
              <text key={index}>Model: {src.naziv_modela}</text>
              </div>
              <div className="desc">
              <text key={index}>Tip vozila: {src.naziv_tipa_vozila}</text>
              </div>
              <div className="desc">
              <text key={index}>Tip mjenjača: {src.naziv_tipa_mjenjaca}</text>
              </div>
              <div className="desc">
              <text key={index}>Cijena: {src.cijena} kn/dan </text>
              </div>
              <button className="btn btn-danger " key={index} onClick={()=>this.prosljediIDVozila(src.vozilo_id)}>Rezerviraj!</button>
              </div>
              </div>
            ))}
          </div>
      );
          }
    else {
      return (
        <div >
            {this.state.vozila.map((src, index) => (
              <div key={index} className="gallery"> 
              <img
                key={index}
                src={src.slika_vozila_url}
                width="250 px"
                height="250 px"
              />
              <div>
              <div className="desc"> 
              <text key={index}>Marka: {src.naziv_marke}</text>
              </div>
              <div className="desc">
              <text key={index}>Model: {src.naziv_modela}</text>
              </div>
              <div className="desc">
              <text key={index}>Tip vozila: {src.naziv_tipa_vozila}</text>
              </div>
              <div className="desc">
              <text key={index}>Tip mjenjača: {src.naziv_tipa_mjenjaca}</text>
              </div>
              <div className="desc">
              <text key={index}>Cijena: Potrebna registracija! </text>
              </div>
              </div>
              </div>
            ))}
          </div>
      );
    }
  }
}
