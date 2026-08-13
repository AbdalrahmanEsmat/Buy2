import { useQuery } from '@tanstack/react-query';
import { getDepartments } from '../../services/apiDepartments';

export function useDepartments() {
  const {
    data: departments,
    isPending,
    error,
  } = useQuery({
    queryKey: ['departments'],
    queryFn: getDepartments,
    staleTime: 60 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
  });

  return { departments, isPending, error };
}
