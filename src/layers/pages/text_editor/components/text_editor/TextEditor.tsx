import React from 'react';
import { TextEditorProvider } from '../../context/context';
import ToolPanel from '../tool_panel/ToolPanel';
import TextEditorField from '../text_editor_field/TextEditorField';
import style from './TextEditor.module.scss';

const TextEditor = () => {
  return (
    <TextEditorProvider>
      <div className={style.page}>
        <ToolPanel styles={['Заглушка']}/>
        <TextEditorField styles={['Заглушка']}/>        
      </div>
    </TextEditorProvider>
  );
};

export default TextEditor;