import React, { FC, useEffect } from 'react';
import style from './Task.module.scss';
import { useFetcher, useLocation, useParams } from 'react-router-dom';
import { ITaskData } from '../../../../module_page_editor/components/task_editor/types/ITaskData';
import MDXContent from '../../../../../modules/mdx/mdx_content/components/content/MDXContent';
import { store } from '../../../../../..';
import { UserType } from '../../../../../../types/userType';
import FileUploader from '../../../../../components/file_uploader/FileUploader';

const Task:FC = () => {
  const { stepId } = useParams();
  const fetcher = useFetcher<ITaskData>();
  const location = useLocation();

  useEffect(() => {
    if (fetcher.state == 'idle' && stepId != undefined) {
      fetcher.load(location.pathname)
    }
  }, [stepId]);

  return (
    <div className={style.theory}>
      <h2 className={style.theoryName}>
        {fetcher.data?.name}
      </h2>
      <MDXContent defaultMarkdown={fetcher.data?.content ?? ''}/>
      {
        store.user?.userType == UserType.student && (
        <div className={style.fileUploader}>
          <div className={style.fileHeader}>
            Загрузите файл для задания
          </div>
          <FileUploader targetPath={`progress/answer/${stepId}`}/>
        </div>          
        )
      }

    </div>
  );
};

export default Task;