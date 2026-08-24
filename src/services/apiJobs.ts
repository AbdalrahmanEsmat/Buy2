import {
  departments,
  employees,
  jobs,
  qualifications,
  seniorityLevels,
} from '../mocks/db1';
import type { Job } from '../types';

type Jobs = {
  filter: {
    field: string;
    value: string;
  } | null;
  sort: {
    field: string;
    value: string;
  } | null;
};

export async function getJobs({ filter, sort }: Jobs): Promise<Job[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  let result = [...jobs];

  if (filter) {
    result = result.filter(
      (job) => job[filter.field as keyof Job] === filter.value,
    );
  }

  if (sort) {
    const [field, direction] = sort.value.split('-');

    result.sort((jobA, jobB) => {
      if (field === 'title') {
        return direction === 'asc'
          ? jobA.title.localeCompare(jobB.title)
          : jobB.title.localeCompare(jobA.title);
      }

      if (field === 'employees') {
        return direction === 'asc'
          ? jobA.employeeIds.length - jobB.employeeIds.length
          : jobB.employeeIds.length - jobA.employeeIds.length;
      }

      return 0;
    });
  }

  return result;
}

export async function getJob(jobId: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const job = jobs.find((job) => job.id === jobId);

  if (!job) {
    throw new Error('Job not found');
  }

  const department = departments.find(
    (department) => department.id === job.departmentId,
  );

  const seniorityLevel = seniorityLevels.find(
    (seniority) => seniority.id === job.seniorityLevelId,
  );

  const jobQualifications = job.qualificationIds
    .map((id) =>
      qualifications.find((qualification) => qualification.id === id),
    )
    .filter((qualification) => qualification !== undefined);

  const jobEmployees = job.employeeIds
    .map((id) => employees.find((employee) => employee.id === id))
    .filter((employee) => employee !== undefined);

  const reportingManager = employees.find(
    (employee) => employee.id === job.reportingManagerId,
  )?.name;

  return {
    ...job,
    department,
    seniorityLevel,
    qualifications: jobQualifications,
    employees: jobEmployees,
    reportingManager,
  };
}

export async function createEditJob({
  newJob,
  id,
}: {
  newJob: Job;
  id?: string;
}) {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  if (!newJob) {
    throw new Error('Job data is required');
  }

  if (id) {
    const job: Job = {
      id,
      title: newJob.title,
      description: newJob.description,
      departmentId: newJob.departmentId,
      seniorityLevelId: newJob.seniorityLevelId,
      reportingManagerId: newJob.reportingManagerId,
      qualificationIds: newJob.qualificationIds,
      scheduleType: newJob.scheduleType,
      fixedSchedule: newJob.fixedSchedule,
      performanceMetrics: newJob.performanceMetrics,
      fixedTasks: newJob.fixedTasks,
      employeeIds: newJob.employeeIds,
    };

    const jobIndex = jobs.findIndex((job) => job.id === id);
    if (jobIndex === -1) {
      throw new Error('Job not found');
    }
    jobs[jobIndex] = job;
    return;
  }

  const job: Job = {
    id: crypto.randomUUID(),
    title: newJob.title,
    description: newJob.description,
    departmentId: newJob.departmentId,
    seniorityLevelId: newJob.seniorityLevelId,
    reportingManagerId: newJob.reportingManagerId,
    qualificationIds: newJob.qualificationIds,
    scheduleType: newJob.scheduleType,
    fixedSchedule: newJob.fixedSchedule,
    performanceMetrics: newJob.performanceMetrics,
    fixedTasks: newJob.fixedTasks,
    employeeIds: [],
  };

  jobs.push(job);

  return;
}

export async function deleteJob(jobId: string) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const jobIndex = jobs.findIndex((job) => job.id === jobId);
  if (jobIndex === -1) {
    throw new Error('Job not found');
  }
  jobs.splice(jobIndex, 1);
}
