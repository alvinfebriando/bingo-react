import React, { Component } from 'react';
import BingoNumber from './BingoNumber';

import './Bingo.css';

export default class Bingo extends Component {
  render() {
    const { number, checked, check } = this.props;
    return (
      <div>
        <div className="bingo">
          {number.map((val, idx) => {
            return (
              <BingoNumber
                number={val}
                checked={checked[idx]}
                check={check}
              ></BingoNumber>
            );
          })}
        </div>
      </div>
    );
  }
}
