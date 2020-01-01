import React from 'react';
import BingoNumber from './BingoNumber';

const Bingo = props => {
  let { number, checked, check } = props;
  return (
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
  );
};

export default Bingo;
