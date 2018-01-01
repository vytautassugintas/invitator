import React, { Component } from "react";
import { render } from "react-dom";
import Konva from "konva";
import { Stage, Layer, Rect, Text } from "react-konva";

class ColoredRect extends React.Component {
  state = {
    color: "green"
  };

  handleClick = () => {
    this.setState({
      color: Konva.Util.getRandomColor()
    });
  };

  render() {
    return (
      <Rect
        x={20}
        y={20}
        width={50}
        height={50}
        fill={this.state.color}
        shadowBlur={5}
        onClick={this.handleClick}
      />
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text text="Konva rect test" />
          <ColoredRect />
        </Layer>
      </Stage>
    );
  }
}
