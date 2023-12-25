import { CompositeDecorator, EditorState, RichUtils } from 'draft-js';
import * as React from 'react';
import { BlockType, InlineStyle } from '../config/config';

export type EditorApi = {
  state: EditorState,
  onChange: (state: EditorState) => void,
  toggleBlockType: (blockType: BlockType) => void,
  currentBlockType: BlockType,
  toggleInlineStyle: (inlineStyle: InlineStyle) => void;
  hasInlineStyle: (inlineStyle: InlineStyle) => boolean
}

export const useEditor = (html?: string): EditorApi => {
  const [state, setState] = React.useState(() => EditorState.createEmpty());

  const toggleInlineStyle = React.useCallback((inlineStyle: InlineStyle) => {
    setState((currentState) => RichUtils.toggleInlineStyle(currentState, inlineStyle))
  }, []);

  const hasInlineStyle = React.useCallback((inlineStyle: InlineStyle) => {
    const currentStyle = state.getCurrentInlineStyle();

    return currentStyle.has(inlineStyle);
  }, [state])

  const toggleBlockType = React.useCallback((blockType: BlockType) => {
    setState((currentState) => RichUtils.toggleBlockType(currentState, blockType))
  }, []);

  const currentBlockType = React.useMemo(() => {
    const selection = state.getSelection();
    const content = state.getCurrentContent();
    const block = content.getBlockForKey(selection.getStartKey());

    return block.getType() as BlockType;
  }, [state]);

  return React.useMemo(() => ({
    state,
    onChange: setState,
    toggleBlockType,
    currentBlockType,
    toggleInlineStyle,
    hasInlineStyle,
  }), [state])
}