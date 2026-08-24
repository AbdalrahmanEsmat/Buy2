import { useState } from 'react';
import type { FixedTask } from '@/types';
import { EyeIcon, TrashIcon, DocumentIcon } from '@heroicons/react/24/outline';
import Table from '@/components/Table';
import Modal from '@/components/Modal';

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
  // handleEditTask,
}: Props) {
  const [selectedTask, setSelectedTask] = useState<FixedTask | null>(null);
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
                          <button
                            type="button"
                            className=" cursor-pointer"
                            onClick={() => handleDeleteTask?.(idx)}
                          >
                            <TrashIcon className="w-8 h-8 text-red-500" />
                          </button>
                        )}
                        <button
                          type="button"
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
            <p>{selectedTask?.repeat.repeatType}</p>
          </div>
        </div>

        {selectedTask?.repeat.repeatType !== 'daily' && (
          <div className="flex gap-10">
            <p className="basis-70 text-gray-600">
              {selectedTask?.repeat.repeatType === 'weekly' ? 'Day: ' : 'Days'}
            </p>
            <div className="text-primary-900">
              <p>
                {selectedTask?.repeat.repeatType === 'weekly'
                  ? selectedTask?.repeat.weeklyDay
                  : selectedTask?.repeat.repeatType === 'multiple_days'
                    ? selectedTask?.repeat.multipleDays?.map((day) => (
                        <span className="mr-1.5 bg-gray-200 p-2 rounded-lg">
                          {day}
                        </span>
                      ))
                    : selectedTask?.repeat.monthlyDays?.map((day) => (
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
          <p className="text-primary-900">{selectedTask?.submissionTime}</p>
        </div>

        {selectedTask?.attachments.length !== 0 && (
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
        )}
      </Modal>
    </>
  );
}
