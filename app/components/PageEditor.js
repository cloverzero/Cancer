import React, { Component } from 'react';
import { Editor } from 'draft-js';
import 'draft-js/dist/Draft.css';
import './PageEditor.css';
import { customStyleMap } from "../utils/custom-style-map";


export default class PageEditor extends Component {
  constructor(props) {
    super(props);

    this.focus = () => this.editor.focus();
  }

  render() {
    return (
      <div className="page-editor-root" onClick={this.focus}>
        <Editor customStyleMap={customStyleMap} editorState={this.props.editorState} onChange={this.props.onChange} ref={(ref) => this.editor = ref} />
      </div>
    );
  }
}

