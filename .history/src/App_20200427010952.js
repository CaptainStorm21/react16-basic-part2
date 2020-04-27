// named and default import / export
// only one default export per module
// thik of the module as file 

import React from 'react';
import './App.css';
import {name, age, person} from './data'

// statless functional component
const App = () =>(
  <section>
      <p>lorem
     <ol> {name}</ol>
      {age}</ol>
      {person.age}{person.name}</ol>
      </p>
  </section>
)

export default App;


