import React, { Component } from 'react';
import './Info.css';

export default class Info extends Component {
  render() {
    return (
      <div className="Info">
        <div>
          <p className="Info-player-data">{this.props.name}</p>
          <p className="Info-player-data">Score: {this.props.score}</p>
        </div>
      </div>
    );
  }
}
