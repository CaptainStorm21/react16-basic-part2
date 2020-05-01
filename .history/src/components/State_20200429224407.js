//state 
//this.setState = hold access change data of the component
//props = read only

import React from 'react';
import '../App.css';
import Carlist from './state-component/Booklist';
import Booklist from './manual-iteration/Booklist';

const StateComponent = () => (

            <div>
                <div>
                <h5> State Component</h5>
            <Booklist/>
            </div>
            </div>

)
 
export default StateComponent;