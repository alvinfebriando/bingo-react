import React, { Component } from 'react';

import './BingoNumber.css';

class BingoNumber extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.props.isPlaying === true) {
      this.props.check(e.target.getAttribute('number'));
    }
  }
  render() {
    const { number, checked, isPlaying } = this.props;
    return (
      <div
        number={number}
        checked={checked}
        className={`number ${checked ? 'checked' : ''} ${
          isPlaying ? '' : 'not-playing'
        }`}
        onClick={this.handleClick}
      >
        {number}
      </div>
    );
  }
}

export default BingoNumber;
