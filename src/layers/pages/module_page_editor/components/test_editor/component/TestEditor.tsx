import React, { FC, useEffect, useRef, useState } from 'react';
import { useFetcher, useLoaderData, useLocation, useParams } from 'react-router-dom';
import { IQuestion } from '../../../../../modules/questions_editor/types/IQuestion';
import { ITestData } from '../types/ITestData';
import style from './TestEditor.module.scss';
import Input from '../../../../../ui/input/Input';
import QuestionsEditor from '../../../../../modules/questions_editor/components/editor/QuestionsEditor';
import { QuestionMode } from '../../../../../../types/QuestionMode';
import Modal from '../../../../../ui/modal/Modal';
import Button from '../../../../../ui/button/Button';

const TestEditor: FC = () => {
  const { stepId } = useParams();
  const fetcher = useFetcher<ITestData>();
  const location = useLocation();
  useEffect(() => {
    if (fetcher.state == 'idle' && stepId != undefined) {
      fetcher.load(location.pathname)
    }
  }, [stepId])

  const btnRef = useRef<HTMLButtonElement>(null);
  const [newQuestionVisible, setNewQuestionVisible] = useState<boolean>(false);

  return (
    <div className={style.test}>
      <fetcher.Form className={style.titleForm}
        action='update'
        method='POST'
      >
        <Input styles={[style.titleInput]}
          type='text'
          name='name'
          placeholder={"Измените имя step'a"}
          defaultValue={fetcher.data?.name}
        />
        <button type='submit' className={style.nameBtn} ref={btnRef} style={{ color: 'black' }}>
          save
        </button>
      </fetcher.Form>
      <Modal visible={newQuestionVisible} setVisible={setNewQuestionVisible}>
        <QuestionsEditor mode={QuestionMode.CREATE} />
      </Modal>
      <Button type='button' styles={[style.newQuestionBtn]} onClick={() => {
        setNewQuestionVisible(true)
      }}>
        Новый вопрос
      </Button>
    </div>
  );
};

export default TestEditor;