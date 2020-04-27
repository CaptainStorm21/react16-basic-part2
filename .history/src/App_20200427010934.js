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
     <ol> {name}</li>
      {age}
      {person.age}{person.name}</p>
  </section>
)

export default App;


