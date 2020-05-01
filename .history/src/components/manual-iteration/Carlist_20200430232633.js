import React, { Component } from "react";
// import Car from "./Car";

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
        {this.state.books.map((item, index))}
      </div>
    );
  }
}
