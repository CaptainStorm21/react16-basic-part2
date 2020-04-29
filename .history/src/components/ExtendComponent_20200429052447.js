//subclass of compact
//extends for component class
//inheritcs functionality
//component class is used to transfer from basic E6 class

import React, { Component } from 'react';
import '../App.css';

class  ExtendComponent extends Component {
    full_name = "Anthony Johnson"
    render() {
        return ( 
            <div>
                <h5> Extended Component</h5>
                <p>{full_name}</p>
            </div>
        )
    }
}

export default ExtendComponent;