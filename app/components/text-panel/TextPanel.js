import './TextPanel.scss';

import React, { Component } from 'react';
import { RichUtils } from 'draft-js';

import { Button, Layout, Select } from 'antd';
import ColorButton from "../color-button/ColorButton";

const ButtonGroup = Button.Group;

export default class TextPanel extends Component {

  changeStyle = e => {
    e.preventDefault();
    const style = e.target.dataset.style;
    this.props.onChange(RichUtils.toggleInlineStyle(this.props.editorState, style));
  };

  changeColor = color => {
    this.props.changeColor(this.props.editorState, color);
  };

  isToggledStyle = style => {
    if (this.props.style.has(style)) {
      return 'primary';
    } else {
      return '';
    }
  };

  render() {
    return (
      <div className="panel">
        <header>文本</header>
        <section className="panel-content">
          <div className="panel-row">
            <i className="iconfont icon-font-size" />
            <Select defaultValue={12} size="small">
              <Option value={12}>12</Option>
              <Option value={14}>14</Option>
              <Option value={16}>16</Option>
            </Select>

            <i className="iconfont icon-line-height" />
            <Select defaultValue={1.5} size="small">
              <Option value={1}>1倍</Option>
              <Option value={1.5}>1.5倍</Option>
              <Option value={2}>2倍</Option>
            </Select>
          </div>
          <div className="panel-row">
            <ButtonGroup>
              <Button size="small"><i className="iconfont icon-align-left"/></Button>
              <Button size="small"><i className="iconfont icon-align-center"/></Button>
              <Button size="small"><i className="iconfont icon-align-right"/></Button>
            </ButtonGroup>

            <ButtonGroup>
              <Button size="small" onMouseDown={this.changeStyle} type={this.isToggledStyle('BOLD')} data-style="BOLD"><i className="iconfont icon-bold"/></Button>
              <Button size="small" onMouseDown={this.changeStyle} type={this.isToggledStyle('ITALIC')} data-style="ITALIC"><i className="iconfont icon-italic"/></Button>
              <Button size="small" onMouseDown={this.changeStyle} type={this.isToggledStyle('UNDERLINE')} data-style="UNDERLINE"><i className="iconfont icon-underline"/></Button>
            </ButtonGroup>
          </div>

          <div className="panel-row">
            <ButtonGroup>
              <Button size="small"><i className="iconfont icon-font-colors"/></Button>
              <Button size="small"><i className="iconfont icon-link"/></Button>
            </ButtonGroup>

            <ColorButton onChange={this.changeColor} color={this.props.color} />

          </div>
        </section>
      </div>
    );
  }
}
