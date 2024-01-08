import react, { ButtonHTMLAttributes, DetailedHTMLProps, FC, PropsWithChildren } from 'react';
import style from './Button.module.scss';

interface ButtonProps {
  type: 'reset' | 'submit' | 'button' | undefined
  styles: string[]
  onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void,
  disabled?: boolean
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({type, onClick, styles, children, disabled}) => {

  return (
    <button
      type={type}
      className = {[...styles].join(' ')}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;