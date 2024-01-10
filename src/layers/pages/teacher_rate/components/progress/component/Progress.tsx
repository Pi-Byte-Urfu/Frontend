import React, { FC, useEffect, useState } from 'react';
import style from './Progress.module.scss';
import { useParams } from 'react-router-dom';
import { store } from '../../../../../..';
import { getProgress } from '../api/getProgress';

interface IProgressProgres {
  studentId: number
}

const Progress:FC<IProgressProgres> = ({ studentId }) => {
  const [progress, setProgress] = useState<number>();
  const { groupId, courseId } = useParams();
  console.log(studentId)
  useEffect(() => {
    uploadProgress()
  }, [groupId, courseId, studentId]);

  async function uploadProgress() {
    if (courseId != undefined) {
      const response = await getProgress(studentId, +courseId);

      if (response.status == 200) {
        setProgress(response.data.progress)
      }
    }
    
  }

  return (
    <div className={style.studentProgress}>
      Прогресс курса {progress}%
    </div>
  );
};

export default Progress;