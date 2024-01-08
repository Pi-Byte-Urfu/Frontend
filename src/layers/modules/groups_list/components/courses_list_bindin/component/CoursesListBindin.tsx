import React, { FC, useEffect, useState } from 'react';
import style from './CoursesListBindin.module.scss';
import { useFetcher, useParams } from 'react-router-dom';
import { ICourseItem } from '../../../../courses_list/types/ICourseItem';
import { bindCourse } from '../api/bindCourse';
import btnStyles from '../../../../../ui/button/Button.module.scss';

interface CoursesListBindinProps {
  setVisible: (currentVisivle: boolean) => void
}

const CoursesListBindin:FC <CoursesListBindinProps> = ({setVisible}) => {
  const fetcher = useFetcher<ICourseItem[]>();
  const { groupId, userId } = useParams();
  const [coursesId, setCoursesId] = useState<number[]>([])

  useEffect(() => {
    if (fetcher.state == 'idle' && userId != undefined && groupId != undefined) {
      fetcher.load(`/profile/${userId}/courses`);
    }
  }, [groupId]);

  console.log(coursesId)
  function toggleCourseId(courseId: number) {
    for (let id of coursesId) {
      if (courseId == id) {
        setCoursesId(coursesId.filter((elem) => elem != courseId))
        return;
      }
    }

    setCoursesId([...coursesId, courseId])
  };

  return (
    <div className={style.choiceCourses}>
      <div className={style.header}>
        <h3 className={style.title}>
          Ваши курсы
        </h3>
      </div>
      <div className={style.content}>
        <ul className={style.list}>
          {
            fetcher.data != undefined ?
            (
              fetcher.data.map((course) => (
                <li className={style.item} onClick={(ev: any) => {
                  const item:any = document.querySelector(`[data-courseid='${course.id}']`)
                  item?.classList.toggle(style.activeItem)
                  toggleCourseId(+item?.getAttribute('data-courseid'));
                }} key={course.id} data-courseid={`${course.id}`}>
                  <div className={style.courseCover}>
                    <img src={course.coursePhoto} alt='photo'/>
                  </div>
                  <div className={style.courseName}>
                    {course.name}
                  </div>
                </li>
              ))
            )
            : (
              <div className={style.message}>
                У вас пока нет ни одного курса
              </div>
            )
          }
        </ul>
      </div>
      <div className={style.buttons}>
        <button type='button' className={btnStyles.violetBtn}
          onClick={async() => {
            if (groupId != undefined) {
              const response = await bindCourse(coursesId, +groupId).then(() => {
               
              });
            }           
          }}
        >
          Привязать выбранные курсы
        </button>
      </div>
    </div>
  );
};

export default CoursesListBindin;