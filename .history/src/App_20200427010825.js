// named and default import / export
// only one default export per module
// thik of the module as file 

import React from 'react';
import './App.css';
import {name, age, person} from './data'

// statless functional component
const App = () =>(
  <section>
      <p>lorem</p>
      {name}
  </section>
)

export default App;


