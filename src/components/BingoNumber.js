import React, { Component } from 'react';

import './BingoNumber.css';

class BingoNumber extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.props.isPlaying === true && this.props.selected === false) {
      this.props.select(e.target.getAttribute('number'));
    }
  }
  render() {
    const { number, selected, isPlaying } = this.props;
    return (
      <div
        number={number}
        selected={selected}
        className={`number ${selected ? 'selected' : ''} ${
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
