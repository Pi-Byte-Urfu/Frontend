import React, { FC } from 'react';
import Button from '../../../ui/button/Button';
import style from './RemoveButton.module.scss';
import { useFetcher } from 'react-router-dom';
import { removeEntity } from '../../../../api/removeEntity';

interface RemoveButtonProps {
  path: string,
  setEntities: (entity: any) => void,
  entities: any[],
  id: number
}

const RemoveButton:FC<RemoveButtonProps> = ({path, setEntities, id, entities}) => {
  const removeFetcher = useFetcher();

  return (
    <Button
      type='button'
      styles={[style.btn]}
      onClick={() => {
        removeEntity(path)
        setEntities(entities.filter(entity => entity.id != id))
      }}
    >
      <img src={require('../../../../static/icons/trash-icon.svg').default}/>
    </Button>
  );
};

export default RemoveButton;