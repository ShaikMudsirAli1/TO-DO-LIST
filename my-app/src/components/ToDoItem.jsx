import React from "react";
import Header from "./Header";

/**
 *  Managing a Component Tree.
 *  We are targeting each component and making seprate each component
 *  from "App.jsx".
 *  Splitting our app into different components.
 */

export default function TODoItem(props) {
  return <li>{props.text}</li>;
}
