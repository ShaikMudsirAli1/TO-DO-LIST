import { React, useState } from "react";
import TODoItem from "./ToDoItem";
import Header from "./Header";
import Form from "./Form";
import Header1 from "./Header1";

export default function App() {
  // React hook.
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  // Using "..." Spread Operator.
  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  // filtering the items & Deleting the items in array.
  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <Header />
      </div>
      <div className="form">
        <Form onChange={handleChange} value={inputText} onClick={addItem} />
      </div>
      <div>
        <ol>
          {items.map((todoItem, index) => (
            /* We are using TODOItem component instead of li  */
            <TODoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ol>
      </div>
    </div>
  );
}

function App2() {
  // React hook.
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  // Using "..." Spread Operator.
  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <Header1 />
      </div>
      <div className="form">
        <Form onChange={handleChange} value={inputText} onClick={addItem} />
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            /* We are using TODOItem component instead of li  */
            <TODoItem text={todoItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export { App2 };
