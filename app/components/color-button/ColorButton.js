import './ColorButton.scss';

import React, { Component } from "react";
import { BlockPicker } from 'react-color';
import { colorStyleMap } from "../../utils/custom-style-map";

export default class ColorButton extends Component {

  state = {
    displayColorPicker: false
  };

  toggleColorPicker = (e) => {
    e.preventDefault();
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  closeColorPicker = (e) => {
    if (e) {
      e.preventDefault();
    }
    this.setState({ displayColorPicker: false })
  };

  changeColor = (color, e) => {
    e.preventDefault();
    this.closeColorPicker(e);
    const result = Object.entries(colorStyleMap).filter(entry => entry[1].color === color.hex);
    if (result.length > 0) {
      this.props.onChange(result[0][0]);
    }
  };

  render() {
    let color = '#222222';
    let currentColorEntry = colorStyleMap[this.props.color];
    if (currentColorEntry) {
      color = currentColorEntry.color;
    }
    return (
      <div className="color-button">
        <div className="color-swatch" onMouseDown={this.toggleColorPicker}>
          <div
            style={{ background: color }}/>
        </div>
        {this.state.displayColorPicker ? <div className="color-picker-cnt" onMouseDown={e => e.preventDefault()}>
          <div className="popup-cover" onMouseDown={this.closeColorPicker}/>
          <BlockPicker color={color} colors={Object.values(colorStyleMap).map(item => item.color)} onChange={this.changeColor}/>
        </div> : null}
      </div>
    );
  }
}
