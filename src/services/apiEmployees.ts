import { employees } from '../mocks/db1';
import type { Employee } from '../types';

export async function getEmployees(): Promise<Employee[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (employees.length === 0) {
    throw new Error('Employees not found');
  }

  return employees;
}

export async function getEmployee(employeeId: string): Promise<Employee> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const employee = employees.find((employee) => employee.id === employeeId);

  if (!employee) {
    throw new Error('Employee not found');
  }

  return employee;
}
