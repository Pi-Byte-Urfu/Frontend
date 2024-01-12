import React, { FC, useEffect, useState } from 'react';
import style from './CoursesListBindin.module.scss';
import { redirect, useFetcher, useNavigate, useParams } from 'react-router-dom';
import { ICourseItem } from '../../../../courses_list/types/ICourseItem';
import { bindCourse } from '../api/bindCourse';
import btnStyles from '../../../../../ui/button/Button.module.scss';
import { ICourseItemForGroup } from '../../courses_list/types/ICourseItemForGroup';

interface CoursesListBindinProps {
  setVisible: (currentVisivle: boolean) => void
  courses: ICourseItem[],
  setCourses: (courses: ICourseItem[]) => void,
  setCoursesForGroup: (courses: ICourseItemForGroup[]) => void,
  coursesForGroup: ICourseItemForGroup[]
}

const CoursesListBindin:FC <CoursesListBindinProps> = ({setVisible, courses, setCourses, setCoursesForGroup, coursesForGroup}) => {
  const { groupId, userId } = useParams();
  const [coursesId, setCoursesId] = useState<number[]>([]);
  const teacherId = Number(userId)
  useEffect(() => {
    
  }, [courses]);

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
            courses.filter(course => course.creatorId == teacherId).length != 0 ?
            (
              courses.filter(course => course.creatorId == teacherId).map((course) => (
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
                <div>
                  У вас нет курсов, которые вы бы могли привязать к этой группе
                </div>
              </div>
            )
          }
        </ul>
      </div>
      {
        courses.length != 0 && (
          <div className={style.buttons}>
            <button type='button' className={btnStyles.violetBtn}
              onClick={async() => {
                if (groupId != undefined) {
                  const response = await bindCourse(coursesId, +groupId).then((res) => {
                  const newCoursesForGroup = courses.filter(course => coursesId.includes(course.id)).map(course => course as any as ICourseItemForGroup)
                  setCoursesForGroup([...coursesForGroup, ...newCoursesForGroup])
                  setCourses(courses.filter(course => !coursesId.includes(course.id)))
                  setCoursesId([])
                  setVisible(false)
                  });
                }           
              }}
            >
              Привязать выбранные курсы
            </button>
          </div>          
        )
      }

    </div>
  );
};

export default CoursesListBindin;