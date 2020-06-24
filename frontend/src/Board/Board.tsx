import React, {useState} from 'react'
import { Group } from '../Group/Group';
import { Field } from '../Field/Field';
import FieldState from '../types/FieldState';
import './Board.css'
import NewField from '../newField/Field';
import IInputHandler from '../types/IInputHandler';
import ISelectionHandler from '../types/ISelectionHandler';

// let initState = (size: number = 81) => {
//   let arr: number[] = [];
//   for (let i = 0; i < size; i++) {
//     arr.push(0);
//   }
//   return arr;
// };

let initFieldStates = (size: number = 81): FieldState[] => {
  let fieldStates: FieldState[] = [];
  let fieldState: FieldState;
  let group: number;
  let counter = 0;
  for(let i = 0; i < 9; i++) {
    for(let j = 0; j < 9; j++){
      let group = determineGroup(counter, size);
      fieldState = {
        group,
        row: i,
        col: j,
        val: 0,
        id: counter
      };
      fieldStates.push(fieldState);
      counter = counter + 1;
    }
  }
  return fieldStates;
}

let determineGroup = (i: number, size: number) => {
  let group: number;
  if (i / 27 < 1) {
    if (i % 9 < 3) {
      group = 0;
    }
    else if (i % 9 > 5) {
      group = 2;
    }
    else {
      group = 1;
    }
  }
  else if (i / 27 < 2) {
    if (i % 9 < 3) {
      group = 3;
    }
    else if (i % 9 > 5) {
      group = 5;
    }
    else {
      group = 4;
    }
  }
  else {
    if (i % 9 < 3) {
      group = 6;
    }
    else if (i % 9 > 5) {
      group = 8;
    }
    else {
      group = 7;
    }
  }
  return group;
}

type BoardProps = {
  size: number;
}

export function Board(props: BoardProps) {
  //let [boardState, setBoardState] = useState(initState(props.size));

  let [fieldStates, setFieldStates] = useState(initFieldStates(81));

  let [selectionState, setSelectionState] = useState({
    row: -1,
    col: -1,
    group: -1
  })
  
  let handleSelection: ISelectionHandler = (row: number, col: number, group: number) => {
    setSelectionState({row, col, group});
  }

  let handleChange: IInputHandler = (id: Number, value: number) => {
    setFieldStates((prevState) => {
      let prevIndex = prevState.findIndex((curr) => curr.id === id);
      let prevFieldState = prevState[prevIndex];
      let newFieldState: FieldState = {
        ...prevFieldState,
        val: value
      };
      let front = prevState.slice(0, prevIndex);
      let back = prevState.slice(prevIndex + 1);
      let newState: FieldState[] = [
        ...front,
        newFieldState,
        ...back
      ];
      return newState;
    })
  }
  
  // let i: number;
  // let groups: JSX.Element[][] = [];
  // for(i = 0; i < Math.sqrt(props.size); i++){
  //   groups.push([]);
  // }

  // let group: number = -1;
  // for(i = 0; i < props.size; i++) {

  //   groups[group].push(<Field handleChange={handleChange} id={i} value={boardState[i]} key={i}></Field>)
    
  // }

  return (
    // <div className="board">
    //   {
    //     groups.map((fields, i) => <Group key={i}>{fields}</Group>)
    //   }
    // </div>
    <div className="newBoard">
      {fieldStates.map(fs => 
        <NewField fieldData={fs} key={fs.id} handleChange={handleChange} selectionHandler={handleSelection} selection={selectionState}></NewField>
      )}
    </div>
  )
}