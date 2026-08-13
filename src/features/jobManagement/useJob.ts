import { getJob } from '@/services/apiJobs';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export default function useJob() {
  const { jobId } = useParams();

  const {
    isPending,
    data: job,
    error,
  } = useQuery({
    queryKey: ['job', jobId],
    queryFn: () => {
      if (!jobId) throw new Error('Job ID is missing');
      return getJob(jobId);
    },
  });

  return { isPending, error, job };
}
