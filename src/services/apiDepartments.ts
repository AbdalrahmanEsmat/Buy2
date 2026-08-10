import { departments } from '../mocks/db';
import type { Department } from '../types';

export async function getDepartments(): Promise<Record<string, Department>> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return departments;
}
