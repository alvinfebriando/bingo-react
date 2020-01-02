import React, { useState } from 'react';
import Util from './util/util';

import Bingo from './components/Bingo';
import './App.css';

const numArr = [];
const checkedArr = [];

for (let i = 1; i <= 25; i++) {
  numArr.push(i);
  checkedArr.push(false);
}
const num1 = Util.shuffle(numArr);
const num2 = Util.shuffle(numArr);

const App = () => {
  const [checked1, setChecked1] = useState([...checkedArr]);
  const [checked2, setChecked2] = useState([...checkedArr]);

  const check = e => {
    let num = e.target.getAttribute('number');
    let index1, index2, arr;
    num1.map((val, idx) => {
      index1 = parseFloat(num) === parseFloat(val) ? idx : index1;
      return val;
    });
    num2.map((val, idx) => {
      index2 = parseFloat(num) === parseFloat(val) ? idx : index2;
      return val;
    });
    arr = [...checked1];
    arr[index1] = true;
    setChecked1(arr);
    arr = [...checked2];
    arr[index2] = true;
    setChecked2(arr);
  };

  return (
    <div id="main">
      <h1 id="title">Bingo</h1>
      <div className="container">
        <Bingo number={num1} checked={checked1} check={check}></Bingo>
        <Bingo number={num2} checked={checked2} check={check}></Bingo>
      </div>
    </div>
  );
};

export default App;
