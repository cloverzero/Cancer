import { EDITOR_CHANGE } from '../actions/editor';
import { EditorState } from 'draft-js';


export default function counter(state = EditorState.createEmpty(), action) {
  switch (action.type) {
    case EDITOR_CHANGE:
      return action.editorState;
    default:
      return state;
  }
}
