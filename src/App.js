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

const App = () => {
  const [num1, setNum1] = useState(Util.shuffle(numArr));
  const [num2, setNum2] = useState(Util.shuffle(numArr));
  return (
    <div id="main">
      <h1>Hello World</h1>
      <Bingo number={num1}></Bingo>
      <Bingo number={num2}></Bingo>
    </div>
  );
};

export default App;
