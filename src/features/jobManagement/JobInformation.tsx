import type { FixedTask, JobDetails } from '@/types/job';
import Table from '../../components/Table';
import { useOutletContext } from 'react-router-dom';
import { EyeIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import Modal from '../../components/Modal';
import { DocumentIcon } from '@heroicons/react/24/outline';

export default function JobInformation() {
  const { job } = useOutletContext<{ job: JobDetails }>();
  const [selectedTask, setSelectedTask] = useState<FixedTask | null>(null);

  return (
    <>
      {/* 2. Job Details */}
      <section>
        <h2 className="mb-8 text-xs font-medium text-[#25459B]">Job Details</h2>

        <div className="grid grid-cols-4 gap-x-12 gap-y-5 rounded-lg border border-gray-200 p-12 text-xs capitalize">
          {/* Job Title */}
          <div>
            <p className="text-gray-400">Job Title</p>
            <p className="mt-4 font-medium text-gray-900">{job.title}</p>
          </div>

          {/* Department */}
          <div>
            <p className="text-gray-400">Department</p>
            <p className="mt-4 font-medium text-gray-900">
              {job.department.name}
            </p>
          </div>

          {/* Qualifications */}
          <div>
            <p className="text-gray-400">Qualifications</p>
            <div className="mt-4 max-h-20 overflow-y-auto font-medium text-gray-900">
              <p>
                {job.qualifications
                  .map((qualification) => qualification.name)
                  .join(', ')}
              </p>
            </div>
          </div>

          {/* Reporting Manager */}
          <div>
            <p className="text-gray-400">Reporting Manager</p>
            <p className="mt-4 font-medium text-gray-900">
              {job.reportingManager}
            </p>
          </div>

          {/* Job Description */}
          <div>
            <p className="text-gray-400">Job Description</p>
            <div className="mt-4 max-h-20 overflow-y-auto font-medium text-gray-900">
              <p>{job.description}</p>
            </div>
          </div>

          {/* Seniority Level */}
          <div>
            <p className="text-gray-400">Seniority Level</p>
            <p className="mt-4 font-medium text-gray-900">
              {job.seniorityLevel.name}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Job Schedule */}
      <section>
        <h2 className="mb-8 text-xs font-medium text-[#25459B]">
          Job Schedule
        </h2>

        <div className="rounded-lg border border-gray-200 p-14 text-xs capitalize">
          {job.scheduleType === 'shifts' ? (
            <p>Working based on assigned shifts</p>
          ) : (
            <div className="grid grid-cols-4">
              <div>
                <p className="text-gray-400">Schedule Type</p>
                <p className=" mt-4 font-medium text-gray-900">
                  {job.scheduleType}
                </p>
              </div>

              <div>
                <p className="text-gray-400">Check in</p>
                <p className=" mt-4 font-medium text-gray-900">
                  {`${job.fixedSchedule?.checkInFrom} - ${job.fixedSchedule?.checkInTo} am`}
                </p>
              </div>

              <div>
                <p className="text-gray-400">Check out</p>
                <p className=" mt-4 font-medium text-gray-900">{`${job.fixedSchedule?.checkOutFrom} - ${job.fixedSchedule?.checkOutTo} pm`}</p>
              </div>

              <div>
                <p className="text-gray-400">Hours of Work</p>
                <p className="mt-4 font-medium text-gray-900">
                  {job.fixedSchedule?.hoursPerDay}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. Performance Metrics */}
      <section>
        <h2 className="mb-8 text-xs font-medium text-[#25459B]">
          Performance Metrics
        </h2>
        <div className="rounded-lg border border-gray-200 overflow-hidden">
          <Table className="text-sm text-center">
            <Table.Header className="bg-gray-50">
              <Table.Row className="border-b border-gray-200 ">
                <Table.Cell className="w-[20%] font-medium text-gray-400 p-10">
                  Metric Name
                </Table.Cell>
                <Table.Cell className="w-[20%] font-medium text-gray-400 p-10">
                  Description
                </Table.Cell>
                <Table.Cell className="w-[20%] font-medium text-gray-400 p-10">
                  Measure
                </Table.Cell>
                <Table.Cell className="w-[20%] font-medium text-gray-400 p-10">
                  Target
                </Table.Cell>
                <Table.Cell className="w-[20%] font-medium text-gray-400 p-10">
                  Weight
                </Table.Cell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {job.performanceMetrics.map((metric) => (
                <Table.Row key={metric.name}>
                  <Table.Cell className="p-8 text-primary-600">
                    {metric.name}
                  </Table.Cell>
                  <Table.Cell className="p-8 text-primary-600 max-h-35 overflow-y-auto">
                    <div className="max-h-35 overflow-y-auto">
                      {metric.description}
                    </div>
                  </Table.Cell>
                  <Table.Cell className="p-8 text-primary-600">
                    {metric.measure}
                  </Table.Cell>
                  <Table.Cell className="p-8 text-primary-600">
                    {metric.target}
                  </Table.Cell>
                  <Table.Cell className="p-8 text-primary-600">
                    {metric.weight}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </section>

      {/* 5. Fixed Tasks */}
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
                  Details
                </Table.Cell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {job.fixedTasks.map((task) => (
                <Table.Row>
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
                      <div className="flex justify-center">
                        <button
                          className=" cursor-pointer"
                          onClick={() => setSelectedTask(task)}
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
        isOpen={selectedTask !== null}
        onClose={() => setSelectedTask(null)}
        className="flex flex-col gap-10 p-16 w-400"
      >
        <div className="flex gap-10">
          <p className="basis-70 text-gray-600">Name: </p>
          <p className="text-primary-900">{selectedTask?.name}</p>
        </div>

        <div className="flex gap-10">
          <p className="basis-70 text-gray-600">Description: </p>
          <p className="text-primary-900">{selectedTask?.description}</p>
        </div>

        <div className="flex gap-10">
          <p className="basis-70 text-gray-600">Steps: </p>
          <div className="flex flex-col gap-4">
            {selectedTask?.steps.map((step, idx) => (
              <p className="bg-gray-100 py-2 px-4 rounded-md">{`${idx + 1} - ${step}`}</p>
            ))}
          </div>
        </div>

        <div className="flex gap-10">
          <p className="basis-70 text-gray-600">Repeat: </p>
          <div className="text-primary-900">
            {selectedTask?.repeat.map((rep, idx) => (
              <p>{`${rep}${idx === selectedTask.repeat.length - 1 ? '' : ', '}`}</p>
            ))}
          </div>
        </div>

        <div className="flex gap-10">
          <p className="basis-70 text-gray-600">Submission Time: </p>
          <p className="text-primary-900">{selectedTask?.submissionTime}</p>
        </div>

        <div className="flex gap-10">
          <p className="basis-70 text-gray-600">Attachments: </p>
          <div className="flex flex-col gap-3">
            {selectedTask?.attachments.map((attachment) => (
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
      </Modal>
    </>
  );
}
