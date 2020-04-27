import React from 'react';
import './App.css';
import  *  as data from './data';

// statless functional component
const SelectiveExport= () =>(
  <ul>
     <ol>Game Maker: {data.gameMaker}</ol>
     <ol>Game Release {data.gameRelease}</ol>
     <ol>Book Title: {data.myFavoriteBook.title}</ol>
     <ol>Book Author: {data.myFavoriteBook.author}</ol>
  </section>
)

export default SelectiveExport;
