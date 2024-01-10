import React, { ChangeEvent, FC, useRef, useState } from 'react';
import style from './FileUploader.module.scss';
import { sendFile } from '../../../api/sendFile';

interface FileUploaderProps {
  targetPath: string
}

const FileUploader: FC<FileUploaderProps> = ({ targetPath }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<string>('Файл не загружен');

  async function changeHandler(ev: ChangeEvent<HTMLInputElement>) {
    if (ev.target.files != null) {
      setMessage('Загрузка...')
      const formData = new FormData();
      formData.append('answer', ev.target.files[0]);
      const response = await sendFile(formData, targetPath);
      if (response.status == 200) {
        setMessage('Файл загружен');
      }
    }
  }

  function pickHandler() {
    if (inputRef.current != null) {
      inputRef.current.click();
    }
  }

  return (
    <div className={style.uploader}>
      <input type='file' className={style.input} onChange={changeHandler} ref={inputRef}/>
      <div className={style.message}>
        {message}
      </div>
      <div className={style.overlay}>
        <button type='button' className={style.btn}
          onClick={pickHandler}
        >
          Загрузить файл
        </button>
      </div>
    </div>
  );
};

export default FileUploader;