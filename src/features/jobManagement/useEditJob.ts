import { createEditJob } from '@/services/apiJobs';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useEditJob() {
  const queryClient = useQueryClient();

  const { mutate: editJob, error } = useMutation({
    mutationFn: createEditJob,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['jobs'] });
      queryClient.invalidateQueries({ queryKey: ['job', variables.id] });
    },
  });

  return { editJob, error };
}
