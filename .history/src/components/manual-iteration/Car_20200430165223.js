import React, { Component } from "react";

export default class Car extends Component {
  render() {
    // console.log(this.props);
    const { car, maker } = this.props.car;

    return (
      <atcle>
        <h5>car: {car}</h5>
        <p>maker: {maker}</p>
        <hr />
      </Artcle>
    );
  }
}
