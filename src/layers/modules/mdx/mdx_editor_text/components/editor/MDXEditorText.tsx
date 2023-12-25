import { BoldItalicUnderlineToggles, CreateLink, DialogButton, DirectiveDescriptor, GenericDirectiveEditor, InsertFrontmatter, KitchenSinkToolbar, MDXEditor, MDXEditorMethods, NestedLexicalEditor, UndoRedo, codeBlockPlugin, directivesPlugin, directivesPluginHooks, frontmatterPlugin, headingsPlugin, imagePlugin, jsxPlugin, linkDialogPlugin, linkPlugin, listsPlugin, quotePlugin, tablePlugin, thematicBreakPlugin, toolbarPlugin } from '@mdxeditor/editor';
import React, { FC, useCallback, useRef, useState } from 'react';
import './MDXEditorText.css';
import ToolBar from '../toolbar/ToolBar';
import './MDXEditorTextContent.css';
import { sendPhoto } from '../../api/sendMarkdown';
import { YouTubeComponentDescriptor } from '../YouTube/YouTubeComponentDescriptor';


async function imageUploadHandler(image: File) {
  const formData = new FormData()
  formData.append('image', image)
  const response = await sendPhoto(formData);
  return response?.url;
}

const MDXEditorText: FC = () => {
  const editor = useRef<MDXEditorMethods>(null)
  const [markdown, setMarkdown] = useState<string>();
  console.log(markdown)
  const renderToolbar = () => {
    return <ToolBar markdown={editor.current?.getMarkdown()}/>
  }

  return (
    <>
    <MDXEditor
      className='prose'
      markdown='' 
      onChange={(text) => setMarkdown(text)}
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
        tablePlugin(),
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