import React from 'react';
import './App.css';
import  *  as data from './data';

// statless functional component
const SelectiveExport= () =>(
  <section>
     <ol> Game: {game }</ol>
     <ol>Game Maker: {gameMaker}</ol>
     <ol>Game Release {gameRelease}</ol>
     <ol>Person's name: {myFavoriteBook.title}</ol>
  </section>
)

export default SelectiveExport;
