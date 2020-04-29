//subclass of compact
//extends for component class
//inheritcs functionality
//component class is used to transfer from basic E6 class

import React, { Component } from 'react';
import '../App.css';
import {full_name} from  './vars'

class  ExtendComponent extends Component {
    constructor ()
    render() {
        return (  
            <div>
                <h5> Extended Component</h5>
                <p>User's name is : {full_name}</p>
            </div>
        )
    }
}

export default ExtendComponent;