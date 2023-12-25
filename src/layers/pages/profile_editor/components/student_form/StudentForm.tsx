import React, { FC, useState } from 'react';
import { Form, useFetcher } from 'react-router-dom';
import { IBaseComponentProps } from '../../../../../types/IBaseComponentProps';
import rootStyles from '../page/ProfileEditor.module.scss';
import FormField from '../../../../components/form_field/FormField';
import Input from '../../../../ui/input/Input';
import Button from '../../../../ui/button/Button';
import formFieldStyles from '../../../../components/form_field/FormField.module.scss';
import { validateEmail } from '../../helpers/validation/validateEmail';
import { IProfileDataResponse } from '../../types/IProfileDataResponse';

interface IStudentFormProps {
  defaultData: IProfileDataResponse
}

const StudentForm:FC<IStudentFormProps>= ({defaultData}) => {
  const [formStatus, setFormStatus] = useState<boolean>(false);
  const fetcher = useFetcher<IProfileDataResponse>();

  return (
    <fetcher.Form method='PATCH' className={rootStyles.dataForm} action={'editData'}>
      <div className={rootStyles.formFields}>
        <FormField styles={[formFieldStyles.profileEditDataFormField, rootStyles.FormField]} textLabel='Имя'>
          <Input type='text' name='name' placeholder='Имя' 
          defaultValue={fetcher.data == null ? defaultData.name : fetcher.data.name} 
          styles={[rootStyles.input]}/>
        </FormField>
        <FormField styles={[formFieldStyles.profileEditDataFormField, rootStyles.FormField]} textLabel='Фамлия'>
          <Input type='text' name='surname' placeholder='Фамилия' styles={[rootStyles.input]}
            defaultValue={fetcher.data == null ? defaultData.surname : fetcher.data.surname} 
          />
        </FormField>
        <FormField styles={[formFieldStyles.profileEditDataFormField, rootStyles.FormField]} textLabel='Отчество'>
          <Input type='text' name='patronymic' placeholder='Отчество' styles={[rootStyles.input]}
            defaultValue={fetcher.data == null ? defaultData.patronymic: fetcher.data.patronymic}
          />
        </FormField>
        <FormField styles={[formFieldStyles.profileEditDataFormField, rootStyles.FormField]} textLabel='Email'>
          <Input type='email' name='email' placeholder='Почта' styles={[rootStyles.input]}
          defaultValue={fetcher.data == null ? defaultData.email : fetcher.data.email}
          disabled={false}
          />
        </FormField>
      </div>
      <div className={rootStyles.formButtons}>
        <Button styles={[rootStyles.dataSaveBtn]} type='button' disabled={!formStatus}>
          Сохранить
        </Button>
      </div>
    </fetcher.Form>
  );
};

export default StudentForm;