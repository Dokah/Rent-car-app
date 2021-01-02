import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import "../index.css";
import { Router, Switch } from "react-router-dom";
import VoziloDataService from "../services/vozilo.service";
import Auth from "../auth/auth"

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = { vozila: [] };
    this.state = { ucitao: false };
  }

  componentDidMount() {
    
    VoziloDataService.getAll().then((Response) => {
      this.setState({ vozila: Response.data }, () => {
        this.setState({ ucitao: true });
      });
    });
  }

  render() {
    if (this.state.ucitao) {
      return (
        <div>
          <div className="gallery row ">
            {this.state.vozila.map((src, index) => (
              <img
                key={index}
                src={src.slika_vozila_url}
                width="800px"
                height="600 px"
              />
            ))}
          </div>
          {this.state.vozila.map((src, index) => (
            <text key={index}>Marka: {src.naziv_marke}</text>
          ))}
          {this.state.vozila.map((src, index) => (
            <text key={index}>Model: {src.naziv_modela}</text>
          ))}
          {this.state.vozila.map((src, index) => (
            <text key={index}>Opis: {src.opis_vozila}</text>
          ))}
          {this.state.vozila.map((src, index) => (
            <text key={index}>Tip vozila: {src.naziv_tipa_vozila}</text>
          ))}
          {this.state.vozila.map((src, index) => (
            <text key={index}>Tip mjenjača: {src.naziv_tipa_mjenjaca}</text>
          ))}
        </div>
      );
    } else {
      return (
        <div>
        </div>
      );
    }
  }
}
