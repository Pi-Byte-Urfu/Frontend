import React, { FC } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import style from './TeacherRatePage.module.scss';
import { IGroupInfo } from '../../../../../modules/groups_list/types/IGroupInfo';

const TeacherRatePage:FC = () => {
  const { courseId, groupId } = useParams();
  const data = useLoaderData() as IGroupInfo;

  return (
    <div className={style.rate}>
      <ul>
        {
          data.students.length == 0 ? (
            <li className={style.emptyList}>
              В группе пока что нет ни одного ученика
            </li>
          )
          : 
          
          data.students.map((student) => (
            <li className={style.studentItem}>
              <div className={style.header}>
                <div className={style.studentPhoto}>
                  <img src={student.studentPhoto} alt='photo'/>
                </div>
                <div className={style.studentFullName}>
                  {`${student.studentSurname} ${student.studentName} ${student.studentPatronymic}`}
                </div>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default TeacherRatePage;