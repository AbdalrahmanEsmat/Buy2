import { jobs } from '../mocks/db';

export async function getJobs() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return jobs;
}
