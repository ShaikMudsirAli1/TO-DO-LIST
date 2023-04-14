import React from "react";

// Using Functional Component, Less Syntax more readability.
export default function Form(props) {
  return (
    <div>
      <input onChange={props.onChange} type="text" value={props.value} />
      <button onClick={props.onClick}>
        <span>Add Item</span>
      </button>
    </div>
  );
}
