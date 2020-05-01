import React, { Component } from 'react'
import Book from './Book'

export default class Booklist extends Component {

    books = [
        {
            
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

