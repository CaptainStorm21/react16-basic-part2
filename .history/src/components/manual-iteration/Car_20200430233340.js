import React, { Component } from "react";

export default class Car extends Component {
  render() {
    // console.log(this.props);
    const { car, maker } = this.props.info;

    return (
      <div>
        <article className = "">
            <h5>car: {car}</h5>
            <p>maker: {maker}</p>
            <hr />
          </article>
      </div>
    );
  }
}