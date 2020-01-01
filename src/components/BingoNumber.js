import React from 'react';

const BingoNumber = props => {
  let { number, checked, check } = props;
  return (
    <div
      number={number}
      checked={checked}
      className={`number ${checked ? 'checked' : ''}`}
      onClick={check}
    >
      {number}
    </div>
  );
};

export default BingoNumber;
