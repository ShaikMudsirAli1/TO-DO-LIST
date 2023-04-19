import React, { useState } from "react";

/**
 *  Managing a Component Tree.
 *  We are targeting each component and making seprate each component
 *  from "App.jsx".
 *  Splitting our app into different components.
 *
 *  ToDoItem component is a stateless component it is  not trying to
 *  change itself all its doing is receiving some read only properties
 *  and it just displays them inside.
 *
 *  Props are "read only" it does not update and modify our props
 *  we can have state inside these components.
 *
 *  Adding CSS text-decoration Property text-decoration: line-through;
 *  it strike the word.
 *
 *  We are using camelCasing here.
 *  Managing the state in the ToDoItem.
 *
 */

export default function TODoItem(props) {
  return (
    //  onClick function is called when div detects a click on ToDoItem in  Items array.
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

/** 
 * const [isDone, setIsDone] = useState(false); // Rendering depending on a conditiion.

  function handleClick() {
    setIsDone((prevValue) => { // Call setIsDone and preValue = false.
      return !prevValue; // It returns opposite of preValue if false it returns true.
    });
  }
    //  }}>  {/* Using Inline style property & using isDone property 
    //       to conditionally render this textDecoration. 
    //     <li style={{ textDecoration: isDone ? "line-through" : "none" 

//*/
