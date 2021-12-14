import React, { MouseEvent } from 'react';

interface Prop {
  mouseUp: (offsetX:number, offsetY:number) => void,
}

class Draggable extends React.Component<Prop>{
  onMouseUp = (e:MouseEvent<HTMLDivElement>) => {
    const offsetX = e.clientX;
    const offsetY = e.clientY;
    this.props.mouseUp(offsetX, offsetY);
  }

  render(){
    const container = {
      width: '100%',
      height: '100vh',
    }

    return (
      <div
        style={container}
        onMouseUp={this.onMouseUp}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Draggable;
