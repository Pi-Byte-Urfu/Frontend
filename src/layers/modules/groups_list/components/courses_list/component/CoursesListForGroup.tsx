import React, { FC, useEffect, useState } from 'react';
import { useFetcher, useParams } from 'react-router-dom';
import { ICourseItemForGroup } from '../types/ICourseItemForGroup';
import { getCoursesForGroup } from '../api/getCoursesForGroup';
import style from './CoursesListForGroup.module.scss';
import { Link } from 'react-router-dom';
import { Button } from '@mdxeditor/editor';
import { deleteCourse } from '../api/deleteCourse';
import { setgroups } from 'process';
import { ICourseItem } from '../../../../courses_list/types/ICourseItem';

interface CoursesListForGroupProps {
  courses: ICourseItemForGroup[],
  setCourses: (course: ICourseItemForGroup[]) => void,
  coursesBindin: ICourseItem[],
  setCoursesBinding: (courses: ICourseItem[]) => void
}

const CoursesListForGroup: FC<CoursesListForGroupProps> = ({ courses, setCourses, coursesBindin, setCoursesBinding }) => {
  const { groupId } = useParams();
  let errorMessage: undefined | string = undefined;
  
  return (
    <ul className={style.coursesList}>
      {
        courses.length == 0 ? (
          <li key={0} className={style.message}>
            К этой группе пока не привязан ни один курс
          </li>
        )
          :
          courses.map(course => (
            <li className={style.item} key={course.id}>
              <div className={style.courseCover}>
                <img src={course.coursePhoto} alt='photo'/>
              </div>
              <div className={style.courseName}>
                {course.name}
              </div>
              <div className={style.itemOverlay}>
                <Link to={`/teacherRate/groups/${groupId}/courses/${course.id}`} className={style.overlayLink}>              
                  Посмотреть прогресс учеников
                </Link>
                <button type={'button'} className={style.overlayLink}
                  onClick={async() => {
                    if (groupId != undefined) {
                      await deleteCourse(+groupId, course.id).then(() => {
                        setCoursesBinding([...coursesBindin, ...courses.filter(item => item.id == course.id).map(item => item as any as ICourseItem)])
                        setCourses(courses.filter(item => item.id != course.id))
                      })
                    }
                    
                  }}
                >
                  Отвязать курс
                </button>
              </div>
            </li>))
      }
    </ul>
  );
};

export default CoursesListForGroup;