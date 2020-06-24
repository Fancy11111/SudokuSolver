import React, { useState } from 'react'
import './Field.css';
import FieldState from '../types/FieldState';
import IInputHandler from '../types/IInputHandler';
import ISelectionHandler from '../types/ISelectionHandler';
import SelectedField from '../types/SelectedField';

type NewFieldProps = {
  fieldData: FieldState,
  handleChange: IInputHandler,
  selectionHandler: ISelectionHandler,
  selection: SelectedField
}

export default function NewField(props: NewFieldProps) {
  let [inputState, setInputState] = useState(false);
  let [maybeState, setMaybeState] = useState([false, false, false, false, false, false, false, false, false]);

  let changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {

    e.preventDefault();
    let val = e.target.value;
    if(val === '') val = '0';

    if(IsAcceptableValue(val)) {
      if (inputState) {
        let index = parseInt(val) - 1;
        if(index > -1) {
          setMaybeState((prevState) => {
            let newVal = prevState[index] === true ? true : false;
            let front = prevState.slice(0, index);
            let back = prevState.slice(index + 1);
            return [...front, newVal, ...back];
          })
        }
      }
      else {
        props.handleChange(props.fieldData.id, parseInt(val));
      }
    }
  }

  let clickHandler = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    props.selectionHandler(props.fieldData.row, props.fieldData.col, props.fieldData.group);
  };

  let IsSelected = () => {
    return props.selection.row === props.fieldData.row ? true : 
        props.selection.col === props.fieldData.col ? true : 
          props.selection.group === props.fieldData.group; 
  }

  let IsAcceptableValue = (val: string) => {
    let acceptableVals = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    return acceptableVals.find((curr) => val === curr) !== undefined;
  }

  let keyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.key);
    if(e.key === 'Shift') {
      setInputState(true);
    }
    else if(e.key === 'Control') {
      setInputState(false);
    }
  }

  return (<div className="field">
    <input className={`field-input ${IsSelected() ? 'selected' : ''}`} value={ props.fieldData.val === 0 ? '' : props.fieldData.val } onKeyPress={keyPressHandler} onSelect={clickHandler} onChange={changeHandler}>
    </input>
  </div>)
}