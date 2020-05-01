import React, { Component } from 'react'
import Book from './Book'

export default class Booklist extends Component {

    books = [
        {
            book: 'Adventures of Tom Sawyer',
            author: 'Mark Twain'
        }
    ]
    render() {
        return (
            <section>
                <h3>This is our booklist</h3>
                <Book/>
            </section>
        )
    }
}

