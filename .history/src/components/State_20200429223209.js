//state 
//this.setState = hold access change data of the component
//props = read only

import React, { Component } from 'react';
import '../App.css';
import Booklist from './state-component/Book'



class  StateComponent extends Component {
    
    render() {
        return (  
            <div>
                <h5> State Component</h5>
            <Booklist/>
            </div>
        )
    }
}
 
export default StateComponent;