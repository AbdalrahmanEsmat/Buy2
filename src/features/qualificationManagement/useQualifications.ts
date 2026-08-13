import { useQuery } from '@tanstack/react-query';
import { getQualifications } from '../../services/apiQualificaitons';

export function useQualifications() {
  const {
    data: qualifications,
    isPending,
    error,
  } = useQuery({
    queryKey: ['qualifications'],
    queryFn: getQualifications,
    staleTime: 60 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
  });

  return { qualifications, isPending, error };
}
