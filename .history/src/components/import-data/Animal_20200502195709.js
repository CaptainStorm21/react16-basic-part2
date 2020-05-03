import React, { Component } from "react";
import "../../App.css";

export default class Animal extends Component {
  //do not mutate the state
  //shallow merge
  //this.setState({})
  constructor (props){
    super(props);
    this.state = {
      count: 0,
      status: "seen"
    }
    // this.handleClick = this.handleClick.bind(this);
  }

  addCount = () => {
        //change state
        //grabs the initial state . count and updates a virtual dom without altering constructor(props)
        this.setState({  
            count: this.state.count + 1,
            status: "rescued"
        })
        //below is wrong
        // this.state = {
        //   count: this.state.count + 1
        // }
  }

  lowerCount = () => {
    if(this.state.count > 0){
      this.setState(prevState => ({counter: prevState.counter-1}))
   }
    // this.setState({  
    //   count: this.state.count - 1,
    //   status: "still remaining"
    // })
  }

  resetCount = () => {
    this.setState({  
      count: 0,
      status: "Not seen/Not rescued"
    })
  }
  // handleClick() { 
  //   console.log('you clicked!');
  //   console.log(this.state.count)
  // };

  // with the arrow functions they are not
  // creating their own context.
  // So that is the reason why we don't need to bind anything.

  // handleClick = () => {
  //   console.log('you clicked me');
  //   console.log(this.state.count);
  // }

  render() {
    // console.log(this.props);
    const { img, name,  lives } = this.props.info;

    return (
      <article>
      <div className = "section-style section-style-red">
           <img src = {img} width = "150" alt="wild animal" />
            <h5>Animal: {  name }</h5>
            <p>Residence: { lives }</p>
            <h4> {this.state.count} {this.state.status}</h4>
{/* event handling  */}
            <button type="button" onClick = {this.addCount}>add count</button>
            <button type="button" onClick = {this.resetCount}>reset count</button>
            <button type="button" onClick = {this.lowerCount}>lower count</button>
      </div>
      <hr />
      </article>
    );
  }
}
