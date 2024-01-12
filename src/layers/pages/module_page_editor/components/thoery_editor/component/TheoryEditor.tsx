import React, { ChangeEvent, useCallback, useEffect, useRef } from 'react';
import { useFetcher, useLoaderData, useLocation, useParams } from 'react-router-dom';
import { ITheoryData } from '../../../types/ITheoryData';
import style from './TheoryEditor.module.scss';
import { updateTheory } from '../api/updateTheory';
import Input from '../../../../../ui/input/Input';
import MDXEditorText from '../../../../../modules/mdx/mdx_editor_text/components/editor/MDXEditorText';

const TheoryEditor = () => {
  const { stepId } = useParams(); 
  const fetcher = useFetcher<ITheoryData>();
  const location = useLocation();
  const submitBtnRef = useRef<HTMLButtonElement>(null);
  const updateFethcer = useFetcher<ITheoryData>();

  useEffect(() => {
    if (fetcher.state == 'idle') {
      fetcher.load(location.pathname);
    }
    
  }, [stepId]);

  const formRef = useRef<HTMLFormElement>(null);
  const updateContentHandler = async (markdown: string) => 
  {
    if (stepId!= undefined) {
       await updateTheory(+stepId, { content: markdown} as ITheoryData) 
    }    
  };
  

  return (
    <div className={style.theory}>
      <updateFethcer.Form className={style.titleForm} 
        action='update'
        method='POST' ref={formRef} 
      >
        <input className={style.titleInput} 
          type='text' 
          name='name' 
          placeholder={"Измените имя step'a"}
          defaultValue={fetcher.data?.name}
          onChange={() => {
            if (submitBtnRef.current != null) {
              submitBtnRef.current.click();
            }
          }}
          />
          <button type='submit' className={style.saveChange} ref={submitBtnRef} style={{color: 'black'}}>
            save
          </button>
      </updateFethcer.Form>
      <MDXEditorText defaultMarkdown={fetcher.data?.content ?? ''} actionPath={'update'} inputName={'content'}/>
    </div>
  );
};

export default TheoryEditor;