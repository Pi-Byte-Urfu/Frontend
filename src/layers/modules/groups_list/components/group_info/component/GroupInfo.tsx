import React, { FC, useEffect, useState } from 'react';
import { useFetcher, useLocation, useParams } from 'react-router-dom';
import { IGroupInfoItem } from '../../../types/IGrouInfoItem';
import style from './GroupInfo.module.scss';
import { $api } from '../../../../../../http';
import RemoveButton from '../../../../../components/remove_btn/component/RemoveButton';
import Button from '../../../../../ui/button/Button';
import btnStyles from '../../../../../ui/button/Button.module.scss';
import Modal from '../../../../../ui/modal/Modal';
import CoursesListBindin from '../../courses_list_bindin/component/CoursesListBindin';
import CoursesListForGroup from '../../courses_list/component/CoursesListForGroup';
import { ICourseItem } from '../../../../courses_list/types/ICourseItem';
import { getCoursesForGroup } from '../../courses_list/api/getCoursesForGroup';
import { ICourseItemForGroup } from '../../courses_list/types/ICourseItemForGroup';
import { group } from 'console';

const GroupInfo:FC = () => {
  const { groupId, userId } = useParams();
  const fetcher = useFetcher<IGroupInfoItem[]>();
  const [students, setStudents] = useState<IGroupInfoItem[]>([])
  const location = useLocation();
  const [newCourseId, setNewCourseId] = useState<number>();
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const coursesBindinFetcher = useFetcher<ICourseItem[]>();
  const [coursesBindin, setCoursesBindin] = useState<ICourseItem[]>([]);
  const [coursesForGroup, setCoursesForGroup] = useState<ICourseItemForGroup[]>([]);
    
  useEffect(() => {
    if (fetcher.state == 'idle' && groupId != null && userId != null) {
      fetcher.load(`${location.pathname}`)
      coursesBindinFetcher.load(`/bindinCoursesForGroup/${groupId}`);
      fetchCourses(+groupId)
    }

    return () => {
      setVisibleModal(false);
    }
  }, [groupId]);

  useEffect(() => {
    setStudents(fetcher.data ?? [])
  }, [fetcher])

  useEffect(() => {
    // убрать потом перменную
    const newBindingCourses = coursesBindinFetcher.data ? coursesBindinFetcher.data.filter(course => !coursesForGroup
      .map(groupCourse => groupCourse.id).includes(course.id))
      : []
      ;
    setCoursesBindin(coursesBindinFetcher.data ?? []);
  }, [coursesBindinFetcher]);

  async function fetchCourses(groupId: number) {
    const response = await getCoursesForGroup(groupId).then(
      res => { setCoursesForGroup(res.data.courseList);}
    );
  }

  return (
    <div className={style.info}>
      <Modal visible={visibleModal} setVisible={setVisibleModal}>
        <CoursesListBindin setVisible={setVisibleModal} courses={coursesBindin} setCourses={setCoursesBindin}
          coursesForGroup={coursesForGroup}
          setCoursesForGroup={setCoursesForGroup}
        />
      </Modal>
      <div className={style.header}>
        <p className={style.linkConnect}>
          Ссылка для подключения к группе: http://5.23.54.98/groups/connect/{groupId}
        </p>
        <Button type='button' styles={[btnStyles.violetBtn]}
          onClick={() => {
            setVisibleModal(true);
          }}
        >
          Привязать курсы
        </Button>
      </div>
      <div className={style.body}>
        <h3 className={style.columnName}>
          Ученики группы
        </h3>
        <h3 className={style.columnName}>
          Привязанные курсы
        </h3>
          <div className={style.studentsList}>
            <ul className={style.studentsListContainer}>
              {students.length == 0 
                ? <div className={style.emptyList}>
                  В группе пока что нет ни одного ученика
                </div>
                : (
                  students.map(info => (
                    <li className={style.studentItem} key={info.studentId}>
                        <div className={style.studentPhoto}>
                          <img src={info.studentPhoto} alt='photo' className={style.avatar}/>
                        </div>
                        <div className={style.itemContent}>
                          {`${info.studentSurname} ${info.studentName} ${info.studentPatronymic}`} 
                        </div>                  
                    </li> 
                  ))
                )    
                }
            </ul>            
          </div>
          <div className={style.coursesList}>
            <CoursesListForGroup courses={coursesForGroup} setCourses={setCoursesForGroup} coursesBindin={coursesBindin} setCoursesBinding={setCoursesBindin}/>
          </div>
      </div>
    </div>
  );
};

export default GroupInfo;