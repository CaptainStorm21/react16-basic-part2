import React, { Component } from "react";
import "../../App.css";

export default class Animal extends Component {
  constructor (props){
    super(props);
    this.state = {
      count: 1
    }
    // this.handleClick = this.handleClick.bind(this);
  }


  // handleClick() { 
  //   console.log('you clicked!');
  //   console.log(this.state.count)
  // };

  render() {
    // console.log(this.props);
    const { img, name,  lives } = this.props.info;

    return (
      <article>
      <div className = "section-style section-style-red">
           <img src = {img} width = "150" alt="wild animal" />
            <h5>Animal: {  name }</h5>
            <p>Residence: { lives }</p>
{/* event handling  */}
            <button type="button" onClick = {this.handleClick}>add count</button>
      </div>
      <hr />
      </article>
    );
  }
}
