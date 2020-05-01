//state
//this.setState = hold access change data of the component
//props = read only

import React from "react";
import "../App.css";
import Carlist from "./state-component/Booklist";
import Booklist from "./manual-iteration/Carlist";
import Animallist from './import-data/Animallist';

const StateComponent = () => (
  <div>
    <div>
      <h5>State Component  / auto iteration map()</h5>
      <Booklist />
    </div>
    <div className = "section-style section-style-red">     
     <h5> Manual Iteration Component</h5>

      <Carlist />
    </div>
    <div className = "section-style2">     
     <h5> Data file is separated</h5>

      <Animallist/>
    </div>
  </div>
);

export default StateComponent;
