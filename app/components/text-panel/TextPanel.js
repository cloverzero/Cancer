import './TextPanel.scss';

import React, { Component } from 'react';
import { RichUtils } from 'draft-js';
import { BlockPicker } from 'react-color';

import { Button, Layout, Select } from 'antd';

const ButtonGroup = Button.Group;
const { Header, Footer, Sider, Content } = Layout;


export default class TextPanel extends Component {

  state = {
    displayColorPicker: false,
    color: {
      r: '241',
      g: '112',
      b: '19',
      a: '1',
    },
  };

  toggleColorPicker = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  closeColorPicker = () => {
    this.setState({ displayColorPicker: false })
  };

  bold = () => {
    this.props.onChange(RichUtils.toggleInlineStyle(this.props.editorState, 'BOLD'));
  };

  render() {
    return (
      <div className="panel">
        <header>文本</header>
        <section className="panel-content">
          <ButtonGroup>
            <Button size="small"><i className="fa fa-align-left"/></Button>
            <Button size="small"><i className="fa fa-align-center"/></Button>
            <Button size="small"><i className="fa fa-align-right"/></Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button size="small" onClick={this.bold}><i className="fa fa-bold"/></Button>
            <Button size="small"><i className="fa fa-italic"/></Button>
            <Button size="small"><i className="fa fa-underline"/></Button>
          </ButtonGroup>

          <div>
            <ButtonGroup>
              <Button size="small"><i className="fa fa-link"/></Button>
              <Button size="small"><i className="fa fa-font"/></Button>
            </ButtonGroup>

            <div className="color-swatch" onClick={this.toggleColorPicker}><div style={{background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`}}></div></div>
            { this.state.displayColorPicker ? <div>
              <div/>
              <BlockPicker />
            </div> : null }

          </div>
        </section>
      </div>
    );
  }
}
