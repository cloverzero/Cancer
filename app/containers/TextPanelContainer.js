// @flow
import React from 'react';
import { connect } from 'react-redux';
import * as EditorActions from "../actions/editor";
import TextPanel from '../components/text-panel/TextPanel';
import { colorStyleMap } from "../utils/custom-style-map";


function mapStateToProps(state) {
  const currentStyle = state.editor.getCurrentInlineStyle();
  const colorArray = Object.keys(colorStyleMap).filter(color => currentStyle.has(color));
  return {
    color: colorArray[0],
    editorState: state.editor
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: editorState => dispatch(EditorActions.change(editorState)),
    changeColor: (editorState, color) => dispatch(EditorActions.changeColor(editorState, color))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TextPanel);
