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
      checked2: [...checkedArr],
      isPlaying1: true,
      isPlaying2: false,
      score1: 0,
      score2: 0
    };

    this.check = this.check.bind(this);
    this.resetNumber = this.resetNumber.bind(this);
    this.resetChecked = this.resetChecked.bind(this);
    this.checkWinner = this.checkWinner.bind(this);
  }

  check(num) {
    const index1 = this.state.num1.findIndex(
      val => parseInt(num) === parseInt(val)
    );
    const index2 = this.state.num2.findIndex(
      val => parseInt(num) === parseInt(val)
    );

    this.setState(prev => {
      return {
        checked1: [
          ...prev.checked1.slice(0, index1),
          true,
          ...prev.checked1.slice(index1 + 1)
        ],
        checked2: [
          ...prev.checked2.slice(0, index2),
          true,
          ...prev.checked2.slice(index2 + 1)
        ],
        isPlaying1: !prev.isPlaying1,
        isPlaying2: !prev.isPlaying2
      };
    }, this.checkWinner);
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
      checked2: [...checkedArr],
      isPlaying1: true,
      isPlaying2: false,
      score1: 0,
      score2: 0
    });
  }

  resetChecked() {
    const checkedArr = [];

    for (let i = 1; i <= 25; i++) {
      checkedArr.push(false);
    }
    this.setState({
      checked1: [...checkedArr],
      checked2: [...checkedArr],
      isPlaying1: true,
      isPlaying2: false,
      score1: 0,
      score2: 0
    });
  }

  checkWinner() {
    const { checked1, checked2 } = this.state;
    let count1 = 0;
    let count2 = 0;

    let diagonalTLDR1 = [];
    let diagonalTLDR2 = [];
    let diagonalTRDL1 = [];
    let diagonalTRDL2 = [];

    // Check horizontal
    for (let i = 0; i < 25; i += 5) {
      const horizontalRow1 = checked1.slice(i, i + 5);
      if (horizontalRow1.every(n => n === true)) {
        count1++;
      }
      const horizontalRow2 = checked2.slice(i, i + 5);
      if (horizontalRow2.every(n => n === true)) {
        count2++;
      }
    }

    // Check vertikal
    for (let i = 0; i < 5; i++) {
      let verticalColumn1 = [];
      let verticalColumn2 = [];
      for (let j = i; j < 25; j += 5) {
        verticalColumn1.push(checked1[j]);
        verticalColumn2.push(checked2[j]);
      }
      if (verticalColumn1.every(n => n === true)) {
        count1++;
      }
      if (verticalColumn2.every(n => n === true)) {
        count2++;
      }
    }

    // Check top-left down-right diagonal
    for (let i = 0; i < 25; i += 6) {
      diagonalTLDR1.push(checked1[i]);
      diagonalTLDR2.push(checked2[i]);
    }
    if (diagonalTLDR1.every(n => n === true)) {
      count1++;
    }
    if (diagonalTLDR2.every(n => n === true)) {
      count2++;
    }

    // Check top-right down-left diagonal
    for (let i = 4; i <= 20; i += 4) {
      diagonalTRDL1.push(checked1[i]);
      diagonalTRDL2.push(checked2[i]);
    }
    if (diagonalTRDL1.every(n => n === true)) {
      count1++;
    }
    if (diagonalTRDL2.every(n => n === true)) {
      count2++;
    }
    this.setState(() => {
      return {
        score1: count1,
        score2: count2
      };
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
        <div className="turn-info">
          Player {this.state.isPlaying1 ? '1' : '2'} turn
        </div>
        <div className="container">
          {this.state.count1}
          <Bingo
            isPlaying={this.state.isPlaying1}
            number={this.state.num1}
            checked={this.state.checked1}
            check={this.check}
          ></Bingo>
          <Bingo
            isPlaying={this.state.isPlaying2}
            number={this.state.num2}
            checked={this.state.checked2}
            check={this.check}
          ></Bingo>
          {this.state.count2}
        </div>
      </div>
    );
  }
}
