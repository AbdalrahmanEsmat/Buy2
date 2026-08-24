import { deleteJob } from '@/services/apiJobs';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useDeleteJob() {
  const queryClient = useQueryClient();

  const { mutate: removeJob, error: deletingError } = useMutation({
    mutationFn: deleteJob,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['jobs'] });
    },
  });

  return { removeJob, deletingError };
}
