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

type Day =
  | 'saturday'
  | 'sunday'
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday';

export type FixedTask = {
  name: string;
  description: string;
  steps: string[];
  attachments: string[];
  submissionTime: string;
  repeat: {
    repeatType: 'daily' | 'weekly' | 'monthly' | 'multiple_days';
    weeklyDay?: Day;
    multipleDays?: Day[];
    monthlyDays?: number[];
  };
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
