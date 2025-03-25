import React from 'react';
import styles from './index.module.css';

export interface IButton {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<IButton> = ({ children, onClick, className = '' }) => {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
