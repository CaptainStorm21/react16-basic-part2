import React from 'react';
import './App.css';
import  *  as data from './data';

// statless functional component
const SelectiveExport= () =>(
  <section>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
</p>
     <ol> Game: {game }</ol>
     <ol>Game Maker: {gameMaker}</ol>
     <ol>Person's age: {person.age}</ol>
     <ol>Person's name: {person.name}</ol>
  </section>
)

export default SelectiveExport;
