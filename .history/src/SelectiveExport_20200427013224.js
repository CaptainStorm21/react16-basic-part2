import React from 'react';
import './App.css';
import  *  as data from './data';

// statless functional component
const SelectiveExport= () =>(
  <div>
     <ol>Game Maker: {data.gameMaker}</ol>
     <ol>Game Release {data.gameRelease}</ol>
     <ol>Book Title: {data.myFavoriteBook.title}</ol>
     <ol>Book Author: {data.myFavoriteBook.author}</ol>
     <hr/>
     <ol>{data.actor_name}</ol>
  </div>

)

export default SelectiveExport;
