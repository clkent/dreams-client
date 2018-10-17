import React from 'react';
import Draggable from './draggable.component';

class Calendar extends React.Component {
  render() {
    const style = {
      width: '100px',
      height: '100px',
      background: 'grey',
      border: '1px solid black'
    };
    return <div style={style}>I am the calendar</div>;
  }
}

export default Draggable(Calendar);
