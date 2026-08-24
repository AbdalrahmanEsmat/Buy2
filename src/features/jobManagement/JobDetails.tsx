import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import useJob from './useJob';
import Loader from '@/components/Loader';
import PageHeader from './components/PageHeader';
import PageContainer from '../../components/PageContainer';
import { useState } from 'react';
import useDeleteJob from './useDeleteJob';
import DeletingModal from './components/DeletingModal';

export default function JobDetails() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const currentTab = `/${pathname.split('/').pop()}`;
  const { job, isPending, error } = useJob();
  const { removeJob, deletingError } = useDeleteJob();
  const [deleteStatusModal, setDeleteStatusModal] = useState<{
    isOpen: boolean;
    type: 'decision' | 'loading' | 'success' | 'error';
  }>({
    isOpen: false,
    type: 'decision',
  });

  //////////////////////
  if (isPending) return <Loader />;
  if (error) throw new Error(error.message);
  if (!job) throw new Error('Job not found');
  //////////////////////

  function handleDeleteJob(jobId: string) {
    setDeleteStatusModal({ isOpen: true, type: 'loading' });
    removeJob(jobId, {
      onSuccess: () => {
        setDeleteStatusModal({
          isOpen: true,
          type: 'success',
        });
      },

      onError: () => {
        setDeleteStatusModal({
          isOpen: true,
          type: 'error',
        });
      },
    });
  }

  return (
    <PageContainer className="flex flex-col gap-12">
      {/* Page Header */}
      <PageHeader text="Job Details" />
      {/* 1. Job Summary */}
      <section className=" flex flex-col gap-10 rounded-lg border border-gray-200 px-8 pt-8">
        {/* Top row */}
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-primary-800">
            {job.title}
          </h2>

          <div className="flex gap-5 h-24">
            <button
              className="rounded-[calc(6/16*1rem)] bg-danger-600 w-56  text-sm font-semibold text-white cursor-pointer"
              onClick={() => {
                setDeleteStatusModal({ isOpen: true, type: 'decision' });
              }}
            >
              Delete
            </button>

            <button
              className="rounded-[calc(6/16*1rem)] bg-primary-800 w-56 text-sm font-semibold text-white cursor-pointer"
              onClick={() => navigate(`/job-management/edit-job/${job.id}`)}
            >
              Edit
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-4.5 h-[calc(70/16*1rem)]">
          <div className="w-[calc(163/16*1rem)] rounded-[calc(6/16*1rem)] border border-dashed border-gray-200 p-9">
            <p className="text-2xl font-bold leading-5 text-primary-800 pb-5">
              2500
            </p>

            <p className="text-sm text-gray-400">Total Points</p>
          </div>

          <div className="w-[calc(163/16*1rem)] rounded-[calc(6/16*1rem)] border border-dashed border-gray-200 p-9">
            <p className="text-2xl font-bold leading-5 text-primary-800 pb-5">
              {job.fixedTasks.length}
            </p>

            <p className="text-sm text-gray-400">Tasks</p>
          </div>

          <div className="w-[calc(163/16*1rem)] rounded-[calc(6/16*1rem)] border border-dashed border-gray-200 p-9">
            <p className="text-2xl font-bold leading-5 text-primary-800 pb-5">
              39
            </p>

            <p className="text-sm text-gray-400">Gifts</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex h-[calc(40/16*1rem)] border-t border-gray-200">
          <button
            className={`w-[calc(134/16*1rem)]  text-xs font-medium text-gray-400 cursor-pointer ${currentTab === '/job-information' ? 'border-b-2 border-primary-800 text-primary-800' : ''}`}
            onClick={() => navigate('job-information')}
          >
            Information
          </button>

          <button
            className={`w-[calc(134/16*1rem)]  text-xs font-medium text-gray-400 cursor-pointer ${currentTab === '/job-employees' ? 'border-b-2 border-primary-800 text-primary-800' : ''}`}
            onClick={() => navigate('job-employees')}
          >
            Employees
          </button>
        </div>
      </section>
      <DeletingModal
        isOpen={deleteStatusModal.isOpen}
        onClose={() => {
          if (deleteStatusModal.type === 'success') {
            navigate(-1);
          }
          setDeleteStatusModal({ isOpen: false, type: 'decision' });
        }}
        onDelete={() => handleDeleteJob(job.id)}
        type={deleteStatusModal.type}
        message={`${deleteStatusModal.type === 'decision' ? 'Are you sure you want to delete this job?' : deleteStatusModal.type === 'loading' ? 'Please wait while we are deleting the job' : deleteStatusModal.type === 'success' ? 'The job has been deleted successfully' : deletingError?.message}`}
      />
      <Outlet context={{ job }} />
    </PageContainer>
  );
}
