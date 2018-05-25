import './TextPanel.css';

import React, { Component } from 'react';
import { RichUtils } from 'draft-js';
import { CompactPicker } from 'react-color';

import { Button, Layout, Select } from 'antd';

const ButtonGroup = Button.Group;
const { Header, Footer, Sider, Content } = Layout;


export default class TextPanel extends Component {

  bold() {
    this.props.onChange(RichUtils.toggleInlineStyle(this.props.editorState, 'BOLD'));
  }

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
            <Button size="small" onClick={this.bold.bind(this)}><i className="fa fa-bold"/></Button>
            <Button size="small"><i className="fa fa-italic"/></Button>
            <Button size="small"><i className="fa fa-underline"/></Button>
          </ButtonGroup>

          <div>
            <ButtonGroup>
              <Button size="small"><i className="fa fa-link"/></Button>
              <Button size="small"><i className="fa fa-font"/></Button>
            </ButtonGroup>
            <CompactPicker />
          </div>
        </section>
      </div>
    );
  }
}
