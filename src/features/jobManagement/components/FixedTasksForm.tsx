import { useRef, useState } from 'react';
import CreateEditFormInput from './CreateEditFormInput';
import Modal from '@/components/Modal';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { FaFilePdf } from 'react-icons/fa6';
import { FaFileImage } from 'react-icons/fa6';
import type { FixedTask, Job } from '@/types';
import FixedTasksSchedule from './FixedTasksSchedule';

type Props = {
  formData: Job;
  setFormData: React.Dispatch<React.SetStateAction<Job>>;
};

function FixedTaskStep({
  step,
  idx,
  steps,
  setFixedTask,
}: {
  step: string;
  idx: number;
  steps: string[];
  setFixedTask: React.Dispatch<React.SetStateAction<FixedTask>>;
}) {
  const [isEditStepOpen, setIsEditStepOpen] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<string>(step);
  const [error, setError] = useState<string>('');

  // handle delete step
  function handleDeleteStep(idx: number) {
    const newSteps = steps.filter((_, index) => index !== idx);
    setFixedTask((prev) => ({ ...prev, steps: newSteps }));
  }

  // handle cancel click
  function handkeCancelClick() {
    setCurrentStep(step);
    setIsEditStepOpen(false);
  }

  // handle edit step
  function handleEditStep() {
    const trimmedStep = currentStep.trim().toLowerCase();

    // Empty
    if (!trimmedStep) {
      setError('You cannot have an empty step');
      return;
    }

    // Duplicate
    const isDuplicate = steps.some(
      (existingStep, index) =>
        index !== idx &&
        existingStep.trim().toLowerCase() === trimmedStep.toLowerCase(),
    );

    if (isDuplicate) {
      setError('This step already exists');
      return;
    }

    // Save
    const newSteps = [...steps];
    newSteps[idx] = trimmedStep;

    setFixedTask((prev) => ({ ...prev, steps: newSteps }));
    setError('');
    setIsEditStepOpen(false);
  }

  return (
    <div className="flex justify-between items-center px-4 py-3 bg-gray-50 rounded-lg">
      <p>{currentStep}</p>
      <div className="flex gap-5">
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => setIsEditStepOpen((prev) => !prev)}
        >
          <PencilIcon className="w-7 h-7 text-primary-800" />
        </button>
        <Modal
          isOpen={isEditStepOpen}
          onClose={() => {
            handkeCancelClick();
          }}
        >
          <div className="p-16 flex flex-col gap-10 justify-center items-center">
            <input
              value={currentStep}
              placeholder="edit step"
              className={`border-3 border-primary-500 p-8 rounded-lg w-200 h-25 placeholder:capitalize focus:outline-none ${error.length > 0 ? 'border-red-500' : ''}`}
              onChange={(e) => setCurrentStep(e.target.value)}
            />
            {error.length > 0 && <p className="text-red-500">{error}</p>}
            <div className="flex gap-5">
              <button
                type="button"
                className="border-3 border-gray-200 capitalize rounded-lg hover:bg-gray-100 px-8 py-4 transition-colors"
                onClick={() => {
                  handkeCancelClick();
                }}
              >
                cancel
              </button>
              <button
                type="button"
                className="bg-primary-900 text-white capitalize rounded-lg hover:bg-primary-800 px-8 py-4 transition-colors"
                onClick={() => {
                  handleEditStep();
                }}
              >
                save changes
              </button>
            </div>
          </div>
        </Modal>
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => handleDeleteStep(idx)}
        >
          <TrashIcon className="w-7 h-7 text-red-500" />
        </button>
      </div>
    </div>
  );
}

