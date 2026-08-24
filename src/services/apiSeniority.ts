import { seniorityLevels } from '../mocks/db1';
import type { SeniorityLevel } from '../types';

export async function getSeniorities(): Promise<SeniorityLevel[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (seniorityLevels.length === 0) {
    throw new Error('Seniority levels not found');
  }

  return seniorityLevels;
}

export async function getSeniority(
  seniorityId: string,
): Promise<SeniorityLevel> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const seniority = seniorityLevels.find(
    (seniority) => seniority.id === seniorityId,
  );

  if (!seniority) {
    throw new Error('Seniority not found');
  }

  return seniority;
}
