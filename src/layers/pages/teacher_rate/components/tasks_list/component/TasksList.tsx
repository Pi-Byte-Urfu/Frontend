import React, { FC, useEffect, useState } from 'react';
import style from './TasksList.module.scss';
import { useFetcher, useParams } from 'react-router-dom';
import { IStudentTaskItem } from '../types/IStudentTaskItem';
import { getStudentsTasks } from '../api/getStudentsTasks';
import { Link } from 'react-router-dom';
import DropDownMenu from '../../../../../ui/drop-down_menu/DropDownMenu';

interface ITasksListProps {
  userId: number
}

const TasksList:FC<ITasksListProps> = ({ userId }) => {
  const { courseId, groupId } = useParams();
  const [tasks, setTasks] = useState<IStudentTaskItem[]>([]);
  const fetcher = useFetcher();

  useEffect(() => {
    downloadTasks();
  }, [userId, groupId, courseId])

  async function downloadTasks() {
    if (courseId != undefined) {
      const response = await getStudentsTasks(+courseId, userId);

      if (response.status == 200) {
        setTasks(response.data.answers);
      }
    }
  }

  return (
    <ul className={style.list}>
      {
        tasks.map((task) => (
          <li className={style.item} key={task.pageId}>
            <div className={style.stepName}>
              <Link to={`/course/${courseId}/module/${task.chapterId}/step/2/${task.pageId}`} className={style.linkStep}>
                {`Глава ${task.chapterName}, Задание ${task.pageName}`}
              </Link>
            </div>
            <div className={style.itemRate}>
              <fetcher.Form action={`newRate/${task.pageId}/${userId}`} method='POST' className={style.form}>
                <input type='number' min={0} max={task.maxScore} className={style.scoreInput} name={'score'} defaultValue={task.studentScore}/>
                <button type='submit' className={style.submitBtn}>
                  <img src={require(`../../../../../../static/icons/upload-icon.png`)} alt="icon"/>
                </button>
              </fetcher.Form>
              <div className={style.itemRateMaxScore}>
                из {task.maxScore} баллов
              </div>
            </div>
            <div className={style.file}>
              <a href={`${task.fileUrl}`} className={style.fileLink} >
                скачать файл
              </a>
            </div>
          </li>
        ))
      }
    </ul>
  );
};

export default TasksList;