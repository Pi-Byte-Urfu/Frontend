import { BoldItalicUnderlineToggles, CreateLink, DialogButton, DirectiveDescriptor, GenericDirectiveEditor, InsertFrontmatter, KitchenSinkToolbar, MDXEditor, MDXEditorMethods, NestedLexicalEditor, UndoRedo, codeBlockPlugin, directivesPlugin, directivesPluginHooks, frontmatterPlugin, headingsPlugin, imagePlugin, jsxPlugin, linkDialogPlugin, linkPlugin, listsPlugin, quotePlugin, tablePlugin, thematicBreakPlugin, toolbarPlugin } from '@mdxeditor/editor';
import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './MDXEditorText.css';
import ToolBar from '../toolbar/ToolBar';
import './MDXEditorTextContent.css';
import { sendPhoto } from '../../api/sendMarkdown';
import { YouTubeComponentDescriptor } from '../YouTube/YouTubeComponentDescriptor';
import style from './MDXEditorText.module.scss';
import { update } from 'immutable';

async function imageUploadHandler(image: File) {
  const formData = new FormData()
  formData.append('image', image)
  const response = await sendPhoto(formData);
  return response?.url;
}

interface MDXEditorTextProps {
  defaultMarkdown: string,
  actionPath: string,
  inputName: string
}

const MDXEditorText: FC<MDXEditorTextProps> = ({defaultMarkdown, actionPath, inputName}) => {
  const editor = useRef<MDXEditorMethods>(null)
  const [markdown, setMarkdown] = useState<string>(defaultMarkdown);
  const renderToolbar = () => {
    return <ToolBar markdown={editor.current?.getMarkdown()} actionPath={actionPath} inputName={inputName}/>
  }

  useEffect(() => {
    if (editor.current != null) {
      editor.current.setMarkdown(defaultMarkdown)
    }
  }, [defaultMarkdown])
  return (
    <>
    <MDXEditor
      className={['prose', style.prose].join(' ')}
      contentEditableClassName='prose'
      markdown={defaultMarkdown} 
      onChange={(text) => {setMarkdown(text); console.log(text)}}
      ref={editor}
      plugins={
        [
        jsxPlugin({jsxComponentDescriptors: [YouTubeComponentDescriptor]}),
        headingsPlugin(), 
        listsPlugin(), 
        quotePlugin(), 
        thematicBreakPlugin(),
        linkPlugin(),
        linkDialogPlugin(),
        imagePlugin({
          imageUploadHandler: () => {
            return Promise.resolve('https://picsum.photos/200/300')
          },
          imageAutocompleteSuggestions: [
            'https://picsum.photos/200/300',
            'https://picsum.photos/200',
          ]
        }),
        frontmatterPlugin(),
        codeBlockPlugin({ defaultCodeBlockLanguage: 'txt' }),
        toolbarPlugin({
          toolbarContents: renderToolbar
        }),
      ]}
      />      
    </>
     
  );
};

export default MDXEditorText;