import React, { Component } from "react";
import Animal from "./Animal";
import animalData from './animaData';

export default class Animallist extends Component {

  constructor (props) {
    super(props);
    this.state = {
    
      Animals: animalData,
    }
  }
  // state = {
  //   Animals: animalData,
  // };
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
