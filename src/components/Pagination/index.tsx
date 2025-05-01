import React, { useState, useMemo } from 'react';
import styles from './index.module.scss';

export interface IPagination {
  totalPages: number;
  onPageChange: (page: number) => void;
  length?: number;
  currentPage?: number;
  className?: string;
}

export const Pagination: React.FC<IPagination> = ({ totalPages, onPageChange, length=5, currentPage = 1, className = '' }) => {
  const [current, setCurrent] = useState(currentPage);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrent(page);
    onPageChange(page);
  };

  const memo = useMemo(() => current, [current]);

  const startPage = Math.max(1, Math.min(memo - Math.floor(length / 2), totalPages - length + 1));
  const pages = Array.from({ length: Math.min(length, totalPages) }, (_, index) => startPage + index);

  return (
    <div className={`${styles.pagination} ${className}`}>
      <button onClick={() => handlePageChange(memo - 1)} disabled={memo === 1}>&lt;</button>
      {pages.map((page) => (
        <button
          key={page}
          className={`${styles.pageButton} ${memo === page ? styles.active : ''}`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}
      <button onClick={() => handlePageChange(memo + 1)} disabled={memo === totalPages}>&gt;</button>
    </div>
  );
};
