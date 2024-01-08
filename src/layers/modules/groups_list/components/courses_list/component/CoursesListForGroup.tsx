import React, { FC, useEffect, useState } from 'react';
import { useFetcher, useParams } from 'react-router-dom';
import { ICourseItemForGroup } from '../types/ICourseItemForGroup';
import { getCoursesForGroup } from '../api/getCoursesForGroup';
import style from './CoursesListForGroup.module.scss';
import { Link } from 'react-router-dom';
import { Button } from '@mdxeditor/editor';
import { deleteCourse } from '../api/deleteCourse';
import { setgroups } from 'process';

const CoursesListForGroup: FC = () => {
  const { groupId } = useParams();
  const [courses, setCourses] = useState<ICourseItemForGroup[]>([]);
  let errorMessage: undefined | string = undefined;

  useEffect(() => {
    if (groupId != undefined) {
      fetchCourses(+groupId)
    }
  }, [groupId])

  async function fetchCourses(groupId: number) {
    const response = await getCoursesForGroup(groupId).then(
      res => setCourses(res.data.courseList)
    ).catch(
      err => errorMessage = err.response.data.error_message
    );
  }

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
                <Link to={''} className={style.overlayLink}>              
                  Посмотреть прогресс учеников
                </Link>
                <button type={'button'} className={style.overlayLink}
                  onClick={async() => {
                    if (groupId != undefined) {
                      await deleteCourse(+groupId, course.id).then(() => {
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