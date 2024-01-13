import React, { FC, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { IStudentProgress } from '../types/IStudentProgress';
import style from './StudentProgressPage.module.scss';
import StudentsTasksList from '../../students_tasks_list/component/StudentsTasksList';
import { getCourse } from '../../../../course_page_editor/api/getCourse';
import { Link } from 'react-router-dom';
import ReturnButton from '../../../../../components/return_button/ReturnButton';

const StudentProgressPage: FC = () => {
  const { courseId, userId, groupId } = useParams();
  const progress = useLoaderData() as number;
  const bgc = progress < 40 ? 'rgba(217, 45, 32, 1)'
    : progress < 60 ? 'rgba(220, 104, 3, 1)' : 'rgba(3, 152, 85, 1)';
  const [courseName, setCourseName] = useState<string>();

  useEffect(() => {
    downloadCourseData();
  }, [courseId, userId])

  async function downloadCourseData() {
    if (courseId != undefined) {
      const response = getCourse(+courseId).then(res => {
        setCourseName(res.data.name);
      })
    }
  }
  return (
    <div className={style.progress}>
      <div className={[style.progressContainer, '_container'].join(' ')}>
          <h2 className={style.courseName}>
            {courseName}
          </h2>       
        <div className={style.content}>
          <div className={style.column}>
            <div className={style.header}>
              <h3 className={style.title}>
                Общий прогресс
              </h3>
            </div>
            <div className={style.progressLineTotal}>
              <div className={style.progressLineStudent} style={{ width: `${progress}%`, background: bgc }}>
                <div className={style.studentScoreCourse} style={{ background: bgc }}>
                  {progress}%
                </div>
              </div>
            </div>
            <div className={style.buttons}>
              <Link className={style.backToCourseBtn} to={`/course/${courseId}`}>
                Назад к курсу
              </Link>
            </div>
          </div>
          <div className={style.studentTasks}>
            <StudentsTasksList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProgressPage;