import React, { Component } from 'react';
import Bingo from './Bingo';
import util from '../util/util';

export default class Game extends Component {
  constructor(props) {
    super(props);

    const numArr = [];
    const checkedArr = [];

    for (let i = 1; i <= 25; i++) {
      numArr.push(i);
      checkedArr.push(false);
    }

    this.state = {
      num1: util.shuffle(numArr),
      num2: util.shuffle(numArr),
      checked1: [...checkedArr],
      checked2: [...checkedArr]
    };

    this.check = this.check.bind(this);
    this.resetNumber = this.resetNumber.bind(this);
    this.resetChecked = this.resetChecked.bind(this);
  }

  check(num) {
    const index1 = this.state.num1.findIndex(
      val => parseInt(num) === parseInt(val)
    );
    const index2 = this.state.num2.findIndex(
      val => parseInt(num) === parseInt(val)
    );

    this.setState(() => {
      return {
        checked1: [
          ...this.state.checked1.slice(0, index1),
          true,
          ...this.state.checked1.slice(index1 + 1)
        ],
        checked2: [
          ...this.state.checked2.slice(0, index2),
          true,
          ...this.state.checked2.slice(index2 + 1)
        ]
      };
    });
  }

  resetNumber() {
    const numArr = [];
    const checkedArr = [];

    for (let i = 1; i <= 25; i++) {
      numArr.push(i);
      checkedArr.push(false);
    }
    this.setState({
      num1: util.shuffle(numArr),
      num2: util.shuffle(numArr),
      checked1: [...checkedArr],
      checked2: [...checkedArr]
    });
  }

  resetChecked() {
    const checkedArr = [];

    for (let i = 1; i <= 25; i++) {
      checkedArr.push(false);
    }
    this.setState({
      checked1: [...checkedArr],
      checked2: [...checkedArr]
    });
  }

  render() {
    return (
      <div id="main">
        <h1 id="title">Bingo</h1>
        <div className="reset">
          <button onClick={this.resetNumber}>Reset Number</button>
          <button onClick={this.resetChecked}>Clear Selection</button>
        </div>
        <div className="container">
          <Bingo
            number={this.state.num1}
            checked={this.state.checked1}
            check={this.check}
          ></Bingo>
          <Bingo
            number={this.state.num2}
            checked={this.state.checked2}
            check={this.check}
          ></Bingo>
        </div>
      </div>
    );
  }
}
