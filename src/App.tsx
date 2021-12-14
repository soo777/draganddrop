import React from 'react';
import Draggable from "./Draggable";
import Box from "./Box";

interface State {
  offsetX: number,
  offsetY: number,
  mouseDownBool: boolean,
}

class App extends React.Component{
  state:State = {
    offsetX: 300,
    offsetY: 300,
    mouseDownBool: false,
  }

  mouseDown = (mouseDownBool:boolean) => {
    this.setState({
      mouseDownBool,
    })
  }

  mouseUp = (offsetX:number, offsetY:number) => {
    if(!this.state.mouseDownBool){
      return;
    }

    this.setState({
      offsetX,
      offsetY,
      mouseDownBool: false,
    })
  }

  render(){
    return (
      <Draggable
        {...this.props}
        mouseUp={this.mouseUp}
      >
        <Box
          offsetX={this.state.offsetX}
          offsetY={this.state.offsetY}
          mouseDownBool={this.state.mouseDownBool}
          mouseDown={this.mouseDown}
        />
      </Draggable>
    );
  }
}

export default App;
