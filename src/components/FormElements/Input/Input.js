import React from 'react';

import "./Input.css"

const Input = props => {

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={props.onChange}
      />
    );

  return (
    <div
    className={`form-control`}
  >
    <label htmlFor={props.id}>{props.label}</label>
    {element}
    {/* {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>} */}
  </div>
  );
};

export default Input;