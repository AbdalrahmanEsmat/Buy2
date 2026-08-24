import { useState } from 'react';
import CreateEditFormInput from './CreateEditFormInput';
import PerformanceMetricsSchedule from './PerformanceMetricsSchedule';
import type { Job, PerformanceMetric } from '@/types';

type Props = {
  formData: Job;
  setFormData: React.Dispatch<React.SetStateAction<Job>>;
};

export default function PerformanceMetricsForm({
  formData,
  setFormData,
}: Props) {
  const [metricName, setMetricName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [measure, setMeasure] = useState<string>('');
  const [target, setTarget] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validateMetricInfo() {
    const newErrors: Record<string, string> = {};

    if (!metricName.trim()) {
      newErrors.metricName = 'Metric name is required';
    }

    if (!description.trim()) {
      newErrors.description = 'Description is required';
    }

    if (!measure.trim()) {
      newErrors.measure = 'Measure is required';
    } else if (Number(measure) > 100) {
      newErrors.measure = 'Measure cannot exceed 100';
    }

    if (!target.trim()) {
      newErrors.target = 'Target is required';
    } else if (Number(target) > 100) {
      newErrors.target = 'Target cannot exceed 100';
    }

    if (!weight.trim()) {
      newErrors.weight = 'Weight is required';
    } else if (Number(weight) > 100) {
      newErrors.weight = 'Weight cannot exceed 100';
    }

    const metricNameExists = formData.performanceMetrics.some(
      (metric) =>
        metric.name.trim().toLowerCase() === metricName.trim().toLowerCase(),
    );

    if (metricNameExists) {
      newErrors.metricName = 'Metric name already exists';
    }

    return newErrors;
  }

  function handleAddMetricClick() {
    const validationErrors = validateMetricInfo();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setFormData((prev) => ({
      ...prev,
      performanceMetrics: [
        ...prev.performanceMetrics,
        {
          name: metricName.trim(),
          description: description.trim(),
          measure: Number(measure),
          target: Number(target),
          weight: Number(weight),
        },
      ],
    }));

    // Reset inputs after successfully adding
    setMetricName('');
    setDescription('');
    setMeasure('');
    setTarget('');
    setWeight('');
    setErrors({});
  }

  function handleDeleteMetric(index: number) {
    setFormData((prev) => ({
      ...prev,
      performanceMetrics: prev.performanceMetrics.filter(
        (_, idx) => idx !== index,
      ),
    }));
  }

  function handleEditMetric(index: number, editedMetric: PerformanceMetric) {
    setFormData((prev) => ({
      ...prev,
      performanceMetrics: prev.performanceMetrics.map((metric, i) =>
        i === index ? editedMetric : metric,
      ),
    }));
  }

  return (
    <>
      <div>
        <div className="grid grid-cols-6 gap-y-14 gap-x-5">
          <div className="col-span-3">
            <CreateEditFormInput
              id="metricName"
              labelText="metric name"
              inputType="text"
              placeHolder="metric name"
              value={metricName}
              onChange={(e) =>
                setMetricName(e.target.value.trim().toLowerCase())
              }
              required={true}
              inputClassName={`${Object.hasOwn(errors, 'metricName') ? 'border-red-500' : ''}`}
            />
            {Object.hasOwn(errors, 'metricName') && (
              <p className="text-red-500 mt-5">{errors.metricName}</p>
            )}
          </div>

          <div className="col-span-3">
            <CreateEditFormInput
              id="description"
              labelText="description"
              inputType="text"
              placeHolder="write description here"
              value={description}
              onChange={(e) =>
                setDescription(e.target.value.trim().toLowerCase())
              }
              required={true}
              inputClassName={`${Object.hasOwn(errors, 'description') ? 'border-red-500' : ''}`}
            />
            {Object.hasOwn(errors, 'description') && (
              <p className="text-red-500 mt-5">{errors.description}</p>
            )}
          </div>

          <div className="col-span-2">
            <CreateEditFormInput
              id="measure"
              labelText="measure"
              inputType="number"
              placeHolder="measure"
              value={measure}
              onChange={(e) => setMeasure(e.target.value)}
              required={true}
              inputClassName={`${Object.hasOwn(errors, 'measure') ? 'border-red-500' : ''}`}
            />
            {Object.hasOwn(errors, 'measure') && (
              <p className="text-red-500 mt-5">{errors.measure}</p>
            )}
          </div>

          <div className="col-span-2">
            <CreateEditFormInput
              id="target"
              labelText="target"
              inputType="number"
              placeHolder="target"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              required={true}
              inputClassName={`${Object.hasOwn(errors, 'target') ? 'border-red-500' : ''}`}
            />
            {Object.hasOwn(errors, 'target') && (
              <p className="text-red-500 mt-5">{errors.target}</p>
            )}
          </div>

          <div className="col-span-2">
            <CreateEditFormInput
              id="weight"
              labelText="weight"
              inputType="number"
              placeHolder="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required={true}
              inputClassName={`${Object.hasOwn(errors, 'weight') ? 'border-red-500' : ''}`}
            />
            {Object.hasOwn(errors, 'weight') && (
              <p className="text-red-500 mt-5">{errors.weight}</p>
            )}
          </div>

          <div className="col-span-6 flex justify-end">
            <button
              type="button"
              className="flex items-center justify-center gap-4 px-8 py-6 border-2 border-primary-700 rounded-lg text-primary-700 font-medium cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={handleAddMetricClick}
            >
              <span className="text-3xl leading-none">+</span>
              <span>Add Metric</span>
            </button>
          </div>
        </div>
        {formData.performanceMetrics.length > 0 && (
          <PerformanceMetricsSchedule
            performanceMetrics={formData.performanceMetrics}
            withActions={true}
            handleDeleteMetric={handleDeleteMetric}
            handleEditMetric={handleEditMetric}
          />
        )}
      </div>
    </>
  );
}
