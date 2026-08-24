import Table from '../../../components/Table';
import { PencilIcon, TrashIcon, EyeIcon } from '@heroicons/react/24/outline';
import type { Job } from '../../../types';
import PaginationPageMinimalCenter from '@/components/PaginationPageMinimalCenter';
import { useState, type Dispatch } from 'react';
import { useNavigate } from 'react-router-dom';
import useDeleteJob from '../useDeleteJob';
import DeletingModal from './DeletingModal';

type Props = {
  searchValue: string;
  searchResult: Job[];
  jobs: Job[];
  currentPage: number;
  setCurrentPage: Dispatch<number>;
};

export default function JobTable({
  searchValue,
  searchResult,
  jobs,
  currentPage,
  setCurrentPage,
}: Props) {
  const [deleteStatusModal, setDeleteStatusModal] = useState<{
    isOpen: boolean;
    type: 'decision' | 'loading' | 'success' | 'error';
  }>({
    isOpen: false,
    type: 'decision',
  });
  const [toBeDeletedId, setToBeDeletedId] = useState<string>('');
  const { removeJob, deletingError } = useDeleteJob();

  const navigate = useNavigate();
  const pageSize = 10;

  let toBeShowen = jobs;
  if (searchValue.length > 0 && searchResult.length > 0) {
    toBeShowen = searchResult;
  } else if (searchValue.length > 0 && searchResult.length === 0) {
    return (
      <p className="text-2xl text-center mt-5">No results for: {searchValue}</p>
    );
  }

  const totalItems = toBeShowen.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  toBeShowen = toBeShowen.slice(startIndex, endIndex);

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
    <>
      <Table className="border border-gray-200  rounded-xl text-sm">
        <Table.Header>
          <Table.Row className="border-b font-normal text-left border-b-gray-200 text-gray-400">
            <Table.Column className="px-12 py-16">Job Name</Table.Column>
            <Table.Column className="px-12 py-16">Job Description</Table.Column>
            <Table.Column className="px-12 py-16">
              Number of employees
            </Table.Column>
            <Table.Column className="px-8 py-11">...</Table.Column>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {toBeShowen.map((job) => (
            <Table.Row key={job.id} className="border-b border-b-gray-200 ">
              <Table.Cell className="py-9 pl-12 pr-8 text-black ">
                {job.title}
              </Table.Cell>
              <Table.Cell className="py-9 px-16 text-black ">
                {job.description}
              </Table.Cell>
              <Table.Cell className="py-9 px-16 text-black">
                {job.employeeIds.length}
              </Table.Cell>
              <Table.Cell>
                <div className="flex items-center gap-3 px-2">
                  <button
                    type="button"
                    className="cursor-pointer"
                    onClick={() =>
                      navigate(`/job-management/edit-job/${job.id}`)
                    }
                  >
                    <PencilIcon className="size-8 text-blue-600" />
                  </button>

                  <button
                    type="button"
                    className="cursor-pointer"
                    onClick={() => {
                      setToBeDeletedId(job.id);
                      setDeleteStatusModal({ isOpen: true, type: 'decision' });
                    }}
                  >
                    <TrashIcon className="size-8 text-red-500" />
                  </button>
                  <button
                    type="button"
                    className="cursor-pointer"
                    onClick={() => navigate(`/job-management/${job.id}`)}
                  >
                    <EyeIcon className="size-8 text-blue-600" />
                  </button>
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.Cell colSpan={4} className="p-12">
              <PaginationPageMinimalCenter
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </Table.Cell>
          </Table.Row>
        </Table.Footer>
      </Table>
      <DeletingModal
        isOpen={deleteStatusModal.isOpen}
        onClose={() =>
          setDeleteStatusModal({ isOpen: false, type: 'decision' })
        }
        onDelete={() => handleDeleteJob(toBeDeletedId)}
        type={deleteStatusModal.type}
        message={`${deleteStatusModal.type === 'decision' ? 'Are you sure you want to delete this job?' : deleteStatusModal.type === 'loading' ? 'Please wait while we are deleting the job' : deleteStatusModal.type === 'success' ? 'The job has been deleted successfully' : deletingError?.message}`}
      />
    </>
  );
}
