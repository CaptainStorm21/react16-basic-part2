//state
//this.setState = hold access change data of the component
//props = read only

import React from "react";
import "../App.css";
import Carlist from "./state-component/Booklist";
import Booklist from "./manual-iteration/Carlist";

const StateComponent = () => (
  <div>
    <div className = "section-style1">

      <Booklist />
    </div>
    <div className = "section-style2">     
     <h5> Manual Iteration Component</h5>
      <h5>State Component</h5>
      <Carlist />
    </div>
  </div>
);

export default StateComponent;
