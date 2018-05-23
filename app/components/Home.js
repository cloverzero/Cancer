// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Layout, Select } from 'antd';

import { RichUtils } from 'draft-js';

const ButtonGroup = Button.Group;
const { Header, Footer, Sider, Content } = Layout;
import './Home.scss';
import PageEditor from "./PageEditor";


export default class Home extends Component<Props> {

  bold() {
    console.log('!!!');
    console.log(this);
    this.props.onChange(RichUtils.toggleInlineStyle(this.props.editorState, 'BOLD'));
  }

  render() {
    return (
      <Layout className="container" data-tid="container">

        <Header className="title-bar">Cancer</Header>
        <Layout className="workbench">
          <Sider>sdfsfs</Sider>
          <Content className="playground">
            <div className="toolbar">
              <Select defaultValue="lucy" style={{ width: 120 }} size="small">
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>Disabled</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </div>
            <div className="editor-container">
              <PageEditor editorState={this.props.editorState} onChange={this.props.onChange} />
            </div>
          </Content>
          <Sider width={250}>
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
                </div>
              </section>
            </div>

          </Sider>
        </Layout>
      </Layout>
    );
  }
}
