import React from 'react';

const BingoNumber = props => {
  let { number, checked } = props;
  return (
    <div number={number} checked={checked}>
      {number}
    </div>
  );
};

export default BingoNumber;
