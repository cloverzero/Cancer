import { colorStyleMap } from "../utils/custom-style-map";
import { RichUtils, Modifier, EditorState } from 'draft-js';

export const EDITOR_CHANGE = 'EDITOR_CHANGE';

export const change = editorState => ({
  type: EDITOR_CHANGE,
  editorState
});

export const changeColor = (editorState, color) => {
  const selection = editorState.getSelection();

  const nextContentState = Object.keys(colorStyleMap)
    .reduce((contentState, color) => {
      return Modifier.removeInlineStyle(contentState, selection, color)
    }, editorState.getCurrentContent());

  let nextEditorState = EditorState.push(
    editorState,
    nextContentState,
    'change-inline-style'
  );

  const currentStyle = editorState.getCurrentInlineStyle();

  // Unset style override for current color.
  if (selection.isCollapsed()) {
    nextEditorState = currentStyle.reduce((state, style) => {
      return RichUtils.toggleInlineStyle(state, style);
    }, nextEditorState);
  }

  // If the color is being toggled on, apply it.
  if (!currentStyle.has(color)) {
    nextEditorState = RichUtils.toggleInlineStyle(
      nextEditorState,
      color
    );
  }

  return change(nextEditorState);
};
