import React, { useState } from 'react';
import './Field.css';
import IInputHandler from '../types/IInputHandler';

export type FieldProps = {
  value?: Number;
  handleChange: IInputHandler;
  id: number;
}



export function Field(props: FieldProps) {
  let [maybes, setMaybes] = useState([false, false, true, false, false, true, false, false, false]);
  let [color, setColor] = useState('FFFFFF');
  return (
    <div color={color} className="field">
      {props.value != 0 ? props.value : 
        <div className="maybes">
          {maybes.map(
            (val, i) => <div key={i} className="maybe">{val ? i + 1 : ''}</div>
          )}
        </div>
      }
    </div>
  )
}