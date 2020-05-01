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
                <h3>This is our car list</h3>
                <Car book={this.books[0]}/>
                < book={this.books[1]}/>
            </div>
        )
    }
}

