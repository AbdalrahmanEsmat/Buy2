import { useQuery } from '@tanstack/react-query';
import { getQualification } from '../../services/apiQualificaitons';

export function useQualification(qualificationId: string) {
  const {
    data: qualification,
    isPending,
    error,
  } = useQuery({
    queryKey: ['qualification', qualificationId],
    queryFn: () => getQualification(qualificationId),
    staleTime: 60 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
  });

  return { qualification, isPending, error };
}
