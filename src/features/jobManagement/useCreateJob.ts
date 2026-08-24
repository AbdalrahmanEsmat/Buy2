import { createEditJob } from '@/services/apiJobs';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useCreateJob() {
  const queryClient = useQueryClient();

  const { mutate: createJob, error } = useMutation({
    mutationFn: createEditJob,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['jobs'] });
    },
  });

  return { createJob, error };
}
