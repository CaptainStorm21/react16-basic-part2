import React, { Component } from "react";
import '../../App.css'

export default class Car extends Component {
  render() {
    // console.log(this.props);
    const { car, maker } = this.props.info;

    return (
      <div>
            <h5>car: {car}</h5>
            <p>maker: {maker}</p>
            <hr />
      </div>
    );
  }
}
