import React, { Component } from 'react';
import { Editor } from 'draft-js';
import 'draft-js/dist/Draft.css';
import './PageEditor.css';


export default class PageEditor extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page-editor-root">
        <Editor editorState={this.props.editorState} onChange={this.props.onChange} />
      </div>
    );
  }
}

