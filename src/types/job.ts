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
  repeat: {
    type: 'daily' | 'weekly' | 'multiple_days' | 'monthly';
  }[];
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
