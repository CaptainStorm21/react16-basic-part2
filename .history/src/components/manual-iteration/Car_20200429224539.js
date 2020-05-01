import React, { Component } from "react";

export default class Car extends Component {
  render() {
    // console.log(this.props);
    const { car, maker } = this.props.book;

    return (
      <artcle>
        <h5>book: {book}</h5>
        <p>author: {author}</p>
        <hr />
      </artcle>
    );
  }
}
