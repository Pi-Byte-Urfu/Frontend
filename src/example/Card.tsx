import React, { PropsWithChildren, useState } from 'react';

export enum CardVariant {
  outlined = 'outlined',
  primary = 'primary',
}

interface CardProps {
  width?: string
  height?: string
  variant: CardVariant
  onClick: (num: number) => void
}

const Card: React.FC<PropsWithChildren<CardProps>> = 
  ({width, height, children, variant, onClick}) => {
  const [state, setState] = useState(0)
  return (
    <div style={{width, height, border: variant === CardVariant.outlined ? '1px solid black' : 'none',
      background: variant === CardVariant.primary ? 'lightgray' : '', marginBottom: 30}}
      onClick = {() => onClick(state)}
    >
      {children}
    </div>
  );
};

export default Card;