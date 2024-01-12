import { MDXEditor, MDXEditorMethods, codeBlockPlugin, frontmatterPlugin, headingsPlugin, imagePlugin, jsxPlugin, linkDialogPlugin, linkPlugin, listsPlugin, quotePlugin, tablePlugin, thematicBreakPlugin } from '@mdxeditor/editor';
import React, { FC, useEffect, useRef } from 'react';
import style from './MDXContent.module.scss';
import { YouTubeComponentDescriptor } from '../../../mdx_editor_text/components/YouTube/YouTubeComponentDescriptor';

interface IMDXContentProps {
  defaultMarkdown: string
}

const MDXContent:FC<IMDXContentProps> = ({defaultMarkdown}) => {
  const editor = useRef<MDXEditorMethods>(null)

  useEffect(() => {
    if (editor.current != null) {
      editor.current.setMarkdown(defaultMarkdown)
    }
  }, [defaultMarkdown])

  return (
    <>
      <MDXEditor
        autoFocus={false}
        contentEditableClassName='prose'
        className={['prose', style.prose].join(' ')}
        markdown={defaultMarkdown}
        onChange={(text: string) => {
          editor.current?.setMarkdown(defaultMarkdown)
        }}
        ref={editor}
        plugins={
          [
          jsxPlugin({jsxComponentDescriptors: [YouTubeComponentDescriptor]}),
          headingsPlugin(), 
          listsPlugin(), 
          quotePlugin(), 
          linkDialogPlugin(),
          thematicBreakPlugin(),
          linkPlugin(),
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
        ]}
      />
    </>
  );
};

export default MDXContent;