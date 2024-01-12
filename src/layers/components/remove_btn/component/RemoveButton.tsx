import React, { FC } from 'react';
import Button from '../../../ui/button/Button';
import style from './RemoveButton.module.scss';
import { redirect, useFetcher, useNavigate } from 'react-router-dom';
import { removeEntity } from '../../../../api/removeEntity';

interface RemoveButtonProps {
  path: string,
  setEntities: (entity: any) => void,
  entities: any[],
  id: number,
  redirectPath:string
}

const RemoveButton:FC<RemoveButtonProps> = ({path, setEntities, id, entities, redirectPath}) => {
  const removeFetcher = useFetcher();
  const navigate = useNavigate();

  return (
    <Button
      type='button'
      styles={[style.btn]}
      onClick={() => {
        removeEntity(path)
        setEntities(entities.filter(entity => entity.id != id))
        navigate(redirectPath)
      }}
    >
      <img src={require('../../../../static/icons/trash-icon.svg').default}/>
    </Button>
  );
};

export default RemoveButton;