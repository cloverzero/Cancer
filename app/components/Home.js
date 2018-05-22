// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Layout, Select } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import './Home.css';
import PageEditor from "./PageEditor";

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
        <Layout className="container" data-tid="container">

          <Header className="title-bar">Cancer</Header>
          <Layout className="workbench">
            <Sider>sdfsfs</Sider>
            <Content className="playground">
              <div className="toolbar">
                <Select defaultValue="lucy" style={{ width: 120 }}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="disabled" disabled>Disabled</Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
              </div>
              <div className="editor-container">
                <PageEditor/>
              </div>
            </Content>
            <Sider>
              <Button type="primary">Test</Button>
              <Link to="/counter">to Counter</Link>
            </Sider>
          </Layout>
        </Layout>
    );
  }
}
