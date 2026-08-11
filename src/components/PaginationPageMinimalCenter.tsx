import { useState } from 'react';
import * as Paginations from '@/components/application/pagination/pagination';

export const PaginationPageMinimalCenter = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Paginations.PaginationPageMinimalCenter
      page={currentPage}
      onPageChange={setCurrentPage}
      className="border-t-0"
    />
  );
};
