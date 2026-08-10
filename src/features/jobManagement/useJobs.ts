import { useQuery } from '@tanstack/react-query';
import { getJobs } from '../../services/apiJobs';

export function useJobs() {
  const {
    data: jobs,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['jobs'],
    queryFn: getJobs,
  });

  return { jobs, isPending, isError };
}
