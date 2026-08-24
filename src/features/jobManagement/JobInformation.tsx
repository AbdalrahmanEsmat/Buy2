import type { JobDetails } from '@/types/job';
import { useOutletContext } from 'react-router-dom';
import PerformanceMetricsSchedule from './components/PerformanceMetricsSchedule';
import FixedTasksSchedule from './components/FixedTasksSchedule';

export default function JobInformation() {
  const { job } = useOutletContext<{ job: JobDetails }>();

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
      <PerformanceMetricsSchedule performanceMetrics={job.performanceMetrics} />

      {/* 5. Fixed Tasks */}
      <FixedTasksSchedule fixedTasks={job.fixedTasks} />
    </>
  );
}
