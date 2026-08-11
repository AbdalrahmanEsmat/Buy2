import * as Paginations from '@/components/application/pagination/pagination';
import { useSearchParams } from 'react-router-dom';

export const PaginationPageMinimalCenter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  function handlePageChange(page: number) {
    searchParams.set('page', String(page));
    setSearchParams(searchParams);
  }

  return (
    <Paginations.PaginationPageMinimalCenter
      page={currentPage}
      onPageChange={handlePageChange}
      className="border-t-0"
    />
  );
};
