import React from "react";
import "../index.css";

export default class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
     // <div className="base-container" className= "container" >
     <form>
         <h3>Register</h3>
         <div className= "form-group"></div>
        <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="username" />
        </div>
        <div className= "form-group"></div>
        <div className="form-group">
            <label htmlFor="username">Password</label>
            <input type="text" name="username" placeholder="username" />
        </div>
        <div className= "form-group"></div>
        <div className="form-group">
            <label htmlFor="username">Name</label>
            <input type="text" name="username" placeholder="username" />
        </div>
        <div className= "form-group"></div>
        <div className="form-group">
            <label htmlFor="username">Surname</label>
            <input type="text" name="username" placeholder="username" />
        </div>
        <div className= "form-group"></div>
        <div className="form-group">
            <label htmlFor="username">Date of brith</label>
            <input type="date" name="dateOfBirth" placeholder="yyyy/mm/dd" />
        </div>
        <div className="footer">
          <button type="button" className="btn btn-dark btn-lg btn-block">
            Register
          </button>
        </div>
        </form>
     // </div>
    );
  }
}