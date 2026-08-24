import { useQuery } from '@tanstack/react-query';
import { getEmployees } from '../../services/apiEmployees';

export function useEmployees() {
  const {
    data: employees,
    isPending,
    error,
  } = useQuery({
    queryKey: ['employees'],
    queryFn: getEmployees,
    staleTime: 60 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
  });

  return { employees, isPending, error };
}
