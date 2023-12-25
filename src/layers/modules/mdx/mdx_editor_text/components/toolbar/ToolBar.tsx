import React, { FC } from 'react';
import { BlockTypeSelect, BoldItalicUnderlineToggles, CodeToggle, CreateLink, InsertFrontmatter, InsertImage, InsertTable, InsertThematicBreak, ListsToggle, MDXEditorMethods, UndoRedo } from '@mdxeditor/editor';
import style from './ToolBar.module.scss';
import YouTubeButton from '../YouTube/YouTubeButton';

interface IToolBarProps {
  markdown: string | undefined;
}

const ToolBar: FC<IToolBarProps> = ({markdown}) => {

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
      <InsertTable/>
      <div data-orientation="vertical" aria-orientation="vertical" role="separator"></div>
      <InsertThematicBreak/>      
    </div>
    <div className={style.toolBar_buttons}>
      <button className={style.toolbar_saveBtn}
        onClick={() => console.log(markdown)}
      >
        cохранить изменения
      </button>
    </div>
    </>
  );
};

export default ToolBar;