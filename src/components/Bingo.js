import React from 'react';
import BingoNumber from './BingoNumber';

const Bingo = props => {
  let { number, checked } = props;
  return (
    <div className="bingo">
      <BingoNumber number={number} checked={checked}></BingoNumber>
    </div>
  );
};

export default Bingo;
