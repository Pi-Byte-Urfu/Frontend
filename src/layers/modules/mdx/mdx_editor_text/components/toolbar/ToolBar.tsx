import React, { FC, useRef } from 'react';
import { BlockTypeSelect, BoldItalicUnderlineToggles, CodeToggle, CreateLink, InsertFrontmatter, InsertImage, InsertTable, InsertThematicBreak, ListsToggle, MDXEditorMethods, UndoRedo } from '@mdxeditor/editor';
import style from './ToolBar.module.scss';
import YouTubeButton from '../YouTube/YouTubeButton';
import { update } from 'immutable';
import { useFetcher, useSubmit } from 'react-router-dom';
import btnStyles from '../../../../../ui/button/Button.module.scss';

interface IToolBarProps {
  markdown: string | undefined;
  actionPath: string,
  inputName: string
}

const ToolBar: FC<IToolBarProps> = ({markdown, actionPath, inputName}) => {
  const fetcher = useFetcher();
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLFormElement>(null)
  const submit = useSubmit();

  return (
    <>
    <div style={{display: 'flex'}}>
      <UndoRedo />
      <div data-orientation="vertical" aria-orientation="vertical" role="separator"></div>
      <BoldItalicUnderlineToggles/>
      <div data-orientation="vertical" aria-orientation="vertical" role="separator"></div>
      <CodeToggle/>
      <div data-orientation="vertical" aria-orientation="vertical" role="separator"></div>
      <ListsToggle/>
      <div data-orientation="vertical" aria-orientation="vertical" role="separator"></div>
      <BlockTypeSelect/>
      <div data-orientation="vertical" aria-orientation="vertical" role="separator"></div>
      <CreateLink/>
      <InsertImage/>
      <YouTubeButton/>
      <div data-orientation="vertical" aria-orientation="vertical" role="separator"></div>
      <InsertThematicBreak/>      
    </div>
    <div className={style.toolBar_buttons}>
      <fetcher.Form action={actionPath} method="POST" ref={formRef}>
        <textarea name={inputName} ref={inputRef} className={style.input}/>
        <button type='submit' className={btnStyles.blackBtn}
          onClick={() => {
            if (inputRef.current != null) {
              inputRef.current.value = markdown ?? ''
            }
          }}
        >
          cохранить изменения
        </button>
      </fetcher.Form>
    </div>
    </>
  );
};

export default ToolBar;