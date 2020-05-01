import React, { Component } from "react";
import Animal from "./Animal";
import Animallist from './animaData';

export default class Animallist extends Component {
  state = {
    Animals: [
      {
        id: 1,
        Animal: "Ferrari F23",
        maker: "Ferrari",
      },
      {
        id: 2,
        Animal: "Accord",
        maker: "Honda",
      },
      {
        id: 3,
        Animal: "Adventure T",
        maker: "Tesla",
      },
      {
        id: 4,
        Animal: "RAV T",
        maker: "Toyota",
      },
    ],
  };
  render() {
    //specific for Animal model
    //   const Animals = this.state.Animals.map((item) => item.Animal);
    //   console.log('these are your Animals')
    //   console.log(Animals)

    //   filter
    //   forEach
    // map
    // reduce

    return (
      <div>
        <h3>This is our Animal list</h3>
        {this.state.Animals.map((item) => (
          <Animal key={item.id} info={item} />
        ))}
      </div>
    );
  }
}
