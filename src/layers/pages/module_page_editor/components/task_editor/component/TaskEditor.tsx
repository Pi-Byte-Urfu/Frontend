import React, { FC, useEffect, useRef } from 'react';
import style from './TaskEditor.module.scss';
import { useFetcher, useLocation, useParams } from 'react-router-dom';
import Input from '../../../../../ui/input/Input';
import MDXEditorText from '../../../../../modules/mdx/mdx_editor_text/components/editor/MDXEditorText';
import { updateTask } from '../api/updateTask';
import { ITaskData } from '../types/ITaskData';

const TaskEditor:FC = () => {
  const { stepId } = useParams();
  const fetcher = useFetcher();
  const location = useLocation();
  const updateFethcer = useFetcher();

  useEffect(() => {
    if (fetcher.state == 'idle') {
      fetcher.load(location.pathname);
    }
    
  }, [stepId])
  const formRef = useRef<HTMLFormElement>(null);
  const submitBtnRef = useRef<HTMLButtonElement>(null);
  const updateContentHandler = async (markdown: string) => 
  {
    if (stepId!= undefined) {
       await updateTask(+stepId, { content: markdown } as ITaskData) 
    }    
  };

  return (
    <div className={style.task}>
      <updateFethcer.Form className={style.titleForm} id={'taskForm'}
        action='update'
        method='POST' ref={formRef} 
      >
        <input className={[style.titleInput].join(' ')} 
          type='text' 
          name='name' 
          placeholder={"Измените имя шага"}
          defaultValue={fetcher.data?.name}
          onChange={() => {
            if (submitBtnRef.current != null) {
              submitBtnRef.current.click();
            }
          }}
          />
          <button type='submit' className={style.saveChange} ref={submitBtnRef}>
            save
          </button>
      </updateFethcer.Form>
      <div className={style.maxScore}>
        <div className={style.maxScoreLabel}>
          Максимальное количество баллов за задание: 
        </div>
        <input className={style.maxScoreInput}
          type='number'
          name='maxScore'
          defaultValue={fetcher.data?.maxScore}
          form='taskForm'
          onChange={() => {
            if (submitBtnRef.current != null) {
              submitBtnRef.current.click();
            }
          }}
        />
      </div>
      <MDXEditorText defaultMarkdown={fetcher.data?.content ?? ''} actionPath={'update'} inputName={'content'}/>
    </div>
  );
};

export default TaskEditor;