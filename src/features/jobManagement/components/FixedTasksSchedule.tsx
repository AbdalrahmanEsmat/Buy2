import { useRef, useState } from 'react';
import type { FixedTask } from '@/types';
import {
  PencilIcon,
  EyeIcon,
  TrashIcon,
  DocumentIcon,
} from '@heroicons/react/24/outline';
import Table from '@/components/Table';
import Modal from '@/components/Modal';
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';

type Props = {
  fixedTasks: FixedTask[];
  withActions?: boolean;
  handleDeleteTask?: (id: number) => void;
  handleEditTask?: (id: number, metric: FixedTask) => void;
};

export default function FixedTasksSchedule({
  fixedTasks,
  withActions = false,
  handleDeleteTask,
  handleEditTask,
}: Props) {
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [toBeEditedTaskIdx, setToBeEditedTaskIdx] = useState<number>(0);
  const [selectedTaskEdit, setSelectedTaskEdit] = useState<FixedTask>(
    fixedTasks[toBeEditedTaskIdx],
  );
  const [selectedTaskDetails, setSelectedTaskDetails] =
    useState<FixedTask | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [fileError, setFileError] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const monthDays = Array.from({ length: 31 }, (_, i) => i + 1);

  const JOB_MANAGEMENT_FILES_PATH = '../../../mocks/FakeFiles/jobManagement';

  // valkidate task
  function validateTask() {
    const errors: Record<string, string> = {};

    // check the name
    if (!selectedTaskEdit.name.trim()) {
      errors.name = 'Task name is required';
    } else {
      const isDuplicate = fixedTasks.some(
        (fixedTask, index) =>
          index !== toBeEditedTaskIdx &&
          fixedTask.name.trim().toLowerCase() ===
            selectedTaskEdit.name.trim().toLowerCase(),
      );

      if (isDuplicate) {
        errors.name = 'Task name already exists';
      }
    }

    // check the description
    if (!selectedTaskEdit.description.trim()) {
      errors.description = 'Description is required';
    }

    // check the steps
    if (selectedTaskEdit.steps.length < 2) {
      errors.steps = 'At least 2 steps are required';
    } else if (selectedTaskEdit.steps.some((step) => !step.trim())) {
      errors.steps = 'Steps cannot be empty';
    }

    const hasDuplicateSteps = selectedTaskEdit.steps.some(
      (step, index) =>
        selectedTaskEdit.steps.findIndex(
          (currentStep) =>
            currentStep.trim().toLowerCase() === step.trim().toLowerCase(),
        ) !== index,
    );

    if (hasDuplicateSteps) {
      errors.steps = 'Steps cannot be duplicated';
    }

    // check files
    if (selectedTaskEdit.attachments.length === 0) {
      errors.attachment = 'At least include one attachment';
    }

    // check submission time
    if (!selectedTaskEdit.submissionTime.trim()) {
      errors.submissionTime = 'Submission time is required';
    }

    // check if repeat type is weekly and day is not specified
    if (
      selectedTaskEdit.repeat.repeatType === 'weekly' &&
      !selectedTaskEdit.repeat.weeklyDay
    ) {
      errors.weeklyDay = 'You have to specify a day';
    }

    // check if repeat type is multiple days and no days are specified
    if (
      selectedTaskEdit.repeat.repeatType === 'multiple_days' &&
      !selectedTaskEdit.repeat.multipleDays?.length
    ) {
      errors.multipleDays = 'You have to specify the days';
    }

    // check if repeat type is monthly and no days are specified
    if (
      selectedTaskEdit.repeat.repeatType === 'monthly' &&
      !selectedTaskEdit.repeat.monthlyDays?.length
    ) {
      errors.monthlyDays = 'You have to specify the days';
    }

    return errors;
  }

  // handle delete task
  function handleDeleteStep(idx: number) {
    setSelectedTaskEdit((prev) => ({
      ...prev,
      steps: prev.steps.filter((_, i) => i !== idx),
    }));
  }

  // handle changing in step
  function handleStepOnChange(idx: number, value: string) {
    setErrors((prev) => ({ ...prev, steps: '' }));

    setSelectedTaskEdit((prev) => ({
      ...prev,
      steps: prev.steps.map((step, stepIdx) =>
        stepIdx === idx ? value : step,
      ),
    }));
  }

  // handle file upload
  function handleFileUpload(file: File) {
    if (Object.hasOwn(errors, 'attachment')) {
      const newErrors = { ...errors };
      delete newErrors.attachment;
      setErrors(newErrors);
    }

    const allowedTypes = ['application/pdf', 'image/png', 'image/jpeg'];

    // check the file type
    if (!allowedTypes.includes(file.type)) {
      setFileError('invalid type');
      return;
    }

    // check the file size
    if (file.size > 5 * 1024 * 1024) {
      setFileError('file is too large');
      return;
    }

    // check the duplication
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

    // generating the file path
    const filePath = `${JOB_MANAGEMENT_FILES_PATH}/${file.name}`;

    setUploadedFiles((prev) => [...prev, file]);
    setSelectedTaskEdit((prev) => ({
      ...prev,
      attachments: [...prev.attachments, filePath],
    }));
    setFileError('');
  }

  // handle delelete file
  function handleDeleteFile(idx: number) {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== idx));
    setSelectedTaskEdit((prev) => ({
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
    if (
      value.length === 5 &&
      selectedTaskEdit.submissionTime.length < value.length
    ) {
      setSelectedTaskEdit((prev) => ({
        ...prev,
        submissionTime: `${value} - `,
      }));
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

    if (
      value.length === 9 &&
      selectedTaskEdit.submissionTime.length < value.length
    ) {
      setSelectedTaskEdit((prev) => ({ ...prev, submissionTime: `${value}m` }));
      return;
    }

    setSelectedTaskEdit((prev) => ({ ...prev, submissionTime: value }));
  }

  console.log(selectedTaskEdit);

  return (
    <>
      <section>
        <h2 className="mb-8 text-xs font-medium text-[#25459B]">Fixed Tasks</h2>

        <div className="rounded-lg border border-gray-200 overflow-hidden">
          <Table className="text-sm text-center">
            <Table.Header className="bg-gray-50">
              <Table.Row className="border-b border-gray-200">
                <Table.Cell className="w-[20%] font-medium text-gray-400 p-10">
                  Task Name
                </Table.Cell>
                <Table.Cell className="w-[20%] font-medium text-gray-400 p-10">
                  Description
                </Table.Cell>
                <Table.Cell className="w-[20%] font-medium text-gray-400 p-10">
                  {withActions ? 'Actions' : 'Details'}
                </Table.Cell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {fixedTasks.map((task, idx) => (
                <Table.Row key={idx}>
                  <Table.Cell className="p-8 text-primary-600">
                    {task.name}
                  </Table.Cell>
                  <Table.Cell className="p-8 text-primary-600">
                    <div className="max-h-35 overflow-y-auto">
                      {task.description}
                    </div>
                  </Table.Cell>
                  <Table.Cell className="p-8 text-primary-600">
                    {
                      <div className="flex justify-center gap-5">
                        {withActions && (
                          <>
                            <button
                              type="button"
                              className="cursor-pointer"
                              onClick={() => {
                                setIsEditModalOpen(true);
                                setToBeEditedTaskIdx(idx);
                                setSelectedTaskEdit(fixedTasks[idx]);
                              }}
                            >
                              <PencilIcon className="size-8 text-blue-600" />
                            </button>
                            <button
                              type="button"
                              className="cursor-pointer"
                              onClick={() => handleDeleteTask?.(idx)}
                            >
                              <TrashIcon className="w-8 h-8 text-red-500" />
                            </button>
                          </>
                        )}
                        <button
                          type="button"
                          className="cursor-pointer"
                          onClick={() => {
                            setSelectedTaskDetails(task);
                          }}
                        >
                          <EyeIcon className="size-10 text-blue-600" />
                        </button>
                      </div>
                    }
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </section>
      <Modal
        isOpen={selectedTaskDetails !== null}
        onClose={() => setSelectedTaskDetails(null)}
        className="flex flex-col gap-10 p-16 w-400"
      >
        <div className="flex gap-10">
          <p className="basis-70 text-gray-600">Name: </p>
          <p className="text-primary-900">{selectedTaskDetails?.name}</p>
        </div>

        <div className="flex gap-10">
          <p className="basis-70 text-gray-600">Description: </p>
          <p className="text-primary-900">{selectedTaskDetails?.description}</p>
        </div>

        <div className="flex gap-10">
          <p className="basis-70 text-gray-600">Steps: </p>
          <div className="flex flex-col gap-4">
            {selectedTaskDetails?.steps.map((step, idx) => (
              <p className="bg-gray-100 py-2 px-4 rounded-md">{`${idx + 1} - ${step}`}</p>
            ))}
          </div>
        </div>

        <div className="flex gap-10">
          <p className="basis-70 text-gray-600">Repeat: </p>
          <div className="text-primary-900">
            <p>{selectedTaskDetails?.repeat.repeatType}</p>
          </div>
        </div>

        {selectedTaskDetails?.repeat.repeatType !== 'daily' && (
          <div className="flex gap-10">
            <p className="basis-70 text-gray-600">
              {selectedTaskDetails?.repeat.repeatType === 'weekly'
                ? 'Day: '
                : 'Days'}
            </p>
            <div className="text-primary-900">
              <p>
                {selectedTaskDetails?.repeat.repeatType === 'weekly'
                  ? selectedTaskDetails?.repeat.weeklyDay
                  : selectedTaskDetails?.repeat.repeatType === 'multiple_days'
                    ? selectedTaskDetails?.repeat.multipleDays?.map((day) => (
                        <span className="mr-1.5 bg-gray-200 p-2 rounded-lg">
                          {day}
                        </span>
                      ))
                    : selectedTaskDetails?.repeat.monthlyDays?.map((day) => (
                        <span
                          key={day}
                          className="mr-1.5 bg-gray-200 p-2 rounded-lg"
                        >
                          {day}
                        </span>
                      ))}
              </p>
            </div>
          </div>
        )}

        <div className="flex gap-10">
          <p className="basis-70 text-gray-600">Submission Time: </p>
          <p className="text-primary-900">
            {selectedTaskDetails?.submissionTime}
          </p>
        </div>

        {selectedTaskDetails?.attachments.length !== 0 && (
          <div className="flex gap-10">
            <p className="basis-70 text-gray-600">Attachments: </p>
            <div className="flex flex-col gap-3">
              {selectedTaskDetails?.attachments.map((attachment) => (
                <a
                  key={attachment}
                  href={attachment}
                  download
                  className="flex items-center gap-4 text-sm bg-gray-100 py-2 px-4 rounded-md text-blue-900"
                >
                  <DocumentIcon className="size-10 text-blue-900" />
                  {attachment.split('/').pop()}
                </a>
              ))}
            </div>
          </div>
        )}
      </Modal>
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setErrors({});
        }}
      >
        <div className="flex flex-col gap-7 w-250 rounded-lg bg-white p-10">
          <h2 className="text-2xl font-semibold text-primary-700">
            Edit Fixed Task
          </h2>

          <div className="flex flex-col gap-10">
            {/* Task Name */}
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Task Name"
                value={selectedTaskEdit.name}
                onChange={(e) => {
                  setErrors((prev) => ({ ...prev, name: '' }));
                  setSelectedTaskEdit((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }));
                }}
                className={`rounded-lg bg-gray-100 px-5 py-4 outline-none focus:ring-2 focus:ring-primary-700 border ${
                  errors.name && 'border-red-500'
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            {/* Description */}
            <div className="col-span-2 flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-600">
                Description
              </label>
              <textarea
                placeholder="Description"
                value={selectedTaskEdit.description}
                onChange={(e) => {
                  setErrors((prev) => ({ ...prev, description: '' }));
                  setSelectedTaskEdit((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }));
                }}
                rows={4}
                className={`resize-none rounded-lg bg-gray-100 px-5 py-4 outline-none focus:ring-2 focus:ring-primary-700 border ${
                  errors.description && 'border-red-500'
                }`}
              />
              {errors.description && (
                <p className="text-red-500 text-sm">{errors.description}</p>
              )}
            </div>

            {/* Steps */}
            <div className="col-span-2 flex flex-col gap-5">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-base font-medium text-slate-700">Steps</h3>
                <button
                  type="button"
                  onClick={() =>
                    setSelectedTaskEdit((prev) => ({
                      ...prev,
                      steps: [...prev.steps, ''],
                    }))
                  }
                  className="text-lg text-white bg-primary-600 cursor-pointer px-5 py-2 rounded-md"
                  aria-label="Add step"
                >
                  + Add step
                </button>
              </div>

              <div className="flex flex-col gap-3">
                {selectedTaskEdit.steps.map((step, idx) => (
                  <div className="flex rounded-lg bg-gray-100 px-5 py-4">
                    <input
                      key={idx}
                      type="text"
                      value={step}
                      onChange={(e) => handleStepOnChange(idx, e.target.value)}
                      className="flex-1 outline-none"
                    />
                    <button
                      type="button"
                      className="cursor-pointer"
                      onClick={() => handleDeleteStep(idx)}
                    >
                      <TrashIcon className="w-8 h-8 text-red-500" />
                    </button>{' '}
                  </div>
                ))}
              </div>
              {errors.steps && <p className="text-red-500">{errors.steps}</p>}
            </div>

            {/* attachments */}
            <div className="col-span-2 flex flex-col gap-5">
              <label className="text-sm font-medium text-gray-600">
                Attachments
              </label>

              <div className="flex flex-col gap-3">
                {selectedTaskEdit.attachments.map((attachment, idx) => (
                  <div className="flex rounded-lg bg-gray-100 px-5 py-4">
                    <a
                      href={attachment}
                      download
                      key={idx}
                      className="flex-1 flex gap-5 cursor-pointer"
                    >
                      <DocumentIcon className="size-10 text-blue-900" />
                      {attachment.split('/').pop()}
                    </a>
                    <button
                      type="button"
                      className="cursor-pointer"
                      onClick={() => handleDeleteFile(idx)}
                    >
                      <TrashIcon className="w-8 h-8 text-red-500" />
                    </button>{' '}
                  </div>
                ))}
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
                  className={`flex flex-col items-center gap-3 border rounded-lg p-10 cursor-pointer ${fileError.length > 0 || Object.hasOwn(errors, 'attachment') ? 'border-red-500' : 'border-gray-200'} ${isDragging && 'bg-gray-50'}`}
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
                    <span className="text-black">Click to upload</span> or Drag
                    & Drop
                  </p>
                  <p className="text-gray-400 text-sm">
                    PDF, PNG, Or JPG (Max 5 Mb)
                  </p>
                </div>
                {fileError && <p className="text-red-500">{fileError}</p>}
              </div>
              {errors.attachment && (
                <p className="text-red-500">{errors.attachment}</p>
              )}
            </div>

            {/* Submission Time */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-600">
                Submission Time
              </label>
              <input
                id="submissionTime"
                type="text"
                value={selectedTaskEdit.submissionTime}
                placeholder="HH:MM - AM"
                maxLength={10}
                className={`flex rounded-lg bg-gray-100 px-5 py-4 focus:outline-primary-400 uppercase ${Object.hasOwn(errors, 'submissionTime') && 'border border-red-500'}`}
                required
                onChange={(e) => {
                  if (Object.hasOwn(errors, 'submissionTime')) {
                    const newErrors = { ...errors };
                    delete newErrors.submissionTime;
                    setErrors(newErrors);
                  }

                  handleSubmissionTime(e.target.value);
                }}
              />
              {errors.submissionTime && (
                <p className="text-red-500">{errors.submissionTime}</p>
              )}
            </div>

            {/* Repeat */}
            <div className="col-span-2 flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-600">
                Repeat
              </label>

              <select
                value={selectedTaskEdit.repeat.repeatType}
                className="rounded-lg bg-gray-100 px-5 py-4 outline-none focus:ring-2 focus:ring-primary-700"
                onChange={(e) =>
                  setSelectedTaskEdit((prev) => ({
                    ...prev,
                    repeat: {
                      repeatType: e.target
                        .value as FixedTask['repeat']['repeatType'],
                    },
                  }))
                }
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="multiple_days">Multiple Days</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>
          </div>

          {selectedTaskEdit.repeat.repeatType === 'weekly' && (
            <div className="flex-1 flex flex-col gap-9 mt-20">
              <p>Day</p>
              <div className="grid grid-cols-4 gap-y-4">
                <label
                  htmlFor="sunday"
                  className="flex items-center gap-2 capitalize text-sm"
                >
                  <input
                    id="sunday"
                    type="radio"
                    name="weeklyDay"
                    className="w-7 h-7 accent-primary-900"
                    checked={selectedTaskEdit.repeat.weeklyDay === 'sunday'}
                    onChange={() => {
                      if (Object.hasOwn(errors, 'weeklyDay')) {
                        const newErrors = { ...errors };
                        delete newErrors.weeklyDay;
                        setErrors(newErrors);
                      }

                      setSelectedTaskEdit((prev) => ({
                        ...prev,
                        repeat: { ...prev.repeat, weeklyDay: 'sunday' },
                      }));
                    }}
                  />
                  sunday
                </label>
                <label
                  htmlFor="monday"
                  className="flex items-center gap-2 capitalize text-sm"
                >
                  <input
                    id="monday"
                    type="radio"
                    name="weeklyDay"
                    className="w-7 h-7 accent-primary-900"
                    checked={selectedTaskEdit.repeat.weeklyDay === 'monday'}
                    onChange={() => {
                      if (Object.hasOwn(errors, 'weeklyDay')) {
                        const newErrors = { ...errors };
                        delete newErrors.weeklyDay;
                        setErrors(newErrors);
                      }

                      setSelectedTaskEdit((prev) => ({
                        ...prev,
                        repeat: { ...prev.repeat, weeklyDay: 'monday' },
                      }));
                    }}
                  />
                  monday
                </label>

                <label
                  htmlFor="tuesday"
                  className="flex items-center gap-2 capitalize text-sm"
                >
                  <input
                    id="tuesday"
                    type="radio"
                    name="weeklyDay"
                    className="w-7 h-7 accent-primary-900"
                    checked={selectedTaskEdit.repeat.weeklyDay === 'tuesday'}
                    onChange={() => {
                      if (Object.hasOwn(errors, 'weeklyDay')) {
                        const newErrors = { ...errors };
                        delete newErrors.weeklyDay;
                        setErrors(newErrors);
                      }

                      setSelectedTaskEdit((prev) => ({
                        ...prev,
                        repeat: { ...prev.repeat, weeklyDay: 'tuesday' },
                      }));
                    }}
                  />
                  tuesday
                </label>

                <label
                  htmlFor="wednesday"
                  className="flex items-center gap-2 capitalize text-sm"
                >
                  <input
                    id="wednesday"
                    type="radio"
                    name="weeklyDay"
                    className="w-7 h-7 accent-primary-900"
                    checked={selectedTaskEdit.repeat.weeklyDay === 'wednesday'}
                    onChange={() => {
                      if (Object.hasOwn(errors, 'weeklyDay')) {
                        const newErrors = { ...errors };
                        delete newErrors.weeklyDay;
                        setErrors(newErrors);
                      }

                      setSelectedTaskEdit((prev) => ({
                        ...prev,
                        repeat: { ...prev.repeat, weeklyDay: 'wednesday' },
                      }));
                    }}
                  />
                  wednesday
                </label>

                <label
                  htmlFor="thursday"
                  className="flex items-center gap-2 capitalize text-sm"
                >
                  <input
                    id="thursday"
                    type="radio"
                    name="weeklyDay"
                    className="w-7 h-7 accent-primary-900"
                    checked={selectedTaskEdit.repeat.weeklyDay === 'thursday'}
                    onChange={() => {
                      if (Object.hasOwn(errors, 'weeklyDay')) {
                        const newErrors = { ...errors };
                        delete newErrors.weeklyDay;
                        setErrors(newErrors);
                      }

                      setSelectedTaskEdit((prev) => ({
                        ...prev,
                        repeat: { ...prev.repeat, weeklyDay: 'thursday' },
                      }));
                    }}
                  />
                  thursday
                </label>

                <label
                  htmlFor="friday"
                  className="flex items-center gap-2 capitalize text-sm"
                >
                  <input
                    id="friday"
                    type="radio"
                    name="weeklyDay"
                    className="w-7 h-7 accent-primary-900"
                    checked={selectedTaskEdit.repeat.weeklyDay === 'friday'}
                    onChange={() => {
                      if (Object.hasOwn(errors, 'weeklyDay')) {
                        const newErrors = { ...errors };
                        delete newErrors.weeklyDay;
                        setErrors(newErrors);
                      }

                      setSelectedTaskEdit((prev) => ({
                        ...prev,
                        repeat: { ...prev.repeat, weeklyDay: 'friday' },
                      }));
                    }}
                  />
                  friday
                </label>

                <label
                  htmlFor="saturday"
                  className="flex items-center gap-2 capitalize text-sm"
                >
                  <input
                    id="saturday"
                    type="radio"
                    name="weeklyDay"
                    className="w-7 h-7 accent-primary-900"
                    checked={selectedTaskEdit.repeat.weeklyDay === 'saturday'}
                    onChange={() => {
                      if (Object.hasOwn(errors, 'weeklyDay')) {
                        const newErrors = { ...errors };
                        delete newErrors.weeklyDay;
                        setErrors(newErrors);
                      }

                      setSelectedTaskEdit((prev) => ({
                        ...prev,
                        repeat: { ...prev.repeat, weeklyDay: 'saturday' },
                      }));
                    }}
                  />
                  saturday
                </label>
              </div>
              {Object.hasOwn(errors, 'weeklyDay') && (
                <p className="mt-1.5 text-red-500">{errors.weeklyDay}</p>
              )}
            </div>
          )}

          {selectedTaskEdit.repeat.repeatType === 'multiple_days' && (
            <div className="flex-1 flex flex-col gap-9 mt-20">
              <p>Days</p>

              <div className="grid grid-cols-4 gap-6">
                <label
                  htmlFor="sunday"
                  className="flex items-center gap-2 capitalize text-sm"
                >
                  <input
                    id="sunday"
                    type="checkbox"
                    name="multipleDays"
                    className="appearance-none w-7 h-7 rounded-[3px] border-2 border-primary-900 checked:bg-primary-900"
                    checked={
                      selectedTaskEdit.repeat.multipleDays?.includes(
                        'sunday',
                      ) ?? false
                    }
                    onChange={(e) => {
                      if (Object.hasOwn(errors, 'multipleDays')) {
                        const newErrors = { ...errors };
                        delete newErrors.multipleDays;
                        setErrors(newErrors);
                      }

                      setSelectedTaskEdit((prev) => ({
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
                  className="flex items-center gap-2 capitalize text-sm"
                >
                  <input
                    id="monday"
                    type="checkbox"
                    name="multipleDays"
                    className="appearance-none w-7 h-7 rounded-[3px] border-2 border-primary-900 checked:bg-primary-900"
                    checked={
                      selectedTaskEdit.repeat.multipleDays?.includes(
                        'monday',
                      ) ?? false
                    }
                    onChange={(e) => {
                      if (Object.hasOwn(errors, 'multipleDays')) {
                        const newErrors = { ...errors };
                        delete newErrors.multipleDays;
                        setErrors(newErrors);
                      }

                      setSelectedTaskEdit((prev) => ({
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
                  className="flex items-center gap-2 capitalize text-sm"
                >
                  <input
                    id="tuesday"
                    type="checkbox"
                    name="multipleDays"
                    className="appearance-none w-7 h-7 rounded-[3px] border-2 border-primary-900 checked:bg-primary-900"
                    checked={
                      selectedTaskEdit.repeat.multipleDays?.includes(
                        'tuesday',
                      ) ?? false
                    }
                    onChange={(e) => {
                      if (Object.hasOwn(errors, 'multipleDays')) {
                        const newErrors = { ...errors };
                        delete newErrors.multipleDays;
                        setErrors(newErrors);
                      }

                      setSelectedTaskEdit((prev) => ({
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
                  className="flex items-center gap-2 capitalize text-sm"
                >
                  <input
                    id="wednesday"
                    type="checkbox"
                    name="multipleDays"
                    className="appearance-none w-7 h-7 rounded-[3px] border-2 border-primary-900 checked:bg-primary-900"
                    checked={
                      selectedTaskEdit.repeat.multipleDays?.includes(
                        'wednesday',
                      ) ?? false
                    }
                    onChange={(e) => {
                      if (Object.hasOwn(errors, 'multipleDays')) {
                        const newErrors = { ...errors };
                        delete newErrors.multipleDays;
                        setErrors(newErrors);
                      }

                      setSelectedTaskEdit((prev) => ({
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
                  className="flex items-center gap-2 capitalize text-sm"
                >
                  <input
                    id="thursday"
                    type="checkbox"
                    name="multipleDays"
                    className="appearance-none w-7 h-7 rounded-[3px] border-2 border-primary-900 checked:bg-primary-900"
                    checked={
                      selectedTaskEdit.repeat.multipleDays?.includes(
                        'thursday',
                      ) ?? false
                    }
                    onChange={(e) => {
                      if (Object.hasOwn(errors, 'multipleDays')) {
                        const newErrors = { ...errors };
                        delete newErrors.multipleDays;
                        setErrors(newErrors);
                      }

                      setSelectedTaskEdit((prev) => ({
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
                  className="flex items-center gap-2 capitalize text-sm"
                >
                  <input
                    id="friday"
                    type="checkbox"
                    name="multipleDays"
                    className="appearance-none w-7 h-7 rounded-[3px] border-2 border-primary-900 checked:bg-primary-900"
                    checked={
                      selectedTaskEdit.repeat.multipleDays?.includes(
                        'friday',
                      ) ?? false
                    }
                    onChange={(e) => {
                      if (Object.hasOwn(errors, 'multipleDays')) {
                        const newErrors = { ...errors };
                        delete newErrors.multipleDays;
                        setErrors(newErrors);
                      }

                      setSelectedTaskEdit((prev) => ({
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
                  className="flex items-center gap-2 capitalize text-sm"
                >
                  <input
                    id="saturday"
                    type="checkbox"
                    name="multipleDays"
                    className="appearance-none w-7 h-7 rounded-[3px] border-2 border-primary-900 checked:bg-primary-900"
                    checked={
                      selectedTaskEdit.repeat.multipleDays?.includes(
                        'saturday',
                      ) ?? false
                    }
                    onChange={(e) => {
                      if (Object.hasOwn(errors, 'multipleDays')) {
                        const newErrors = { ...errors };
                        delete newErrors.multipleDays;
                        setErrors(newErrors);
                      }

                      setSelectedTaskEdit((prev) => ({
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

              {Object.hasOwn(errors, 'multipleDays') && (
                <p className="mt-1.5 text-red-500">{errors.multipleDays}</p>
              )}
            </div>
          )}

          {selectedTaskEdit.repeat.repeatType === 'monthly' && (
            <div className="flex-1 flex flex-col gap-9 mt-20">
              <p>Days</p>

              <div className="grid grid-cols-10 gap-6">
                {monthDays.map((day) => (
                  <label
                    key={day}
                    htmlFor={`day-${day}`}
                    className="flex items-center gap-2 text-sm"
                  >
                    <input
                      id={`day-${day}`}
                      type="checkbox"
                      name="monthlyDays"
                      className="appearance-none w-7 h-7 rounded-[3px] border-2 border-primary-900 checked:bg-primary-900"
                      checked={
                        selectedTaskEdit.repeat.monthlyDays?.includes(day) ??
                        false
                      }
                      onChange={(e) => {
                        if (Object.hasOwn(errors, 'monthlyDays')) {
                          const newErrors = { ...errors };
                          delete newErrors.monthlyDays;
                          setErrors(newErrors);
                        }

                        setSelectedTaskEdit((prev) => ({
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

              {Object.hasOwn(errors, 'monthlyDays') && (
                <p className="mt-1.5 text-red-500">{errors.monthlyDays}</p>
              )}
            </div>
          )}
          {/* buttons */}
          <div className="flex justify-end gap-5">
            <button
              type="button"
              onClick={() => setIsEditModalOpen(false)}
              className="cursor-pointer px-6 py-3 text-red-500"
            >
              Cancel
            </button>

            <button
              type="button"
              className="cursor-pointer rounded-lg bg-primary-700 px-8 py-3 text-white"
              onClick={() => {
                const validationErrors = validateTask();
                setErrors(validationErrors);

                if (Object.keys(validationErrors).length > 0) {
                  return;
                }

                handleEditTask?.(toBeEditedTaskIdx, selectedTaskEdit);
                setIsEditModalOpen(false);
              }}
            >
              Save
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
