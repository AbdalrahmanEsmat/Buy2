import type { PerformanceMetric } from '../../../types';
import Table from '../../../components/Table';
import { TrashIcon } from '@heroicons/react/24/outline';
import { PencilIcon } from '@heroicons/react/24/solid';
import Modal from '@/components/Modal';
import { useState } from 'react';

type Props = {
  performanceMetrics: PerformanceMetric[];
  withActions?: boolean;
  handleDeleteMetric?: (id: number) => void;
  handleEditMetric?: (id: number, metric: PerformanceMetric) => void;
};

export default function PerformanceMetricsSchedule({
  performanceMetrics,
  withActions = false,
  handleDeleteMetric,
  handleEditMetric,
}: Props) {
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [toBeEdited, setToBeEdited] = useState<number>(0);
  const [metric, setMetric] = useState<PerformanceMetric>(
    performanceMetrics[0],
  );
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validateMetric() {
    const errors: Record<string, string> = {};

    if (!metric.name.trim()) {
      errors.name = 'Metric name is required';
    }

    if (!metric.description.trim()) {
      errors.description = 'Description is required';
    }

    if (
      metric.measure === undefined ||
      metric.measure === null ||
      metric.measure === 0
    ) {
      errors.measure = 'Measure is required';
    } else if (metric.measure > 100) {
      errors.measure = 'Measure cannot exceed 100';
    }

    if (
      metric.target === undefined ||
      metric.target === null ||
      metric.target === 0
    ) {
      errors.target = 'Target is required';
    } else if (metric.target > 100) {
      errors.target = 'Target cannot exceed 100';
    }

    if (
      metric.weight === undefined ||
      metric.weight === null ||
      metric.weight === 0
    ) {
      errors.weight = 'Weight is required';
    } else if (metric.weight > 100) {
      errors.weight = 'Weight cannot exceed 100';
    }

    return errors;
  }

  return (
    <section>
      <h2 className="mb-8 text-xs font-medium text-[#25459B]">
        Performance Metrics
      </h2>

      <div className="rounded-lg border border-gray-200 overflow-hidden">
        <Table className="text-sm text-center">
          <Table.Header className="bg-gray-50">
            <Table.Row className="border-b border-gray-200">
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

              {withActions && (
                <Table.Cell className="w-[20%] font-medium text-gray-400 p-10">
                  Actions
                </Table.Cell>
              )}
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {performanceMetrics.map((metric, idx) => (
              <Table.Row key={metric.name}>
                <Table.Cell className="p-8 text-primary-600">
                  {metric.name}
                </Table.Cell>

                <Table.Cell className="p-8 text-primary-600">
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
                {withActions && (
                  <Table.Cell className="p-8 text-primary-600">
                    <button
                      type="button"
                      className="cursor-pointer mr-5"
                      onClick={() => {
                        setIsEditModalOpen(true);
                        setToBeEdited(idx);
                        setMetric(performanceMetrics[idx]);
                      }}
                    >
                      <PencilIcon className="size-8 text-blue-600" />
                    </button>
                    <button
                      type="button"
                      className="cursor-pointer"
                      onClick={() => handleDeleteMetric?.(idx)}
                    >
                      <TrashIcon className="w-8 h-8 text-red-500" />
                    </button>
                  </Table.Cell>
                )}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        <Modal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
        >
          <div className="flex flex-col gap-7 rounded-lg bg-white p-10">
            <h2 className="text-2xl font-semibold text-primary-700">
              Edit Performance Metric
            </h2>

            <div className="grid grid-cols-2 gap-x-8 gap-y-7">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-600">
                  Metric Name
                </label>
                <input
                  type="text"
                  placeholder="Metric Name"
                  value={metric.name}
                  onChange={(e) => {
                    setErrors((prev) => ({ ...prev, name: '' }));
                    setMetric((prev) => ({ ...prev, name: e.target.value }));
                  }}
                  className={`rounded-lg bg-gray-100 px-5 py-4 outline-none focus:ring-2 focus:ring-primary-700 border ${errors.name && 'border-red-500'}`}
                />
                {errors.name && <p className="text-red-500">{errors.name}</p>}
              </div>

              {/* Measure */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-600">
                  Measure
                </label>
                <input
                  type="number"
                  placeholder="Measure"
                  value={metric.measure}
                  onChange={(e) => {
                    setErrors((prev) => ({ ...prev, measure: '' }));
                    setMetric((prev) => ({
                      ...prev,
                      measure: Number(e.target.value),
                    }));
                  }}
                  className={`rounded-lg bg-gray-100 px-5 py-4 outline-none focus:ring-2 focus:ring-primary-700 border ${errors.measure && 'border-red-500'}`}
                />
                {errors.measure && (
                  <p className="text-red-500">{errors.measure}</p>
                )}
              </div>

              {/* Target */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-600">
                  Target
                </label>
                <input
                  type="number"
                  placeholder="Target"
                  value={metric.target}
                  onChange={(e) => {
                    setErrors((prev) => ({ ...prev, target: '' }));
                    setMetric((prev) => ({
                      ...prev,
                      target: Number(e.target.value),
                    }));
                  }}
                  className={`rounded-lg bg-gray-100 px-5 py-4 outline-none focus:ring-2 focus:ring-primary-700 border ${errors.target && 'border-red-500'}`}
                />
                {errors.target && (
                  <p className="text-red-500">{errors.target}</p>
                )}
              </div>

              {/* Weight */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-600">
                  Weight
                </label>
                <input
                  type="number"
                  placeholder="Weight"
                  value={metric.weight}
                  onChange={(e) => {
                    setErrors((prev) => ({ ...prev, weight: '' }));
                    setMetric((prev) => ({
                      ...prev,
                      weight: Number(e.target.value),
                    }));
                  }}
                  className={`rounded-lg bg-gray-100 px-5 py-4 outline-none focus:ring-2 focus:ring-primary-700 border ${errors.weight && 'border-red-500'}`}
                />
                {errors.weight && (
                  <p className="text-red-500">{errors.weight}</p>
                )}
              </div>

              {/* Description */}
              <div className="col-span-2 flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-600">
                  Description
                </label>
                <textarea
                  placeholder="Description"
                  value={metric.description}
                  onChange={(e) => {
                    setErrors((prev) => ({ ...prev, description: '' }));
                    setMetric((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }));
                  }}
                  rows={4}
                  className={`resize-none rounded-lg bg-gray-100 px-5 py-4 outline-none focus:ring-2 focus:ring-primary-700 border ${errors.description && 'border-red-500'}`}
                />
                {errors.description && (
                  <p className="text-red-500">{errors.description}</p>
                )}
              </div>
            </div>

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
                  const validationErrors = validateMetric();
                  setErrors(validationErrors);

                  if (Object.keys(validationErrors).length > 0) {
                    return;
                  }

                  handleEditMetric?.(toBeEdited, metric);
                  setIsEditModalOpen(false);
                }}
              >
                Save
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </section>
  );
}
