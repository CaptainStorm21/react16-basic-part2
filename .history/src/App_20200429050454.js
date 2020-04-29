// named and default import / export
// only one default export per module
// thik of the module as file 
//React hooks
// classes synthanctical sugar for constructor functions
//subclass of compact
//extends for component class
//inheritcs functionality
//component 

import React from 'react';
import './App.css';
import Header from './components/Header'
import {name, age, person} from './data'

import SelectiveExport from './SelectiveExport';

// statless functional component
const App = () =>(
  <>
  <Header/>
  <section>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
</p>
     <ol> name: {name}</ol>
     <ol>age: {age}</ol>
     <ol>Person's age: {person.age}</ol>
     <ol>Person's name: {person.name}</ol>
  </section>
    <section>
      <SelectiveExport/>
  </section>
  </>
)

export default App;


