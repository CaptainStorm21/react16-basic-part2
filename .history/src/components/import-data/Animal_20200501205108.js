import React, { Component } from "react";
import "../../App.css";

export default class Animal extends Component {
  render() {
    // console.log(this.props);
    const { name,  lives } = this.props.info;

    return (
      <div className = "section-style section-style-red">
            
            <h5>Animal: {  name }</h5>
            <p>Residence: { lives }</p>
            <hr />
      </div>
    );
  }
}
