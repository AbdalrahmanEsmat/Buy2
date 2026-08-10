import { useQuery } from '@tanstack/react-query';
import { getJobs } from '../../services/apiJobs';
import { useSearchParams } from 'react-router-dom';

export function useJobs() {
  const [searchParams] = useSearchParams();

  const departmentId = searchParams.get('department');

  const filter = departmentId
    ? { field: 'departmentId', value: departmentId }
    : null;

  const {
    data: jobs,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['jobs', filter],
    queryFn: () => getJobs({ filter }),
  });

  return { jobs, isPending, isError };
}
