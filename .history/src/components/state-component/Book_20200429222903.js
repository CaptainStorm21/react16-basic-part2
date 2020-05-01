import React, { Component } from 'react';
//accessing props
export default class Book extends Component {
    render() {
        // console.log(this.props);
        const {book, author} = this.props.book;
        
        return(
            <div>
                <h3>
                    book: {book}
                </h3>
                <h3>
                    author:  {author}
                </h3>
            </div>
        )
    }
}