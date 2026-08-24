import { qualifications } from '../mocks/db1';
import type { Qualification } from '../types';

export async function getQualifications(): Promise<Qualification[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (qualifications.length === 0) {
    throw new Error('Qualifications not found');
  }

  return qualifications;
}

export async function getQualification(
  qualificationId: string,
): Promise<Qualification> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const qualification = qualifications.find(
    (qualification) => qualification.id === qualificationId,
  );

  if (!qualification) {
    throw new Error('Qualification not found');
  }

  return qualification;
}
