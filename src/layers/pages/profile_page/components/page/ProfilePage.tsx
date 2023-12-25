import React, { FC, useContext } from 'react';
import style from './ProfilePage.module.scss';
import { AuthContext } from '../../../../..';
import { observer } from 'mobx-react-lite';
import { UserType } from '../../../../../types/userType';
import StudentPageHeader from '../page_header/student/StudentPageHeader';
import TeacherPageHeader from '../page_header/teacher/TeacherPageHeader';
import { Outlet } from 'react-router-dom';

const ProfilePage:FC = observer(() => {
  const store = useContext(AuthContext);

  return (
    <section className={style.profile}>
      <div className={[style.profileContainer, '_container'].join(' ')}>
        { store.user?.userType == UserType.student ? <StudentPageHeader/> : <TeacherPageHeader/>}
        <div className={style.profilePage}>
          <Outlet/>
        </div>        
      </div>
    </section>
  );
});

export default ProfilePage;