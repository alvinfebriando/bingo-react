import React from 'react';
import BingoNumber from './BingoNumber';

const Bingo = props => {
  let { number, checked } = props;
  return (
    <div className="bingo">
      {number.map(val => {
        return <BingoNumber number={val} checked={checked}></BingoNumber>;
      })}
    </div>
  );
};

export default Bingo;
