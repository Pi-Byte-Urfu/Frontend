import react, { ButtonHTMLAttributes, DetailedHTMLProps, FC, PropsWithChildren } from 'react';

interface ButtonProps {
  type: 'reset' | 'submit' | 'button' | undefined
  styles?: string[]
  onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void,
  disabled?: boolean
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({type, onClick, styles, children, disabled}) => {
  let classNames;
  if (styles != undefined) {
    classNames = styles.join(' ');
  }
  
  return (
    <button
      type={type}
      className = {classNames}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;