import React, { Component } from "react";
import {Link, Route} from 'react-router-dom';
import "../index.css";
import { Router, Switch } from "react-router-dom";
import VoziloDataService from "../services/vozilo.service";



export default class Homepage extends Component {
  constructor(props){
    super(props);
    this.state={images : ['https://www.clker.com/cliparts/3/m/v/Y/E/V/small-red-apple-hi.png','https://www.clker.com/cliparts/3/m/v/Y/E/V/small-red-apple-hi.png','https://www.clker.com/cliparts/3/m/v/Y/E/V/small-red-apple-hi.png']};
  }
  
  render() {
  return(
    <div>
      <div className="gallery">
      {this.state.images.map((src, index ) => (<img key={index} src={src} width="150px" height="150 px" />))}
      </div>
    </div>
  )
}

}
