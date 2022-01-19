import './App.css';
import React, { useState } from 'react';
import { OrderedStringList } from "./OrderedStringList.js";
import { UnorderedStringList } from "./UnorderedStringList.js";

export const App = () => {
  const [stringArray] = useState(["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]);
  const [itemArray] = useState([
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
  ]);

  return (
    <div className="App">
      <OrderedStringList strings={stringArray}/>
      <hr/>
      <UnorderedStringList items={itemArray}/>
    </div>
  );
}