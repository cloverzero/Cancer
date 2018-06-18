import './TextPanel.scss';

import React, { Component } from 'react';
import { RichUtils } from 'draft-js';

import { Button, Layout, Select } from 'antd';
import ColorButton from "../color-button/ColorButton";

const ButtonGroup = Button.Group;

export default class TextPanel extends Component {

  bold = e => {
    e.preventDefault();
    this.props.onChange(RichUtils.toggleInlineStyle(this.props.editorState, 'BOLD'));
  };

  changeColor = color => {
    this.props.changeColor(this.props.editorState, color);
  };

  render() {
    return (
      <div className="panel">
        <header>文本</header>
        <section className="panel-content">
          <div>
            <ButtonGroup>
              <Button size="small"><i className="iconfont icon-align-left"/></Button>
              <Button size="small"><i className="iconfont icon-align-center"/></Button>
              <Button size="small"><i className="iconfont icon-align-right"/></Button>
            </ButtonGroup>

            <ButtonGroup>
              <Button size="small" onMouseDown={this.bold}><i className="iconfont icon-bold"/></Button>
              <Button size="small"><i className="iconfont icon-italic"/></Button>
              <Button size="small"><i className="iconfont icon-underline"/></Button>
            </ButtonGroup>
          </div>

          <div>
            <ButtonGroup>
              <Button size="small"><i className="iconfont icon-font-colors"/></Button>
              <Button size="small"><i className="iconfont icon-font-colors"/></Button>
            </ButtonGroup>

            <ColorButton onChange={this.changeColor} color={this.props.color} />

          </div>
        </section>
      </div>
    );
  }
}
