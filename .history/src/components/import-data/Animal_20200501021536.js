import React, { Component } from "react";
import "../../App.css";

export default class Animal extends Component {
  render() {
    // console.log(this.props);
    const { name, list } = this.props.info;

    return (
      <div className = "section-style1">
            <h5>Animal: {  name }</h5>
            <p>maker: { lives }</p>
            <hr />
      </div>
    );
  }
}
