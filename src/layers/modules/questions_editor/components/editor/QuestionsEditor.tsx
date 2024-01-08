import React, { FC, useState } from 'react';
import { QuestionMode } from '../../../../../types/QuestionMode';
import { IQuestion } from '../../types/IQuestion';
import style from './QuestionsEditor.module.scss';
import { Form, useFetcher } from 'react-router-dom';
import FormField from '../../../../components/form_field/FormField';
import Input from '../../../../ui/input/Input';
import { QuestionType } from '../../../../../types/QuestionType';
import formFieldStyle from '../../../../components/form_field/FormField.module.scss';

interface IQuestionsEditorProps {
  mode: QuestionMode,
  data?: IQuestion,
}

const QuestionsEditor:FC<IQuestionsEditorProps> = ({mode, data}) => {
  const fetcher = useFetcher();
  const [currentQuestionType, setCurrentQuestionType] = useState<null | QuestionType>(data == undefined ? null : data.questionType);

  
  return (
    <div className={style.question}>
      <fetcher.Form method='POST' action={mode}>
        <FormField textLabel='Введите вопрос' styles={[]}>
          <Input type='text' defaultValue={mode != QuestionMode.CREATE ? data?.name : ''} styles={[]}/>
        </FormField>
        <FormField textLabel='Одиночный выбор' styles={[formFieldStyle.defaultRadioColumn]}>
          <input type='radio' 
            name='questionType' 
            className={style.inputRadio} 
            defaultValue={QuestionType.single} 
            checked={currentQuestionType == QuestionType.single}
            onClick={() => setCurrentQuestionType(QuestionType.single)}
          />
        </FormField>
        <FormField textLabel='Множественный выбор' styles={[formFieldStyle.defaultRadioColumn]}>
          <input type='radio' 
            name='questionType' className={''} 
            defaultValue={QuestionType.multiple}
            checked={currentQuestionType == QuestionType.multiple}
            onClick={() => setCurrentQuestionType(QuestionType.multiple)}
          />
        </FormField>
        <FormField textLabel='Тест с вводом' styles={[formFieldStyle.defaultRadioColumn]}>
          <input type='radio' 
            name='questionType' 
            className={''} defaultValue={QuestionType.input}
            checked={currentQuestionType == QuestionType.input}
            onClick={() => setCurrentQuestionType(QuestionType.input)}
          />
        </FormField>
      </fetcher.Form>
      
    </div>
  );
};

export default QuestionsEditor;