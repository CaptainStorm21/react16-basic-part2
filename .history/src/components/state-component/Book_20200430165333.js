import React, { Component } from "react";

export default class Book extends Component {
  render() {
    // console.log(this.props);
    const { book, author } = this.props.book;

    return (
      <article>
        <h5>book: {book}</h5>
        <p>author: {author}</p>
        <hr />
      </article>
    );
  }
}
