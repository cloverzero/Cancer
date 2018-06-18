// @flow
import './Home.scss';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Layout, Select } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

import PageEditor from "./PageEditor";
import TextPanel from "./text-panel/TextPanel";
import TextPanelContainer  from "../containers/TextPanelContainer";


export default class Home extends Component<Props> {



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
            {/*<TextPanel editorState={this.props.editorState} onChange={this.props.onChange} />*/}
            <TextPanelContainer/>
          </Sider>
        </Layout>
        <Footer className="status-bar">Success</Footer>
      </Layout>
    );
  }
}
