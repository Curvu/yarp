import React from 'react';
import { Check, X } from 'react-bootstrap-icons';
import styles from './index.module.scss';

export interface ISwitch {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export const Switch: React.FC<ISwitch> = ({ checked, disabled, onChange, className = '' }) => {
  const [isChecked, setIsChecked] = React.useState(checked || false);

  const handleChange = () => {
    if (!onChange) return;
    let newValue = !isChecked;
    setIsChecked(newValue);
    onChange(newValue);
  }

  return (
    <label className={`${styles.switch} ${className}`}>
      <input type="checkbox" checked={isChecked} onChange={handleChange} disabled={disabled} />
      <span className={styles.slider}>
        { isChecked ? <Check className={styles.icon} /> : <X className={`${styles.icon} ${styles.xIcon}`} /> }
      </span>
    </label>
  );
};
