import './App.css';
import React, { useState } from 'react';
import { List } from './List.js';

export const App = () => {
  const [stringArray] = useState(["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]);
  const [objectArray] = useState([
    {text: "один", id: 11},
    {text: "два", id: 22},
    {text: "три", id: 33},
    {text: "чотири", id: 44},
    {text: "п'ять", id: 55},
    {text: "шість", id: 66},
    {text: "сім", id: 77},
    {text: "вісім", id: 88},
    {text: "дев'ять", id: 99},
    {text: "десять", id: 1010}
  ]);

  return (
    <div className='App'>
      <List data={stringArray} flag="strings"/>
      <hr/>
      <List data={objectArray} flag="objects"/>
    </div>
  );
}