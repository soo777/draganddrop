import React, { CSSProperties } from "react";

interface Prop {
  offsetX: number,
  offsetY: number,
  mouseDownBool: boolean,
  mouseDown: (mouseDownBool:boolean) => void,
}

class Box extends React.Component<Prop>{
  onMouseDown = () => {
    this.props.mouseDown(true);
  }

  setTop = () => {
    const { offsetY } = this.props;

    if(offsetY < 50) {
      return 0;
    }
    return offsetY - 50;
  }

  setLeft = () => {
    const { offsetX } = this.props;

    if(offsetX < 50) {
      return 0;
    }
    return offsetX - 50;
  }

  render(){
    const box: CSSProperties = {
      position: 'absolute',
      width: '100px',
      height: '100px',
      background: '#f8ee03',
      top: this.setTop(),
      left: this.setLeft(),
      opacity: this.props.mouseDownBool ? '0.5' : '1',
    }

    return (
        <div
          style={box}
          onMouseDown={this.onMouseDown}
        />
    );
  }
}

export default Box;
