import React, { FC, useContext } from 'react';
import style from './ProfileEditor.module.scss';
import ChangePassword from '../change_password/ChangePassword';
import { AuthContext } from '../../../../..';
import { UserType } from '../../../../../types/userType';
import StudentForm from '../student_form/StudentForm';
import TeacherForm from '../teacher_form/TeacherForm';
import UploaderImg from '../../../../components/uploader_img/components/UploaderImg';
import { useLoaderData } from 'react-router-dom';
import { IProfileDataResponse } from '../../types/IProfileDataResponse';

const ProfileEditor:FC = () => {
  const store = useContext(AuthContext);
  const userData = useLoaderData() as IProfileDataResponse;
  return (
    <section className={style.profile}>
      <div className={style.profileContaier}>
        <div className={style.data}>
          <h2 className={style.sectionHeader}>
            Личные данные
          </h2>
          <div className={style.dataBody}>
          <UploaderImg 
            accept='image/*' 
            photoAlt='avatar' 
            targetPath={userData.photoUrl} 
            styles={[style.uploadAvatar]}
          />
          {
            store.user?.userType == UserType.student ? <StudentForm defaultData={userData}/> : <TeacherForm defaultData={userData}/>
          }
          </div>
        </div>
        <div className={style.changePassword}>
          <h2 className={style.sectionHeader}>
            Сменить пароль
          </h2>
          <div className={style.changeBody}>
            <ChangePassword/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileEditor;