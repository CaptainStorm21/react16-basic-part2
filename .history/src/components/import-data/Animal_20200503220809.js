import React, { Component } from "react";
import "../../App.css";
import Button from './Button';

export default class Animal extends Component {
  //PROP drilling passing methods to children
  constructor (props){
    super(props);
    this.state = {
      count: 0,
      status: "seen"
    }
  }

  render() {
    // console.log(this.props);
    const { img, name,  lives } = this.props.info;
    console.log(this.props);

    return (
      <article>
      <div className = "section-style section-style-red">
           <img src = {img} width = "150" alt="wild animal" />
            <h5>Animal: {  name }</h5>
            <p>Residence: { lives }</p>
            <div>
              <Button handeDelete = />
            </div>
      </div>
      <hr />
      </article>
    );
  }
}
