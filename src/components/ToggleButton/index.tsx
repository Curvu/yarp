import React, { useState } from 'react';
import styles from './index.module.scss';

export interface IToggleButton {
  label: string | React.ReactNode;
  onClick: () => void;
}

export interface IToggleHandler {
  options: IToggleButton[];
  theme?: 'light' | 'dark';
  disabled?: boolean;
  className?: string;
}

export const ToggleButton: React.FC<IToggleHandler> = ({ options, theme = 'light', disabled = false, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index: number) => {
    setCurrentIndex(index);
    options[index].onClick();
  }

  return (
    <div className={`${styles.toggleButton} ${styles[theme]} ${className} ${disabled ? styles.disabled : ''}`}>
      {options?.map((option, index) => (
        <button
          key={index}
          className={`${styles.button} ${currentIndex === index ? styles.active : ''}`}
          onClick={() => handleClick(index)}
          disabled={disabled || currentIndex === index}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};
