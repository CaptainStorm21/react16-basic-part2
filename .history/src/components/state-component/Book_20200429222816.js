import React, { Component } from 'react';
//accessing props
export default class Book extends Component {
    render() {
        // console.log(this.props);
        const {book, author}
        return(
            <div>
                <h3>
                    book: 
                </h3>
                <h3>
                    author: 
                </h3>
            </div>
        )
    }
}