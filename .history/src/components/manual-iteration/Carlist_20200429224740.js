import React, { Component } from 'react'
import Car from './Car'

export default class Carlist extends Component {

    books = [
        {
            car: 'Ferrari F23',
            maker: 'Ferrari'
        },
        {
            car: 'Accord',
            maker: 'Honda'
        },
        {
            car: 'Adventure T',
            maker: 'Tesla'
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

