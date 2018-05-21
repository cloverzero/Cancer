import React, { Component } from 'react';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';
import styles from './PageEditor.css';


export default class PageEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = (editorState) => this.setState({ editorState });
  }

  render() {
    return (
      <div className={styles["page-editor-root"]}>
        <Editor editorState={this.state.editorState} onChange={this.onChange}/>
      </div>
    );
  }
}

