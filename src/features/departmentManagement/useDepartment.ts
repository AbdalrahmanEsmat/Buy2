import { useQuery } from '@tanstack/react-query';
import { getDepartment } from '../../services/apiDepartments';

export function useDepartment(departmentId: string) {
  const {
    data: department,
    isPending,
    error,
  } = useQuery({
    queryKey: ['department', departmentId],
    queryFn: () => getDepartment(departmentId),
    staleTime: 60 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
  });

  return { department, isPending, error };
}
