import React, { ChangeEvent, FC, useRef, useState } from 'react';
import style from './UploaderImg.module.scss';
import { IBaseComponentProps } from '../../../../types/IBaseComponentProps';
import { sendPhoto } from '../api/sendPhoto';
import axios from 'axios';

interface IUploaderImgProps extends IBaseComponentProps {
  accept: string,
  photoAlt: string,
  targetPath: string
}

const UploaderImg: FC<IUploaderImgProps> = ({ accept, photoAlt, styles, targetPath }) => {
  const img = useRef<HTMLImageElement>(null);
  const fileInput = useRef<HTMLInputElement>(null);
  const [errorMessage, setErrorMessage] = useState<string| null>(null);
  function pickHandler() {
    fileInput.current?.click();
  }

  async function uploadHandler(ev: ChangeEvent<HTMLInputElement>) {
    if (ev.target.files != null) {
      const formData = new FormData();
      formData.append('photo', ev.target.files[0]); 
      const response = await sendPhoto(formData, targetPath);

      if (response.status == 200 && img.current != null) {
        img.current.src = targetPath
      }
    }
  }

  targetPath= targetPath == '' ? require('../img/default.jpg') : targetPath;

  return (
    <div className={[style.container, ...styles].join(' ')}>
      <div className={[style.imgContainer, ...styles].join(' ')}>
        <img ref={img} className={style.preview} alt={photoAlt} src={targetPath} />
        <input
          className={style.input}
          type='file' accept={accept}
          onChange={uploadHandler}
          ref={fileInput}
        />
        <div className={style.overlay}>
          <button type='button' className={style.btn}
            onClick={pickHandler}
          >
            Загрузить фото
          </button>          
        </div>
      {errorMessage && (
        <div className={style.errorMessage}>
          {errorMessage}
        </div>
      )}
      </div>
    </div>
  );
};

export default UploaderImg;