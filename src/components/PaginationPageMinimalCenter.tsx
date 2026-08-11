import * as Paginations from '@/components/application/pagination/pagination';

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function PaginationPageMinimalCenter({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  return (
    <Paginations.PaginationPageMinimalCenter
      page={currentPage}
      total={totalPages}
      onPageChange={onPageChange}
      className="border-t-0"
    />
  );
}
