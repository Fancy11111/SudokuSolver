import React from 'react';
import './App.css';
import { Field } from './Field/Field';
import { Group } from './Group/Group';
import { Board } from './Board/Board';


let initState = (function(){
  let arr: number[] = [];
  for(let i = 0; i < 81; i++){
    arr.push(0);
  }
  return arr;
});

function App() {
  let counter = 0;
  return (
    <div className="App">
      <Board size={81}></Board>
    </div>
  );
}

export default App;
