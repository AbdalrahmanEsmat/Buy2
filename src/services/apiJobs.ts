import { jobs } from '../mocks/db';
import type { Job } from '../types';

export async function getJobs(): Promise<Record<string, Job>> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return jobs;
}
