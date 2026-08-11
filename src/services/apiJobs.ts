import { jobs } from '../mocks/db1';
import type { Job } from '../types';

type Props = {
  filter: {
    field: string;
    value: string;
  } | null;
  sort: {
    field: string;
    value: string;
  } | null;
};

export async function getJobs({
  filter,
  sort,
}: Props): Promise<Record<string, Job>> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  let result = jobs;

  if (filter) {
    result = Object.fromEntries(
      Object.entries(jobs).filter(
        ([, job]) => job[filter.field as keyof Job] === filter.value,
      ),
    );
  }

  if (sort) {
    const [field, direction] = sort.value.split('-');

    const sortedJobs = Object.entries(result).sort(([, jobA], [, jobB]) => {
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

    result = Object.fromEntries(sortedJobs);
  }

  return result;
}
