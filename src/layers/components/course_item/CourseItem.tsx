import React, { FC } from 'react';
import style from './CourseItem.module.scss';
import { Link } from 'react-router-dom';
import Button from '../../ui/button/Button';

interface ICourseItemProps {
  id: number,
  title: string,
  coverURL: string
}

const CourseItem: FC<ICourseItemProps> = ({id, title, coverURL}) => {
  return (
    <li className={style.course}>
      <Link to={`/course/${id}`} onClick={ev => console.log('click')}>
        <img className={style.courseCover} src={coverURL} alt='f' />
        <div className={style.itemOverlay}>
          <Button type="button" styles={[style.removeBtn]} onClick={ev => {
            ev.stopPropagation();
            ev.preventDefault();
          }}
          >
            <img src={require("./img/trash-icon.svg").default} />
          </Button>
          <h3 className={style.courseTitle}>
            {title}
          </h3>
        </div>
      </Link>
    </li>
  );
};

export default CourseItem;