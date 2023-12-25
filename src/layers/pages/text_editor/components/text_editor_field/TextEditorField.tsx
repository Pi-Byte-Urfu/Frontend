import React, { FC } from 'react';
import { useEditorApi } from '../../context/context';
import style from './TextEditorField.module.scss';
import { Editor } from 'draft-js';
import { BLOCK_RENDER_MAP, CUSTOM_STYLE_MAP } from '../../config/config';

interface ITextEditorProps {
  styles: string[]
}
const TextEditorField:FC<ITextEditorProps> = ({styles}) => {
  const  { state, onChange }   = useEditorApi();
  const classNames = [style.textEditor, ...styles].join(' ')

  return (
    <div className={classNames}>
      <Editor
        placeholder='Введите ваш текст'
        editorState={state}
        onChange={onChange}
        blockRenderMap={BLOCK_RENDER_MAP}
        customStyleMap={CUSTOM_STYLE_MAP}
      />
    </div>
  );
};

export default TextEditorField;