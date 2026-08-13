import type { Department } from './department';
import type { Employee } from './employee';
import type { Qualification } from './qualification';
import type { SeniorityLevel } from './seniorityLevel';

export type FixedSchedule = {
  checkInFrom: string;
  checkInTo: string;
  checkOutFrom: string;
  checkOutTo: string;
  hoursPerDay: number;
};

export type PerformanceMetric = {
  name: string;
  description: string;
  measure: number;
  target: number;
  weight: number;
};

export type FixedTask = {
  name: string;
  description: string;
  steps: string[];
  attachments: string[];
  submissionTime: string;
  repeat: ('daily' | 'weekly' | 'monthly' | 'multiple_days')[];
};

export type Job = {
  id: string;
  title: string;
  description: string;
  departmentId: string;
  seniorityLevelId: string;
  reportingManagerId: string;
  qualificationIds: string[];
  scheduleType: 'fixed' | 'shifts';
  fixedSchedule?: FixedSchedule;
  performanceMetrics: PerformanceMetric[];
  fixedTasks: FixedTask[];
  employeeIds: string[];
};

export type JobDetails = Job & {
  department: Department;
  seniorityLevel: SeniorityLevel;
  qualifications: Qualification[];
  employees: Employee[];
  reportingManager: string;
};
