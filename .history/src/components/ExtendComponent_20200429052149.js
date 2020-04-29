//subclass of compact
//extends for component class
//inheritcs functionality
//component class is used to transfer from basic E6 class

import React, { Component } from 'react';
import '../App.css';

class  ExtendComponent extends Component {
    render() {
        return ( 
            <div>
                <h3> this is from Extended Component</h3>
            </div>
        )
    }
}

export default ExtendComponent;