import { jobs } from '../mocks/db';
import type { Job } from '../types';

type Props = {
  filter: {
    field: string;
    value: string;
  } | null;
};

export async function getJobs({ filter }: Props): Promise<Record<string, Job>> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!filter) return jobs;

  return Object.fromEntries(
    Object.entries(jobs).filter(
      ([, job]) => job[filter.field as keyof Job] === filter.value,
    ),
  );
}