export default function FixedTasksForm({ formData, setFormData }: Props) {
  const initialFixedTask: FixedTask = {
    name: '',
    description: '',
    steps: [],
    attachments: [],
    submissionTime: '',
    repeat: {
      repeatType: 'daily',
    },
  };
  const [fixedTask, setFixedTask] = useState<FixedTask>(initialFixedTask);
  const [step, setStep] = useState<string>('');
  const [stepError, setStepError] = useState<string>('');
  const [fileError, setFileError] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [taskErrors, setTaskErrors] = useState<Record<string, string>>({});
  const monthDays = Array.from({ length: 31 }, (_, i) => i + 1);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const JOB_MANAGEMENT_FILES_PATH = '../../../mocks/FakeFiles/jobManagement';

  // handle add step
  function handleAddStep() {
    const newStep = step.trim().toLowerCase();

    if (!newStep) {
      setStepError('the step is empty');
      return;
    }

    if (fixedTask.steps.includes(newStep)) {
      setStepError('the step is already exist');
      return;
    }

    setFixedTask((prev) => ({
      ...prev,
      steps: [...prev.steps, step.trim()],
    }));

    setStep('');
    setStepError('');
  }

  // handle file upload
  function handleFileUpload(file: File) {
    if (Object.hasOwn(taskErrors, 'attachment')) {
      const errors = { ...taskErrors };
      delete errors.attachment;
      setTaskErrors(errors);
    }

    const allowedTypes = ['application/pdf', 'image/png', 'image/jpeg'];

    if (!allowedTypes.includes(file.type)) {
      setFileError('invalid type');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setFileError('file is too large');
      return;
    }

    const isDuplicate = uploadedFiles.some(
      (existingFile) =>
        existingFile.name === file.name &&
        existingFile.size === file.size &&
        existingFile.lastModified === file.lastModified,
    );

    if (isDuplicate) {
      setFileError('this file is already exists');
      return;
    }

    const filePath = `${JOB_MANAGEMENT_FILES_PATH}/${file.name}`;

    setUploadedFiles((prev) => [...prev, file]);
    setFixedTask((prev) => ({
      ...prev,
      attachments: [...prev.attachments, filePath],
    }));
    setFileError('');
  }

  // handle delelete file
  function handleDeleteFile(idx: number) {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== idx));
    setFixedTask((prev) => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== idx),
    }));
  }

  // handle submission time
  function handleSubmissionTime(value: string) {
    if (value.length > 10) return;

    // Only numbers and :
    if (!/^[0-9: \-apm]*$/i.test(value)) return;

    // First digit: 0 or 1
    if (value.length === 1 && !/^[01]$/.test(value[0])) return;

    // Second digit depends on first digit
    if (value.length === 2) {
      if (value[0] === '0' && !/^[1-9]$/.test(value[1])) return;
      if (value[0] === '1' && !/^[0-2]$/.test(value[1])) return;
    }

    // :
    if (value.length === 3 && value[2] !== ':') return;

    // Fourth digit: 0-5
    if (value.length === 4 && !/^[0-5]$/.test(value[3])) return;

    // Fifth digit: 0-9
    if (value.length === 5 && !/^[0-9]$/.test(value[4])) return;

    // Add " - " only when typing the 5th character
    // Add " - " only when typing the 5th character
    if (value.length === 5 && fixedTask.submissionTime.length < value.length) {
      setFixedTask((prev) => ({ ...prev, submissionTime: `${value} - ` }));
      return;
    }

    // ninth char
    if (
      value.length === 9 &&
      value[8] !== 'a' &&
      value[8] !== 'p' &&
      value[8] !== 'A' &&
      value[8] !== 'P'
    ) {
      return;
    }

    if (value.length === 9 && fixedTask.submissionTime.length < value.length) {
      setFixedTask((prev) => ({ ...prev, submissionTime: `${value}m` }));
      return;
    }

    setFixedTask((prev) => ({ ...prev, submissionTime: value }));
  }

  // validate task
  function validateTask() {
    const errors: Record<string, string> = {};

    // check if task name is empty and check if the task name is duplicated
    if (!fixedTask.name.trim()) {
      errors.name = 'Task Name is required';
    } else {
      const isDuplicated = formData.fixedTasks.some(
        (task) =>
          task.name.toLowerCase().trim() ===
          fixedTask.name.toLowerCase().trim(),
      );

      if (isDuplicated) {
        errors.name = 'Task Name already exists';
      }
    }

    // check if description is empty
    if (!fixedTask.description.trim()) {
      errors.description = 'Description is required';
    }

    // check if there are no steps
    if (fixedTask.steps.length < 2) {
      errors.steps = 'You need to include at least two steps';
      setStepError('');
    }

    // check if there are no attachments
    if (fixedTask.attachments.length === 0) {
      errors.attachment = 'You need to include at least one attachment';
    }

    // check if submission time is empty
    if (!fixedTask.submissionTime.trim()) {
      errors.submissionTime = 'Submission time is required';
    }

    // check if repeat type is weekly and day is not specified
    if (
      fixedTask.repeat.repeatType === 'weekly' &&
      !fixedTask.repeat.weeklyDay
    ) {
      errors.weeklyDay = 'You have to specify a day';
    }

    // check if repeat type is multiple days and no days are specified
    if (
      fixedTask.repeat.repeatType === 'multiple_days' &&
      !fixedTask.repeat.multipleDays?.length
    ) {
      errors.multipleDays = 'You have to specify the days';
    }

    // check if repeat type is monthly and no days are specified
    if (
      fixedTask.repeat.repeatType === 'monthly' &&
      !fixedTask.repeat.monthlyDays?.length
    ) {
      errors.monthlyDays = 'You have to specify the days';
    }

    return errors;
  }

  // handle add task
  function handleAddTask() {
    const errors = validateTask();

    setTaskErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    setFormData((prev) => ({
      ...prev,
      fixedTasks: [...prev.fixedTasks, fixedTask],
    }));

    setFixedTask(initialFixedTask);
    setTaskErrors({});
    setUploadedFiles([]);
    setStepError('');
    setFileError('');
  }

  // handle delete task
  function handleDeleteTask(index: number) {
    setFormData((prev) => ({
      ...prev,
      fixedTasks: prev.fixedTasks.filter((_, idx) => idx !== index),
    }));
  }

  return (
    <div className="flex flex-col gap-14">
      {/* /// P1 /// */}
      <div className="flex gap-11 basis-1.5">
        <div className="flex-1">
          <CreateEditFormInput
            id="taskName"
            labelText="task name"
            inputType="text"
            placeHolder="task name"
            value={fixedTask.name}
            onChange={(e) => {
              setTaskErrors((prev) => {
                const errors = { ...prev };
                delete errors.name;
                return errors;
              });

              setFixedTask((prev) => ({
                ...prev,
                name: e.target.value.trim(),
              }));
            }}
            required={true}
            inputClassName={`focus:outline-none ${Object.hasOwn(taskErrors, 'name') && 'border-red-500'}`}
          />
          {Object.hasOwn(taskErrors, 'name') && (
            <p className="mt-1.5 text-red-500">{taskErrors.name}</p>
          )}
        </div>

        <div className="flex-1">
          <CreateEditFormInput
            id="description"
            labelText="description"
            inputType="text"
            placeHolder="description"
            value={fixedTask.description}
            onChange={(e) => {
              setTaskErrors((prev) => {
                const errors = { ...prev };
                delete errors.description;
                return errors;
              });

              setFixedTask((prev) => ({
                ...prev,
                description: e.target.value.trim(),
              }));
            }}
            required={true}
            inputClassName={`focus:outline-none ${Object.hasOwn(taskErrors, 'description') && 'border-red-500'}`}
          />
          {Object.hasOwn(taskErrors, 'description') && (
            <p className="mt-1.5 text-red-500">{taskErrors.description}</p>
          )}
        </div>
      </div>

      {/* /// P2 /// */}
      <div className="flex flex-col gap-14">
        <div className="flex flex-col gap-5">
          <label className="cursor-pointer capitalize" htmlFor="step">
            Steps to complete task
          </label>
          <div
            className={`flex p-3 h-27 border rounded-lg ${
              stepError.length > 0 || Object.hasOwn(taskErrors, 'steps')
                ? 'border-red-500'
                : 'border-gray-200'
            }`}
          >
            <input
              id="step"
              className="p-8 flex-1 focus:outline-none placeholder:text-gray-400 placeholder:text-sm placeholder:capitalize"
              placeholder="add task"
              value={step}
              onChange={(e) => {
                if (Object.hasOwn(taskErrors, 'steps')) {
                  const errors = { ...taskErrors };
                  delete errors.steps;
                  setTaskErrors(errors);
                }
                if (stepError.length > 0) {
                  setStepError('');
                }

                setStep(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleAddStep();
                }
              }}
            />
            <button
              type="button"
              className="flex items-center justify-center gap-5 px-8 py-5 bg-primary-800 text-white rounded-sm  text-2xl hover:bg-primary-600 transition-colors cursor-pointer"
              onClick={handleAddStep}
            >
              <span className="text-4xl font-light leading-none focus:outline-none">
                +
              </span>
              <span>Add Step</span>
            </button>
          </div>
        </div>
        {stepError.length > 0 ? (
          <p className="text-red-500">{stepError}</p>
        ) : (
          Object.hasOwn(taskErrors, 'steps') && (
            <p className="text-red-500">{taskErrors.steps}</p>
          )
        )}
        <div className="grid grid-cols-2 gap-x-16 gap-y-10">
          {fixedTask.steps.length > 0 &&
            fixedTask.steps.map((Step, idx) => (
              <FixedTaskStep
                key={idx}
                step={Step}
                idx={idx}
                steps={fixedTask.steps}
                setFixedTask={setFixedTask}
              />
            ))}
        </div>
      </div>

      {/* /// P3 /// */}
      <div className="flex flex-col gap-10">
        <div
          onClick={() => fileInputRef.current?.click()}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => {
            setIsDragging(false);
          }}
          onDrop={(e) => {
            e.preventDefault();

            const file = e.dataTransfer.files?.[0];

            if (e.dataTransfer.files?.length > 1) {
              setFileError('only one file per time');
              return;
            }

            if (!file) return;

            handleFileUpload(file);
          }}
          className={`flex flex-col items-center gap-3 border rounded-lg p-10 cursor-pointer ${fileError.length > 0 || Object.hasOwn(taskErrors, 'attachment') ? 'border-red-500' : 'border-gray-200'} ${isDragging && 'bg-gray-50'}`}
        >
          <input
            type="file"
            accept=".pdf,.png,.jpg,.jpeg"
            ref={fileInputRef}
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];

              if (!file) return;
              handleFileUpload(file);

              e.target.value = '';
            }}
          />
          <ArrowDownTrayIcon className="w-15 text-primary-500" />
          <p className="text-gray-400">
            <span className="text-black">Click to upload</span> or Drag & Drop
          </p>
          <p className="text-gray-400 text-sm">PDF, PNG, Or JPG (Max 5 Mb)</p>
        </div>
        {fileError.length > 0 ? (
          <p className="capitalize text-red-500 text-center">{fileError}</p>
        ) : (
          Object.hasOwn(taskErrors, 'attachment') && (
            <p className="text-red-500">{taskErrors.attachment}</p>
          )
        )}

        {uploadedFiles.length > 0 && (
          <div className="grid grid-cols-2 gap-5">
            {uploadedFiles.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-50 p-8 rounded-lg "
              >
                <div className="flex gap-5 items-center">
                  {file.type === 'application/pdf' ? (
                    <FaFilePdf className="w-10 h-10 text-red-500" />
                  ) : (
                    <FaFileImage className="w-10 h-10 text-primary-500" />
                  )}
                  <div>
                    <a
                      href={URL.createObjectURL(file)}
                      download
                      className="cursor-pointer"
                    >
                      {file.name}
                    </a>
                    <p className="text-gray-400">{`${(file.size / 1024 / 1024).toFixed(2)} M`}</p>
                  </div>
                </div>
                <TrashIcon
                  className="w-8 h-8 text-red-500 cursor-pointer"
                  onClick={() => handleDeleteFile(index)}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* /// P4 /// */}
      <div>
        <div className="flex gap-20">
          <div className="flex flex-col gap-4">
            <label className="capitalize">submission time</label>
            <input
              id="submissionTime"
              type="text"
              value={fixedTask.submissionTime}
              placeholder="HH:MM - AM"
              maxLength={10}
              className={`py-6.5 px-8 bg-gray-100 rounded-md focus:outline-primary-400 uppercase ${Object.hasOwn(taskErrors, 'submissionTime') && 'border border-red-500'}`}
              required
              onChange={(e) => {
                if (Object.hasOwn(taskErrors, 'submissionTime')) {
                  const errors = { ...taskErrors };
                  delete errors.submissionTime;
                  setTaskErrors(errors);
                }

                handleSubmissionTime(e.target.value);
              }}
            />
            {Object.hasOwn(taskErrors, 'submissionTime') && (
              <p className="text-red-500">{taskErrors.submissionTime}</p>
            )}
          </div>
          <div className="flex-1 flex flex-col gap-9">
            <p>Repeat</p>
            <div className="flex justify-between gap-6">
              <label htmlFor="daily" className="flex gap-2 capitalize">
                <input
                  id="daily"
                  type="radio"
                  name="repeat"
                  className="w-11 h-11 accent-primary-900"
                  checked={fixedTask.repeat.repeatType === 'daily'}
                  onChange={() =>
                    setFixedTask((prev) => ({
                      ...prev,
                      repeat: { repeatType: 'daily' },
                    }))
                  }
                />
                daily
              </label>
              <label htmlFor="weekly" className="flex gap-2 capitalize">
                <input
                  id="weekly"
                  type="radio"
                  name="repeat"
                  className="w-11 h-11 accent-primary-900"
                  onChange={() => {
                    setFixedTask((prev) => ({
                      ...prev,
                      repeat: { repeatType: 'weekly' },
                    }));
                  }}
                />
                weekly
              </label>
              <label htmlFor="multiple_days" className="flex gap-2 capitalize">
                <input
                  id="multiple_days"
                  type="radio"
                  name="repeat"
                  className="w-11 h-11 accent-primary-900"
                  onChange={() => {
                    setFixedTask((prev) => ({
                      ...prev,
                      repeat: { repeatType: 'multiple_days' },
                    }));
                  }}
                />
                multiple days
              </label>
              <label htmlFor="monthly" className="flex gap-2 capitalize">
                <input
                  id="monthly"
                  type="radio"
                  name="repeat"
                  className="w-11 h-11 accent-primary-900"
                  onChange={() => {
                    setFixedTask((prev) => ({
                      ...prev,
                      repeat: { repeatType: 'monthly' },
                    }));
                  }}
                />
                monthly
              </label>
            </div>
          </div>
        </div>
        {fixedTask.repeat.repeatType === 'weekly' && (
          <div className="flex-1 flex flex-col gap-9 mt-20">
            <p>Day</p>
            <div className="flex justify-between gap-6">
              <label htmlFor="sunday" className="flex gap-2 capitalize">
                <input
                  id="sunday"
                  type="radio"
                  name="weeklyDay"
                  className="w-11 h-11 accent-primary-900"
                  checked={fixedTask.repeat.weeklyDay === 'sunday'}
                  onChange={() => {
                    if (Object.hasOwn(taskErrors, 'weeklyDay')) {
                      const errors = { ...taskErrors };
                      delete errors.weeklyDay;
                      setTaskErrors(errors);
                    }

                    setFixedTask((prev) => ({
                      ...prev,
                      repeat: { ...prev.repeat, weeklyDay: 'sunday' },
                    }));
                  }}
                />
                sunday
              </label>
              <label htmlFor="monday" className="flex gap-2 capitalize">
                <input
                  id="monday"
                  type="radio"
                  name="weeklyDay"
                  className="w-11 h-11 accent-primary-900"
                  checked={fixedTask.repeat.weeklyDay === 'monday'}
                  onChange={() => {
                    if (Object.hasOwn(taskErrors, 'weeklyDay')) {
                      const errors = { ...taskErrors };
                      delete errors.weeklyDay;
                      setTaskErrors(errors);
                    }

                    setFixedTask((prev) => ({
                      ...prev,
                      repeat: { ...prev.repeat, weeklyDay: 'monday' },
                    }));
                  }}
                />
                monday
              </label>
              <label htmlFor="tuesday" className="flex gap-2 capitalize">
                <input
                  id="tuesday"
                  type="radio"
                  name="weeklyDay"
                  className="w-11 h-11 accent-primary-900"
                  checked={fixedTask.repeat.weeklyDay === 'tuesday'}
                  onChange={() => {
                    if (Object.hasOwn(taskErrors, 'weeklyDay')) {
                      const errors = { ...taskErrors };
                      delete errors.weeklyDay;
                      setTaskErrors(errors);
                    }

                    setFixedTask((prev) => ({
                      ...prev,
                      repeat: { ...prev.repeat, weeklyDay: 'tuesday' },
                    }));
                  }}
                />
                tuesday
              </label>
              <label htmlFor="wednesday" className="flex gap-2 capitalize">
                <input
                  id="wednesday"
                  type="radio"
                  name="weeklyDay"
                  className="w-11 h-11 accent-primary-900"
                  checked={fixedTask.repeat.weeklyDay === 'wednesday'}
                  onChange={() => {
                    if (Object.hasOwn(taskErrors, 'weeklyDay')) {
                      const errors = { ...taskErrors };
                      delete errors.weeklyDay;
                      setTaskErrors(errors);
                    }

                    setFixedTask((prev) => ({
                      ...prev,
                      repeat: { ...prev.repeat, weeklyDay: 'wednesday' },
                    }));
                  }}
                />
                wednesday
              </label>
              <label htmlFor="thursday" className="flex gap-2 capitalize">
                <input
                  id="thursday"
                  type="radio"
                  name="weeklyDay"
                  className="w-11 h-11 accent-primary-900"
                  checked={fixedTask.repeat.weeklyDay === 'thursday'}
                  onChange={() => {
                    if (Object.hasOwn(taskErrors, 'weeklyDay')) {
                      const errors = { ...taskErrors };
                      delete errors.weeklyDay;
                      setTaskErrors(errors);
                    }

                    setFixedTask((prev) => ({
                      ...prev,
                      repeat: { ...prev.repeat, weeklyDay: 'thursday' },
                    }));
                  }}
                />
                thursday
              </label>
              <label htmlFor="friday" className="flex gap-2 capitalize">
                <input
                  id="friday"
                  type="radio"
                  name="weeklyDay"
                  className="w-11 h-11 accent-primary-900"
                  checked={fixedTask.repeat.weeklyDay === 'friday'}
                  onChange={() => {
                    if (Object.hasOwn(taskErrors, 'weeklyDay')) {
                      const errors = { ...taskErrors };
                      delete errors.weeklyDay;
                      setTaskErrors(errors);
                    }

                    setFixedTask((prev) => ({
                      ...prev,
                      repeat: { ...prev.repeat, weeklyDay: 'friday' },
                    }));
                  }}
                />
                friday
              </label>
              <label htmlFor="saturday" className="flex gap-2 capitalize">
                <input
                  id="saturday"
                  type="radio"
                  name="weeklyDay"
                  className="w-11 h-11 accent-primary-900"
                  checked={fixedTask.repeat.weeklyDay === 'saturday'}
                  onChange={() => {
                    if (Object.hasOwn(taskErrors, 'weeklyDay')) {
                      const errors = { ...taskErrors };
                      delete errors.weeklyDay;
                      setTaskErrors(errors);
                    }

                    setFixedTask((prev) => ({
                      ...prev,
                      repeat: { ...prev.repeat, weeklyDay: 'saturday' },
                    }));
                  }}
                />
                saturday
              </label>
            </div>
            {Object.hasOwn(taskErrors, 'weeklyDay') && (
              <p className="mt-1.5 text-red-500">{taskErrors.weeklyDay}</p>
            )}
          </div>
        )}
        {fixedTask.repeat.repeatType === 'multiple_days' && (
          <div className="flex-1 flex flex-col gap-9 mt-20">
            <p>Days</p>
            <div className="flex justify-between gap-6">
              <label
                htmlFor="sunday"
                className="flex items-center gap-2 capitalize"
              >
                <input
                  id="sunday"
                  type="checkbox"
                  name="multipleDays"
                  className="appearance-none w-8 h-8 rounded-[3px] border-2 border-primary-900 checked:bg-primary-900"
                  checked={
                    fixedTask.repeat.multipleDays?.includes('sunday') ?? false
                  }
                  onChange={(e) => {
                    if (Object.hasOwn(taskErrors, 'multipleDays')) {
                      const errors = { ...taskErrors };
                      delete errors.multipleDays;
                      setTaskErrors(errors);
                    }

                    setFixedTask((prev) => ({
                      ...prev,
                      repeat: {
                        ...prev.repeat,
                        multipleDays: e.target.checked
                          ? [...(prev.repeat.multipleDays ?? []), 'sunday']
                          : (prev.repeat.multipleDays ?? []).filter(
                              (day) => day !== 'sunday',
                            ),
                      },
                    }));
                  }}
                />
                sunday
              </label>

              <label
                htmlFor="monday"
                className="flex items-center gap-2 capitalize"
              >
                <input
                  id="monday"
                  type="checkbox"
                  name="multipleDays"
                  className="appearance-none w-8 h-8 rounded-[3px] border-2 border-primary-900 checked:bg-primary-900"
                  checked={
                    fixedTask.repeat.multipleDays?.includes('monday') ?? false
                  }
                  onChange={(e) => {
                    if (Object.hasOwn(taskErrors, 'multipleDays')) {
                      const errors = { ...taskErrors };
                      delete errors.multipleDays;
                      setTaskErrors(errors);
                    }

                    setFixedTask((prev) => ({
                      ...prev,
                      repeat: {
                        ...prev.repeat,
                        multipleDays: e.target.checked
                          ? [...(prev.repeat.multipleDays ?? []), 'monday']
                          : (prev.repeat.multipleDays ?? []).filter(
                              (day) => day !== 'monday',
                            ),
                      },
                    }));
                  }}
                />
                monday
              </label>

              <label
                htmlFor="tuesday"
                className="flex items-center gap-2 capitalize"
              >
                <input
                  id="tuesday"
                  type="checkbox"
                  name="multipleDays"
                  className="appearance-none w-8 h-8 rounded-[3px] border-2 border-primary-900 checked:bg-primary-900"
                  checked={
                    fixedTask.repeat.multipleDays?.includes('tuesday') ?? false
                  }
                  onChange={(e) => {
                    if (Object.hasOwn(taskErrors, 'multipleDays')) {
                      const errors = { ...taskErrors };
                      delete errors.multipleDays;
                      setTaskErrors(errors);
                    }

                    setFixedTask((prev) => ({
                      ...prev,
                      repeat: {
                        ...prev.repeat,
                        multipleDays: e.target.checked
                          ? [...(prev.repeat.multipleDays ?? []), 'tuesday']
                          : (prev.repeat.multipleDays ?? []).filter(
                              (day) => day !== 'tuesday',
                            ),
                      },
                    }));
                  }}
                />
                tuesday
              </label>

              <label
                htmlFor="wednesday"
                className="flex items-center gap-2 capitalize"
              >
                <input
                  id="wednesday"
                  type="checkbox"
                  name="multipleDays"
                  className="appearance-none w-8 h-8 rounded-[3px] border-2 border-primary-900 checked:bg-primary-900"
                  checked={
                    fixedTask.repeat.multipleDays?.includes('wednesday') ??
                    false
                  }
                  onChange={(e) => {
                    if (Object.hasOwn(taskErrors, 'multipleDays')) {
                      const errors = { ...taskErrors };
                      delete errors.multipleDays;
                      setTaskErrors(errors);
                    }

                    setFixedTask((prev) => ({
                      ...prev,
                      repeat: {
                        ...prev.repeat,
                        multipleDays: e.target.checked
                          ? [...(prev.repeat.multipleDays ?? []), 'wednesday']
                          : (prev.repeat.multipleDays ?? []).filter(
                              (day) => day !== 'wednesday',
                            ),
                      },
                    }));
                  }}
                />
                wednesday
              </label>

              <label
                htmlFor="thursday"
                className="flex items-center gap-2 capitalize"
              >
                <input
                  id="thursday"
                  type="checkbox"
                  name="multipleDays"
                  className="appearance-none w-8 h-8 rounded-[3px] border-2 border-primary-900 checked:bg-primary-900"
                  checked={
                    fixedTask.repeat.multipleDays?.includes('thursday') ?? false
                  }
                  onChange={(e) => {
                    if (Object.hasOwn(taskErrors, 'multipleDays')) {
                      const errors = { ...taskErrors };
                      delete errors.multipleDays;
                      setTaskErrors(errors);
                    }

                    setFixedTask((prev) => ({
                      ...prev,
                      repeat: {
                        ...prev.repeat,
                        multipleDays: e.target.checked
                          ? [...(prev.repeat.multipleDays ?? []), 'thursday']
                          : (prev.repeat.multipleDays ?? []).filter(
                              (day) => day !== 'thursday',
                            ),
                      },
                    }));
                  }}
                />
                thursday
              </label>

              <label
                htmlFor="friday"
                className="flex items-center gap-2 capitalize"
              >
                <input
                  id="friday"
                  type="checkbox"
                  name="multipleDays"
                  className="appearance-none w-8 h-8 rounded-[3px] border-2 border-primary-900 checked:bg-primary-900"
                  checked={
                    fixedTask.repeat.multipleDays?.includes('friday') ?? false
                  }
                  onChange={(e) => {
                    if (Object.hasOwn(taskErrors, 'multipleDays')) {
                      const errors = { ...taskErrors };
                      delete errors.multipleDays;
                      setTaskErrors(errors);
                    }

                    setFixedTask((prev) => ({
                      ...prev,
                      repeat: {
                        ...prev.repeat,
                        multipleDays: e.target.checked
                          ? [...(prev.repeat.multipleDays ?? []), 'friday']
                          : (prev.repeat.multipleDays ?? []).filter(
                              (day) => day !== 'friday',
                            ),
                      },
                    }));
                  }}
                />
                friday
              </label>

              <label
                htmlFor="saturday"
                className="flex items-center gap-2 capitalize"
              >
                <input
                  id="saturday"
                  type="checkbox"
                  name="multipleDays"
                  className="appearance-none w-8 h-8 rounded-[3px] border-2 border-primary-900 checked:bg-primary-900"
                  checked={
                    fixedTask.repeat.multipleDays?.includes('saturday') ?? false
                  }
                  onChange={(e) => {
                    if (Object.hasOwn(taskErrors, 'multipleDays')) {
                      const errors = { ...taskErrors };
                      delete errors.multipleDays;
                      setTaskErrors(errors);
                    }

                    setFixedTask((prev) => ({
                      ...prev,
                      repeat: {
                        ...prev.repeat,
                        multipleDays: e.target.checked
                          ? [...(prev.repeat.multipleDays ?? []), 'saturday']
                          : (prev.repeat.multipleDays ?? []).filter(
                              (day) => day !== 'saturday',
                            ),
                      },
                    }));
                  }}
                />
                saturday
              </label>
            </div>
            {Object.hasOwn(taskErrors, 'multipleDays') && (
              <p className="mt-1.5 text-red-500">{taskErrors.multipleDays}</p>
            )}
          </div>
        )}
        {fixedTask.repeat.repeatType === 'monthly' && (
          <div className="flex-1 flex flex-col gap-9 mt-20">
            <p>Days</p>
            <div className="grid grid-cols-10 gap-6">
              {monthDays.map((day) => (
                <label
                  key={day}
                  htmlFor={`day-${day}`}
                  className="flex items-center gap-2"
                >
                  <input
                    id={`day-${day}`}
                    type="checkbox"
                    name="monthlyDays"
                    className="appearance-none w-8 h-8 rounded-[3px] border-2 border-primary-900 checked:bg-primary-900"
                    checked={
                      fixedTask.repeat.monthlyDays?.includes(day) ?? false
                    }
                    onChange={(e) => {
                      if (Object.hasOwn(taskErrors, 'monthlyDays')) {
                        const errors = { ...taskErrors };
                        delete errors.monthlyDays;
                        setTaskErrors(errors);
                      }

                      setFixedTask((prev) => ({
                        ...prev,
                        repeat: {
                          ...prev.repeat,
                          monthlyDays: e.target.checked
                            ? [...(prev.repeat.monthlyDays ?? []), day]
                            : (prev.repeat.monthlyDays ?? []).filter(
                                (selectedDay) => selectedDay !== day,
                              ),
                        },
                      }));
                    }}
                  />

                  {day}
                </label>
              ))}
            </div>
            {Object.hasOwn(taskErrors, 'monthlyDays') && (
              <p className="mt-1.5 text-red-500">{taskErrors.monthlyDays}</p>
            )}
          </div>
        )}
      </div>

      {/* /// P5 /// */}
      <div className="flex justify-end">
        <button
          type="button"
          className="flex items-center justify-center gap-5 px-8 py-5  text-primary-800 rounded-lg  text-2xl hover:bg-gray-100 border border-primary-800 transition-colors cursor-pointer"
          onClick={handleAddTask}
        >
          <span className="text-4xl font-light leading-none focus:outline-none">
            +
          </span>
          <span>Add Task</span>
        </button>
      </div>

      {/* /// P6 /// */}
      {formData.fixedTasks.length > 0 && (
        <FixedTasksSchedule
          fixedTasks={formData.fixedTasks}
          withActions={true}
          handleDeleteTask={handleDeleteTask}
        />
      )}
    </div>
  );
}
