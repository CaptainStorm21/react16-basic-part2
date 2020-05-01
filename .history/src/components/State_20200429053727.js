

import React, { Component } from 'react';
import '../App.css';
import {full_name} from  './vars'

class  StateComponent extends Component {
    
    render() {
        return (  
            <div>
                <h5> Extended Component</h5>
                <p>User's name is : {full_name}</p>
            </div>
        )
    }
}

export default StateComponent;