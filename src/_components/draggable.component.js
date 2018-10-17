import React from 'react';
import './draggable.css';

//TODO: REMOVE AND USE REACT-DRAGGABLE instead https://www.npmjs.com/package/react-draggable

export default function Draggable(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.mouseX = Number();
      this.mouseY = Number();
      this.elementX = 0;
      this.elementY = 0;
      this.isMouseDown = false;
      this.element = React.createRef();
    }
    onMouseDown(event) {
      console.log('event', event);
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
      this.isMouseDown = true;
    }
    onMouseUp(event) {
      this.isMouseDown = false;
      this.elementX = parseInt(this.element.current.style.left) || 0;
      this.elementY = parseInt(this.element.current.style.top) || 0;
    }
    onMouseMove(event) {
      if (!this.isMouseDown) return;
      let deltaX = event.clientX - this.mouseX;
      let deltaY = event.clientY - this.mouseY;
      this.element.current.style.left = this.elementX + deltaX + 'px';
      this.element.current.style.top = this.elementY + deltaY + 'px';
    }
    render() {
      return (
        <div
          className="draggable"
          onMouseDown={e => this.onMouseDown(e)}
          onMouseUp={e => this.onMouseUp(e)}
          onMouseMove={e => this.onMouseMove(e)}
          ref={this.element}
        >
          <WrappedComponent />
        </div>
      );
    }
  };
}
