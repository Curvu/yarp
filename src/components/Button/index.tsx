import React from 'react';
import styles from './index.module.scss';

export interface IButton {
  onClick: () => void;
  children: React.ReactNode;
  theme?: 'light' | 'dark';
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
}

export const Button: React.FC<IButton> = ({ children, onClick, theme = 'light', disabled = false, isLoading = false, className = '' }) => {
  return (
    <button className={`${styles.button} ${styles[theme]} ${className}`} onClick={onClick} disabled={disabled || isLoading}>
      {!isLoading ? children : <span>Loading...</span>}
    </button>
  );
};
