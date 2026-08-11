import { useQuery } from '@tanstack/react-query';
import { getJobs } from '../../services/apiJobs';
import { useSearchParams } from 'react-router-dom';

export function useJobs() {
  const [searchParams] = useSearchParams();

  const departmentId = searchParams.get('department');
  const sortBy = searchParams.get('sort');
  const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));

  const filter = departmentId
    ? { field: 'departmentId', value: departmentId }
    : null;

  const sort = sortBy ? { field: 'sort', value: sortBy } : null;

  const {
    data: jobs,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['jobs', filter, sort, page],
    queryFn: () => getJobs({ filter, sort, page }),
  });

  return { jobs, isPending, isError };
}
