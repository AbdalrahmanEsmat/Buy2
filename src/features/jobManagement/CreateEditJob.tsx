import { useParams } from 'react-router-dom';
import Loader from '@/components/Loader';
import useJob from './useJob';
import CreateEditJobForm from './components/CreateEditJobForm';
import { DocumentMagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function CreateEditJob() {
  const { jobId } = useParams();
  const isEditMode = Boolean(jobId);
  const { job, isPending, error } = useJob();

  if (isEditMode) {
    if (isPending) {
      return <Loader />;
    }

    if (error) {
      return (
        <div className="flex items-center justify-center h-full">
          <DocumentMagnifyingGlassIcon className="size-50 text-red-500" />
          <p className="text-red-500">{error.message}</p>
        </div>
      );
    }
  }

  return (
    <CreateEditJobForm
      isEditMode={isEditMode}
      job={isEditMode ? job : undefined}
    />
  );
}
