import React, { Component } from 'react';
import BingoNumber from './BingoNumber';

import './Bingo.css';

export default class Bingo extends Component {
  render() {
    const { number, checked, check, isPlaying } = this.props;
    return (
      <div className="bingo">
        {number.map((val, idx) => {
          return (
            <BingoNumber
              isPlaying={isPlaying}
              key={val}
              number={val}
              checked={checked[idx]}
              check={check}
            ></BingoNumber>
          );
        })}
      </div>
    );
  }
}
