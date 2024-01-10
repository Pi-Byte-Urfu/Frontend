import React, { FC, useEffect, useState } from 'react';
import { useFetcher, useParams } from 'react-router-dom';
import { getStudentsTasks } from '../../../../teacher_rate/components/tasks_list/api/getStudentsTasks';
import { IStudentTaskItem } from '../../../../teacher_rate/components/tasks_list/types/IStudentTaskItem';
import { groupBy } from '../helpers/groupBy';
import style from './StudentsTasksList.module.scss';

const StudentsTasksList:FC = () => {
  const { courseId, userId } = useParams();
  const [tasks, setTasks] = useState<Object>();
  const fetcher = useFetcher();

  useEffect(() => {
    downloadTasks();
  }, [userId, courseId])

  async function downloadTasks() {
    if (courseId != undefined && userId != undefined) {
      const response = await getStudentsTasks(+courseId, +userId);

      if (response.status == 200) {
        setTasks(groupBy(response.data.answers, 'chapterName'));
      }
    }
  }
  return (
    <ul className={style.modulesList}>
      {
        tasks && (
          Object.entries(tasks).map(([key, value]) => (
            <li className={style.moduleNameItem} key={key}>
              <div className={style.moduleName}>
                {key}
              </div>
              <ul className={style.tasksList}>
                {
                  value.map((task: IStudentTaskItem) => (
                    <li key={task.pageId} className={style.studentTask}>
                      <div className={style.taskName}>
                        {task.pageName}
                      </div>
                      <div className={style.taskScore}>
                        {task.studentScore}/{task.maxScore}
                      </div>
                    </li>
                  ))
                }
              </ul>
            </li>
          ))
        )
      }
    </ul>
  );
};

export default StudentsTasksList;