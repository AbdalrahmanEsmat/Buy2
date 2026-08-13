import { departments } from '../mocks/db1';
import type { Department } from '../types';

export async function getDepartments(): Promise<Record<string, Department>> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!departments) {
    throw new Error('Departments not found');
  }

  return departments;
}

export async function getDepartment(departmentId: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const department = departments[departmentId];

  if (!department) {
    throw new Error('Department not found');
  }

  return department;
}
