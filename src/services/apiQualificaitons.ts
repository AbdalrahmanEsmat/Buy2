import { qualifications } from '../mocks/db1';
import type { Qualification } from '../types';

export async function getQualifications(): Promise<
  Record<string, Qualification>
> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!qualifications) {
    throw new Error('Qualifications not found');
  }

  return qualifications;
}

export async function getQualification(qualificationId: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const qualification = qualifications[qualificationId];

  if (!qualification) {
    throw new Error('Qualification not found');
  }

  return qualification;
}
