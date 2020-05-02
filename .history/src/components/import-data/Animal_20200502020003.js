import React, { Component } from "react";
import "../../App.css";

export default class Animal extends Component {
  handleClick() 
  render() {
    // console.log(this.props);
    const { img, name,  lives } = this.props.info;

    return (
      <article>
      <div className = "section-style section-style-red">
           <img src = {img} width = "150" alt="wild animal" />
            <h5>Animal: {  name }</h5>
            <p>Residence: { lives }</p>
            <button type="button">add count</button>
      </div>
      <hr />
      </article>
    );
  }
}
