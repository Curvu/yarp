import React, { ReactNode } from 'react';
import styles from './index.module.scss';

export interface IButton {
  onClick: () => void;
  children: ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
}

export const Button: React.FC<IButton> = ({
  children,
  onClick,
  disabled = false,
  isLoading = false,
  className = ''
}) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {!isLoading ? children : <>Loading...</>}
    </button>
  );
};
