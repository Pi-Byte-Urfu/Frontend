import React, { FC, useEffect, useState } from 'react';
import { Form, useFetcher } from 'react-router-dom';
import { IBaseComponentProps } from '../../../../../types/IBaseComponentProps';
import rootStyles from '../page/ProfileEditor.module.scss';
import FormField from '../../../../components/form_field/FormField';
import Input from '../../../../ui/input/Input';
import Button from '../../../../ui/button/Button';
import formFieldStyles from '../../../../components/form_field/FormField.module.scss';
import { validateEmail } from '../../helpers/validation/validateEmail';
import { IProfileDataMain, IProfileDataResponse } from '../../types/IProfileDataResponse';

interface ITeacherFormProps {
  defaultData: IProfileDataResponse
};

const TeacherForm:FC<ITeacherFormProps>= ({defaultData}) => {
  const fetcher = useFetcher<IProfileDataMain>();
  const [data, setData] = useState<IProfileDataResponse>(defaultData);

  useEffect(() => {
    if (fetcher.data) {
      setData({...fetcher.data, email: defaultData.email} as IProfileDataResponse);
    }
  }, [fetcher]);

  return (
    <fetcher.Form method='POST' className={rootStyles.dataForm} action='editData'>
      <div className={rootStyles.formFields}>
        <FormField styles={[formFieldStyles.profileEditDataFormField, rootStyles.FormField]} textLabel='Имя'>
          <Input type='text' name='name' placeholder='Имя' 
          defaultValue={data.name} 
          styles={[rootStyles.input]}/>
        </FormField>
        <FormField styles={[formFieldStyles.profileEditDataFormField, rootStyles.FormField]} textLabel='Фамлия'>
          <Input type='text' name='surname' placeholder='Фамилия' styles={[rootStyles.input]}
            defaultValue={data.surname} 
          />
        </FormField>
        <FormField styles={[formFieldStyles.profileEditDataFormField, rootStyles.FormField]} textLabel='Отчество'>
          <Input type='text' name='patronymic' placeholder='Отчество' styles={[rootStyles.input]}
            defaultValue={data.patronymic}
          />
        </FormField>
        <FormField styles={[formFieldStyles.profileEditDataFormField, rootStyles.FormField]} textLabel='Email'>
          <Input type='text' styles={[rootStyles.input]} disabled={true}
            defaultValue={defaultData.email}
          />
        </FormField>
      </div>
      <div className={rootStyles.formButtons}>
        <Button styles={[rootStyles.dataSaveBtn]} type='submit'>
          Сохранить
        </Button>
      </div>
    </fetcher.Form>
  );
};

export default TeacherForm;