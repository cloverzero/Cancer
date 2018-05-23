// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as EditorActions from "../actions/editor";
import Home from '../components/Home';


function mapStateToProps(state) {
  return {
    editorState: state.editor
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: editorState => dispatch(EditorActions.change(editorState))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
