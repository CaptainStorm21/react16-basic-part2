import React, { Component } from "react";
import Car from "./Car";

export default class Carlist extends Component {
  state = {
    cars: [
      {
        car: "Ferrari F23",
        maker: "Ferrari",
      },
      {
        car: "Accord",
        maker: "Honda",
      },
      {
        car: "Adventure T",
        maker: "Tesla",
      },
    ]
  };
  render() {
      const cars = this.state
    return (
      <div>
        <h3>This is our car list</h3>
        <Car />
      </div>
    );
  }
}
