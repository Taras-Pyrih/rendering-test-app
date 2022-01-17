import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  function OrderedStringList(props) {
    const strings = props.strings;
    const stringList = strings.map((string, index) =>
      <li key={index}>
        {string}
      </li>
    );

    if (stringList.length == 0) {
      return (
        <div>
          Ви задали порожній масив!
        </div>    
      );
    }
    else {
      return (
        <ol>
          {stringList}
        </ol>
      );
    }
  }

  const stringArray = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

  function UnorderedStringList(props) {
    const items = props.items;
    const stringList = items.map(item =>
      <li key={item.id}>
        {item.string}
      </li>
    );

    if (stringList.length == 0) {
      return (
        <div>
          Ви задали порожній масив!
        </div>    
      );
    }
    else {
      return (
        <ul>
          {stringList}
        </ul>
      );
    }
  }

  const itemArray = [
    {id: 1, string: "один"},
    {id: 2, string: "два"},
    {id: 3, string: "три"},
    {id: 4, string: "чотири"},
    {id: 5, string: "п'ять"},
    {id: 6, string: "шість"},
    {id: 7, string: "сім"},
    {id: 8, string: "вісім"},
    {id: 9, string: "дев'ять"},
    {id: 10, string: "десять"}
  ]

  return (
    <div className="App">
      <OrderedStringList strings={stringArray}/>
      <hr/>
      <UnorderedStringList items={itemArray}/>
    </div>
  );
}

export default App;