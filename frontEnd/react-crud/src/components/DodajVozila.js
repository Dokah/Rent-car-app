import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import VoziloDataService from "../services/vozilo.service"

export default class DodajVozila extends React.Component {
    constructor(props){
    super(props);
    this.onChangeVoziloId = this.onChangeVoziloId.bind(this);
    this.onChangeMarka = this.onChangeMarka.bind(this);
    this.onChangeModel = this.onChangeModel.bind(this);
    this.onChangeOpis = this.onChangeOpis.bind(this);
    this.onChangeTipV = this.onChangeTipV.bind(this);
    this.onChangeTipM = this.onChangeTipM.bind(this);
    this.onChangeUrl = this.onChangeUrl.bind(this);
    this.spremiVozilo = this.spremiVozilo.bind(this);
    this.dodaoJe = this.dodaoJe.bind(this);
    this.state ={
      vozilo_id: "3",
      marka_id: "",
      model_id: "",
      opis: "",
      tip_vozila_id: "",
      tip_mjenjaca_id: "",
      dodao: "",
      slika_vozila_url: ""
    };
}

onChangeVoziloId(e) {
  this.setState({
    vozilo_id: e.target.value
  });
}

onChangeMarka(e) {
    this.setState({
      marka_id: e.target.value
    });
  }

  onChangeModel(e) {
    this.setState({
      model_id: e.target.value
    });
  }

  onChangeOpis(e) {
    this.setState({
      opis: e.target.value
    });
  }

  onChangeTipV(e) {
    this.setState({
      tip_vozila_id: e.target.value
    });
  }

  onChangeTipM(e) {
    this.setState({
      tip_mjenjaca_id: e.target.value
    });
  }

  onChangeUrl(e) {
    this.setState({
      slika_vozila_url: e.target.value
    });
  }

  dodaoJe(){
    const Auth = require("../auth/auth");
    const userDataAdmin = Auth.getCookie("User_admin");

    this.setState({dodao: userDataAdmin.korisnik_id});
  }

  componentDidMount(){
    this.dodaoJe();
  }

spremiVozilo() {

    var data = {
      vozilo_id: parseInt(this.state.vozilo_id,10)+1,
      opis_vozila: this.state.opis,
      marka_id: this.state.marka_id,
      model_id: this.state.model_id,
      tip_vozila_id: this.state.tip_vozila_id,
      tip_mjenjaca_id: this.state.tip_mjenjaca_id,
      dodao: this.state.dodao,
      slika_vozila_url: this.state.slika_vozila_url
    };

    console.log(data)

    VoziloDataService.create(data)
      .then(response => {
        this.setState({
          vozilo_id: response.data.vozilo_id,
          opis_vozila: response.data.opis,
          marka_id: response.data.marka_id,
          model_id: response.data.model_id,
          tip_vozila_id: response.data.tip_vozila_id,
          tip_mjenjaca_id: response.data.tip_mjenjaca_id,
          dodao: response.data.dodao,
          slika_vozila_url: response.data.slika_vozila_url
          
        });
        console.log(response.data);
        this.setState({vozilo_id: parseInt(this.state.vozilo_id,10)+1})
      })
      .catch(e => {
        console.log(e);
      });
  }




render(){
    return(
      <form>
      <div className="base-container" className= "container" >
        <h3>Dodaj vozila</h3>
       <div className="form-group">
           <label htmlFor="marka_id">Marka ID</label>
           <input type="number" name="marka_id" onInput={this.onChangeMarka} placeholder="number" />
       </div>
       <div className="form-group">
           <label htmlFor="model_id">Model ID</label>
           <input type="number" name="model_id" onInput={this.onChangeModel} placeholder="number" />
       </div>
       <div className="form-group">
           <label htmlFor="tip_vozila_id">Tip Vozila ID</label>
           <input type="number" name="tip_vozila_id" onInput={this.onChangeTipV} placeholder="number" />
       </div>
       <div className="form-group">
           <label htmlFor="tip_mjenjaca_id">Tip mjenjača ID</label>
           <input type="number" name="tip_mjenjaca_id" onInput={this.onChangeTipM} placeholder="number" />
       </div>
       <div className="form-group">
           <label htmlFor="slika_vozila_url">URL slike vozila:</label>
           <input type="text" name="slika_vozila_url" onInput={this.onChangeUrl} placeholder="www.something.com" />
       </div>
       <div className="form-group">
           <label htmlFor="opis_vozila">Opis vozila:</label>
           <input type="text" name="opis_vozila" onInput={this.onChangeOpis} placeholder="opis vozila" />
       </div>
       <div className="footer">
         <Link to= "/">
         <button type="button" onClick = {this.spremiVozilo} className="btn btn-dark btn-lg btn-block">
           Dodaj vozilo!
         </button>
         </Link>
       </div>
       </div>
       </form>
    )
}

}