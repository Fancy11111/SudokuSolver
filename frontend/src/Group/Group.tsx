import './Group.css';
import React from 'react'

export function Group(props: any) {
  return (
    <div className="group">
      {props.children}
    </div>
  );
}