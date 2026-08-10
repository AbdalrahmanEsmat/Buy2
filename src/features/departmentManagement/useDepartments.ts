import { useQuery } from '@tanstack/react-query';
import { getDepartments } from '../../services/apiDepartments';

export function useDepartments() {
  const {
    data: departments,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['departments'],
    queryFn: getDepartments,
  });

  return { departments, isPending, isError };
}
