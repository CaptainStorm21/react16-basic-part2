import React, { Component } from "react";
import Car from "./Car";

export default class Carlist extends Component {
  state = {
    cars: [
      {
          id: 1,
        car: "Ferrari F23",
        maker: "Ferrari",
      },
      {
          id: 2,
        car: "Accord",
        maker: "Honda",
      },
      {
          id: 3,
        car: "Adventure T",
        maker: "Tesla",
      },
      {
        id: 3,
      car: "Adventure T",
      maker: "Tesla",
    },
    ]
};
    render() {
    //specific for car model
    //   const cars = this.state.cars.map((item) => item.car);
    //   console.log('these are your cars')
    //   console.log(cars)




    //   filter
    //   forEach
    // map
    // reduce

    return (
      <div>
        <h3>This is our car list</h3>
        {this.state.cars.map((item, index) => (<Car  key = {index} info={item} />))}
      </div>
    );
  }
}
