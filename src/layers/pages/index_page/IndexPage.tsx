import React from 'react';
import style from './IndexPage.module.scss';

const IndexPage = () => {
  return (
    <div className={style.page}>
      <div className={style.intro}>
        <div className={[style.introContainer, '_container'].join(' ')}>
          <h2 className={style.introTitle}>
            Образовательный сервис
          </h2>
          <div className={style.introImg}>
            <img src={require('./img/big-icon.png')} alt='photo'/>
          </div>
        </div>
      </div>
      <div className={style.advantages}>
        <div className={[style.advantagesContainer, '_container'].join(' ')}>
          <h2 className={style.advantagesTitle}>
            Возможности
          </h2>
          <div className={style.advantagesContent}>
            <ul className={style.advantagesList}>
              <li className={style.advantagesItem}>
                <div className={style.itemImg}>
                  <img src={require('./img/upload-icon.png')} alt='photo'/>
                </div>
                <div className={style.itemText}>
                  Создание курсов с возможностью загружать файлы
                </div>
              </li>
              <li className={style.advantagesItem}>
                <div className={style.itemImg}>
                  <img src={require('./img/progress-icon.png')} alt='photo'/>
                </div>
                <div className={style.itemText}>
                  Просмотр прогресса по курсу
                </div>
              </li>
              <li className={style.advantagesItem}>
                <div className={style.itemImg}>
                  <img src={require('./img/group-icon.png')} alt='photo'/>
                </div>
                <div className={style.itemText}>
                  Создание групп и возможность учителю смотреть их прогресс и выставлять баллы
                </div>
              </li>
              <li className={style.advantagesItem}>
                <div className={style.itemImg}>
                  <img src={require('./img/course-icon.png')} alt='photo'/>
                </div>
                <div className={style.itemText}>
                  Гибкое управление теоретическим материалом
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;