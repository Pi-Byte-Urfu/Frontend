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

  useEffect(() => {
    if (fetcher.state == 'idle') {
      fetcher.load(location.pathname);
    }
    
  }, [stepId])
  const formRef = useRef<HTMLFormElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const updateContentHandler = async (markdown: string) => 
  {
    if (stepId!= undefined) {
       await updateTask(+stepId, { content: markdown } as ITaskData) 
    }    
  };

  return (
    <div className={style.theory}>
      <fetcher.Form className={style.titleForm} id={'taskForm'}
        action='update'
        method='POST' ref={formRef} 
      >
        <Input styles={[style.titleInput]} 
          type='text' 
          name='name' 
          placeholder={"Измените имя step'a"}
          defaultValue={fetcher.data?.name}
          />
          <button type='submit' className={style.nameBtn} ref={btnRef} style={{color: 'black'}}>
            save
          </button>
      </fetcher.Form>
      <div className={style.maxScore}>
        <div className={style.maxScoreLabel}>
          Максимальное количество балло за задание: 
        </div>
        <Input styles={[style.maxScoreInput]}
          type='number'
          name='maxScore'
          defaultValue={fetcher.data?.maxScore}
          form='taskForm'
        />
      </div>
      <MDXEditorText defaultMarkdown={fetcher.data?.content ?? ''} actionPath={'update'} inputName={'content'}/>
    </div>
  );
};

export default TaskEditor;