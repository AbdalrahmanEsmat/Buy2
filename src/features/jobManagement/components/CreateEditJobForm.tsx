import PageContainer from '../../../components/PageContainer';
import PageHeader from '../components/PageHeader';
import JobInformationForm from '../components/JobInformationForm';
import CreateEditFormSteper from '../components/CreateEditFormSteper';
import JobScheduleForm from '../components/JobScheduleForm';
import PerformanceMetricsForm from '../components/PerformanceMetricsForm';
import FixedTasksForm from '../components/FixedTasksForm';
import CreationSuccessFail from '../../../components/CreationSuccessFail';
import type { Job } from '@/types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCreateJob from '../useCreateJob';
import useEditJob from '../useEditJob';

type Props = {
  isEditMode: boolean;
  job?: Job | undefined;
};

export default function CreateEditJobForm({ isEditMode, job }: Props) {
  const initialData: Job =
    isEditMode && job
      ? {
          id: job.id,
          title: job.title,
          description: job.description,
          departmentId: job.departmentId,
          seniorityLevelId: job.seniorityLevelId,
          reportingManagerId: job.reportingManagerId,
          qualificationIds: job.qualificationIds,
          scheduleType: job.scheduleType,
          fixedSchedule: job.fixedSchedule,
          performanceMetrics: job.performanceMetrics,
          fixedTasks: job.fixedTasks,
          employeeIds: job.employeeIds,
        }
      : {
          id: '',
          title: '',
          description: '',
          departmentId: '',
          seniorityLevelId: '',
          reportingManagerId: '',
          qualificationIds: [],
          scheduleType: 'fixed',
          fixedSchedule: {
            checkInFrom: '',
            checkInTo: '',
            checkOutFrom: '',
            checkOutTo: '',
            hoursPerDay: 0,
          },
          performanceMetrics: [],
          fixedTasks: [],
          employeeIds: [],
        };

  const [formData, setFormData] = useState<Job>(initialData);
  const [formPart, setFormPart] = useState(1);
  const [Errors, setErrors] = useState<string[]>([]);
  const [statusModal, setStatusModal] = useState<{
    isOpen: boolean;
    type: 'loading' | 'success' | 'error';
  }>({
    isOpen: false,
    type: 'loading',
  });
  const { createJob, error: creationError } = useCreateJob();
  const { editJob, error: editError } = useEditJob();

  const navigate = useNavigate();

  console.log(formData);

  function validatePartOne() {
    const errors: string[] = [];

    if (!formData.title.trim()) {
      errors.push('Title is required');
    }

    if (!formData.description.trim()) {
      errors.push('Description is required');
    }

    if (!formData.departmentId) {
      errors.push('Department is required');
    }

    if (!formData.seniorityLevelId) {
      errors.push('Seniority level is required');
    }

    if (!formData.reportingManagerId) {
      errors.push('Reporting manager is required');
    }

    if (formData.qualificationIds.length === 0) {
      errors.push('At least one qualification is required');
    }

    return errors;
  }

  function validatePartTwo() {
    const errors: string[] = [];

    if (formData.scheduleType === 'shifts') {
      return errors;
    }

    if (!formData.fixedSchedule?.checkInFrom.trim()) {
      errors.push('check in from is required');
    }

    if (!formData.fixedSchedule?.checkInTo.trim()) {
      errors.push('check in to is required');
    }

    if (!formData.fixedSchedule?.checkOutFrom.trim()) {
      errors.push('check out from is required');
    }

    if (!formData.fixedSchedule?.checkOutTo.trim()) {
      errors.push('check out to is required');
    }

    if (!formData.fixedSchedule?.hoursPerDay) {
      errors.push('hours is required');
    }

    return errors;
  }

  function handleNextButton() {
    if (formPart === 1) {
      const errors = validatePartOne();

      setErrors(errors);

      if (errors.length === 0) {
        setFormPart((prev) => prev + 1);
      }
    }

    if (formPart === 2) {
      const errors = validatePartTwo();

      setErrors(errors);

      if (errors?.length === 0) {
        setFormPart((prev) => prev + 1);
      }
    }

    if (formPart === 3) {
      setFormPart((prev) => prev + 1);
    }

    if (formPart === 4) {
      setStatusModal({
        isOpen: true,
        type: 'loading',
      });

      if (isEditMode) {
        editJob(
          { newJob: formData, id: formData.id },
          {
            onSuccess: () => {
              setStatusModal({
                isOpen: true,
                type: 'success',
              });
            },

            onError: () => {
              setStatusModal({
                isOpen: true,
                type: 'error',
              });
            },
          },
        );
      } else {
        createJob(
          { newJob: formData },
          {
            onSuccess: () => {
              setStatusModal({
                isOpen: true,
                type: 'success',
              });
            },

            onError: () => {
              setStatusModal({
                isOpen: true,
                type: 'error',
              });
            },
          },
        );
      }
    }
  }
  return (
    <PageContainer className="flex flex-col gap-20">
      <PageHeader text={isEditMode ? 'Edit Job' : 'Add New Job'} />

      <CreateEditFormSteper formPart={formPart} />

      <form className="flex flex-col gap-20  w-[70%] mx-auto">
        {formPart === 1 ? (
          <JobInformationForm formData={formData} setFormData={setFormData} />
        ) : formPart === 2 ? (
          <JobScheduleForm formData={formData} setFormData={setFormData} />
        ) : formPart === 3 ? (
          <PerformanceMetricsForm
            formData={formData}
            setFormData={setFormData}
          />
        ) : (
          <FixedTasksForm formData={formData} setFormData={setFormData} />
        )}
      </form>

      <hr className="w-[70%] mx-auto text-gray-300" />

      <div className="w-[70%] mx-auto flex justify-between items-end">
        {Errors.length > 0 && (
          <div className="text-red-500">
            <ul className="list-disc ml-5">
              {Errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex gap-10 ml-auto">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="text-red-500 cursor-pointer"
          >
            Discard
          </button>

          <button
            type="button"
            onClick={handleNextButton}
            className="text-white bg-blue-900 px-15 py-6 rounded-lg cursor-pointer"
          >
            {formPart === 4 ? 'Submit' : 'Next'}
          </button>
        </div>
      </div>
      <CreationSuccessFail
        isOpen={statusModal.isOpen}
        onClose={() => {
          if (statusModal.type === 'error') {
            setFormPart(1);
            setFormData(initialData);
          } else {
            navigate(-1);
          }
          setStatusModal({
            isOpen: false,
            type: 'loading',
          });
        }}
        type={statusModal.type}
        title={
          statusModal.type === 'loading'
            ? `${isEditMode ? 'Editing' : 'Creating'} job`
            : statusModal.type === 'success'
              ? `Job ${isEditMode ? 'edited' : 'created'} successfully`
              : `Failed to ${isEditMode ? 'edit' : 'create'} job`
        }
        message={
          statusModal.type === 'loading'
            ? `Please wait while we ${isEditMode ? 'edit' : 'create'} your job.`
            : statusModal.type === 'success'
              ? `${isEditMode ? 'The job has been edited successfully' : 'The new job has been created successfully.'}`
              : `${isEditMode ? editError?.message : creationError?.message}`
        }
        buttonText={statusModal.type === 'success' ? 'Done' : 'Try again'}
      />
    </PageContainer>
  );
}
