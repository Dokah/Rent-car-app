import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import KorisnikDataService from "../services/korisnik.service"

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeNadimak = this.onChangeNadimak.bind(this);
    this.onChangeLozinka = this.onChangeLozinka.bind(this);
    this.onChangeIme = this.onChangeIme.bind(this);
    this.onChangePrezime = this.onChangePrezime.bind(this);
    this.onChangeDatumRodenja = this.onChangeDatumRodenja.bind(this);
    //this.test = this.test.bind(this);
    this.spremiKorisnika = this.spremiKorisnika.bind(this);
    this.state ={
      nadimak: "",
      lozinka: "",
      ime: "",
      prezime: "",
      datum_rodenja: ""
    };
  }

  onChangeNadimak(e) {
    this.setState({
      nadimak: e.target.value
    });
  }

  onChangeLozinka(e) {
    this.setState({
      lozinka: e.target.value
    });
  }

  onChangeIme(e) {
    this.setState({
      ime: e.target.value
    });
  }

  onChangePrezime(e) {
    this.setState({
      prezime: e.target.value
    });
  }

  onChangeDatumRodenja(e) {
    this.setState({
      datum_rodenja: e.target.value
    });
  }

  /*test (e) {
    console.log(this.state);
  }*/

  spremiKorisnika() {
    var data = {
      nadimak: this.state.nadimak,
      lozinka: this.state.lozinka,
      ime: this.state.ime,
      prezime: this.state.prezime,
      datum_rodenja: this.state.datum_rodenja
    };

    KorisnikDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          nadimak: response.data.nadimak,
          lozinka: response.data.lozinka,
          ime: response.data.ime,
          prezime: response.data.prezime,
          datum_rodenja: response.data.datum_rodenja
          
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    return (
     <form>
       <div className="base-container" className= "container" >
         <h3>Register</h3>
        <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" onInput={this.onChangeNadimak} placeholder="username" />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onInput={this.onChangeLozinka} placeholder="password" />
        </div>
        <div className="form-group">
            <label htmlFor="password">First name</label>
            <input type="text" name="name" onInput={this.onChangeIme} placeholder="First name" />
        </div>
        <div className="form-group">
            <label htmlFor="surname">Surname</label>
            <input type="text" name="surname" onInput={this.onChangePrezime} placeholder="surname" />
        </div>
        <div className="form-group">
            <label htmlFor="username">Date of birth</label>
            <input type="date" name="dateOfBirth" onInput={this.onChangeDatumRodenja} placeholder="yyyy/mm/dd" />
        </div>
        <div className="footer">
          <Link to= "/login">
          <button type="button" onClick = {this.spremiKorisnika} className="btn btn-dark btn-lg btn-block">
            Register
          </button>
         </Link>
        </div>
        </div>
        </form>
    );
  }
}