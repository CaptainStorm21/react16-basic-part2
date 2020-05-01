import React, { Component } from 'react'
import Book from './Book'

export default class Booklist extends Component {

    books = [
        {
            book: 'Adventures of '
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

