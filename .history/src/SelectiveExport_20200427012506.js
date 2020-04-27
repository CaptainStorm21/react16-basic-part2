import React from 'react';
import './App.css';
import  *  as data from './data';

// statless functional component
const SelectiveExport= () =>(
  <section>
     <ol> Game: {data.game }</ol>
     <ol>Game Maker: {gameMaker}</ol>
     <ol>Game Release {gameRelease}</ol>
     <ol>Book Title: {myFavoriteBook.title}</ol>
     <ol>Book Author: {myFavoriteBook.author}</ol>
  </section>
)

export default SelectiveExport;
