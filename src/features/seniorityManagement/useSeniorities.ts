import { useQuery } from '@tanstack/react-query';
import { getSeniorities } from '../../services/apiSeniority';

export function useSeniorities() {
  const {
    data: seniorityLevels,
    isPending,
    error,
  } = useQuery({
    queryKey: ['seniorityLevels'],
    queryFn: getSeniorities,
    staleTime: 60 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
  });

  return { seniorityLevels, isPending, error };
}
