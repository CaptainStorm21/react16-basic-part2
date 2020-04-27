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
     <ol>age: {age}</ol>
     <ol>{person.age}</ol>
     <ol>{person.name}</ol>
      </p>
  </section>
)

export default App;


