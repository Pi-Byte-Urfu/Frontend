import React, { FC } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import style from './TeacherRatePage.module.scss';
import { IGroupInfo } from '../../../../../modules/groups_list/types/IGroupInfo';
import Progress from '../../progress/component/Progress';
import { IGroupInfoItem } from '../../../../../modules/groups_list/types/IGrouInfoItem';
import TasksList from '../../tasks_list/component/TasksList';

const TeacherRatePage:FC = () => {
  const { courseId, groupId } = useParams();
  const data = useLoaderData() as IGroupInfoItem[];
  console.log(data)

  return (
    <div className={style.rate}>
      <div className={[style.container, '_container'].join(' ')}>
        <div className={style.rateHeader}>
          <h2 className={style.rateTitle}>
            Прогресс
          </h2>
        </div>
        <div className={style.rateContent}>
          <ul>
            {
              data.length == 0 ? (
                <li className={style.emptyList}>
                  В группе пока что нет ни одного ученика
                </li>
              )
              :
              
              data.map((student) => (
                <li className={style.studentItem} key={student.userId}>
                    <button type='button' className={style.spoilerBtn} onClick={(ev: any) => {
                      const target = ev.target;
                      if (!target.classList.contains(style.spoilerBtn)) {
                        return
                      }
                      target.classList.toggle(style.active);
                      let tasksList = target.parentElement.querySelector(`.${style.studentTasks}`);
                      tasksList.classList.toggle(style.hidden);
                    }}>
                    </button>
                  <div className={style.itemHeader}>
                    <div className={style.student}>
                      <div className={style.studentPhoto}>
                        <img src={student.studentPhoto} alt='photo'/>
                      </div>
                      <div className={style.studentFullName}>
                        {`${student.studentSurname} ${student.studentName} ${student.studentPatronymic}`}
                      </div>                  
                    </div>
                    <div className={style.studentProgress}>
                      <Progress studentId={student.userId}/>
                    </div>
                  </div>
                  <div className={[style.studentTasks, style.hidden].join(' ')}>
                    <TasksList userId={student.userId}/>
                  </div>
                </li>
              ))
            }
          </ul>             
        </div>
     
      </div>

    </div>
  );
};

export default TeacherRatePage;