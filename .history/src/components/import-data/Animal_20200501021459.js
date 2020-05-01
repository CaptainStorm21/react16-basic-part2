import React, { Component } from "react";
import "../../App.css";

export default class Animal extends Component {
  render() {
    // console.log(this.props);
    const { Animal, maker } = this.props.info;

    return (
      <div className = "section-style1">
            <h5>Animal: {  name l}</h5>
            <p>maker: {maker}</p>
            <hr />
      </div>
    );
  }
}
