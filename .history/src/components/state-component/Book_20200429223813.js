import React, { Component } from 'react';

export default class Book extends Component {
    render() {
        // console.log(this.props);
        const {book, author} = this.props.book;

        return(
            <artcle>
                <h3>
                    book: {book}
                </h3>
                <p>
                    author:  {author}
                </p>
                </artcle>
        )
    }
}