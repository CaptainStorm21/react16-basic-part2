import React, { Component } from 'react'
import Car from './Car'

export default class Carlist extends Component {

    books = [
        {
            book: 'Adventures of Tom Sawyer',
            author: 'Mark Twain'
        },
        {
            book: 'Story of Leonardo',
            author: 'Alex Twings'
        },
        {
            book: 'Girl from College',
            author: 'Andrea Delyagins'
        }
    ]
    render() {
        return (
            <div>
                <h3>This is our booklist</h3>
                <Book book={this.books[0]}/>
                <Book book={this.books[1]}/>
            </div>
        )
    }
}

