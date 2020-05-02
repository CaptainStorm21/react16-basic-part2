import React, { Component } from "react";
import "../../App.css";

export default class Animal extends Component {
  render() {
    // console.log(this.props);
    const { img, name,  lives } = this.props.info;

    return (
      <div
      <div className = "section-style section-style-red">
           <img src = {img} width = "150" alt="wild animal" />
            <h5>Animal: {  name }</h5>
            <p>Residence: { lives }</p>
            <hr />
      </div>
    );
  }
}
