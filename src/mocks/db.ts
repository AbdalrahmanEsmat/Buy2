//------------ Types ------------

// employee
export type Employee = {
  employeeId: string;
  name: string;
  email: string;
  joinDate: string;
};

// qualification
export type Qualification = {
  id: string;
  name: string;
};

// seniority level
export type SeniorityLevel = {
  id: string;
  name: string;
};

// department
export type Department = {
  id: string;
  name: string;
};

// FixedSchedule
export type FixedSchedule = {
  checkInFrom: string;
  checkInTo: string;
  checkOutFrom: string;
  checkOutTo: string;
  hoursPerDay: number;
};

// performance metric
export type PerformanceMetric = {
  name: string;
  description: string;
  measure: number;
  target: number;
  weight: number;
};

// fixed task
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

// job
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

//------------ dbs ------------

// employees
export const employees: Record<string, Employee> = {
  'emp-001': {
    employeeId: 'emp-001',
    name: 'Ahmed Hassan',
    email: 'ahmed.hassan@buy2.com',
    joinDate: '2023-02-15',
  },

  'emp-002': {
    employeeId: 'emp-002',
    name: 'Sara Mohamed',
    email: 'sara.mohamed@buy2.com',
    joinDate: '2023-06-10',
  },

  'emp-003': {
    employeeId: 'emp-003',
    name: 'Omar Ali',
    email: 'omar.ali@buy2.com',
    joinDate: '2024-01-08',
  },

  'emp-004': {
    employeeId: 'emp-004',
    name: 'Nour Ibrahim',
    email: 'nour.ibrahim@buy2.com',
    joinDate: '2024-04-22',
  },

  'emp-005': {
    employeeId: 'emp-005',
    name: 'Youssef Khaled',
    email: 'youssef.khaled@buy2.com',
    joinDate: '2024-09-01',
  },
};

// qualifications
export const qualifications: Record<string, Qualification> = {
  'qual-001': {
    id: 'qual-001',
    name: 'React',
  },

  'qual-002': {
    id: 'qual-002',
    name: 'Node.js',
  },

  'qual-003': {
    id: 'qual-003',
    name: 'Project Management',
  },

  'qual-004': {
    id: 'qual-004',
    name: 'POS Systems',
  },

  'qual-005': {
    id: 'qual-005',
    name: 'Customer Service',
  },
};

// seniority levels
export const seniorityLevels: Record<string, SeniorityLevel> = {
  'sen-001': {
    id: 'sen-001',
    name: 'Junior',
  },

  'sen-002': {
    id: 'sen-002',
    name: 'Mid-Level',
  },

  'sen-003': {
    id: 'sen-003',
    name: 'Senior',
  },

  'sen-004': {
    id: 'sen-004',
    name: 'Lead',
  },

  'sen-005': {
    id: 'sen-005',
    name: 'Manager',
  },
};

// departments
export const departments: Record<string, Department> = {
  'dep-001': {
    id: 'dep-001',
    name: 'Engineering',
  },

  'dep-002': {
    id: 'dep-002',
    name: 'Sales',
  },

  'dep-003': {
    id: 'dep-003',
    name: 'Operations',
  },

  'dep-004': {
    id: 'dep-004',
    name: 'Human Resources',
  },

  'dep-005': {
    id: 'dep-005',
    name: 'Finance',
  },
};

export const jobs: Record<string, Job> = {
  'job-001': {
    id: 'job-001',
    title: 'Frontend Developer',
    description: 'Build and maintain web applications.',
    departmentId: 'dep-001',
    seniorityLevelId: 'sen-003',
    reportingManagerId: 'emp-001',
    qualificationIds: ['qual-001'],
    scheduleType: 'fixed',

    fixedSchedule: {
      checkInFrom: '09:00',
      checkInTo: '09:30',
      checkOutFrom: '17:00',
      checkOutTo: '17:30',
      hoursPerDay: 8,
    },

    performanceMetrics: [
      {
        name: 'Feature Completion',
        description: 'Percentage of assigned features completed.',
        measure: 90,
        target: 95,
        weight: 60,
      },
      {
        name: 'Code Quality',
        description: 'Quality score based on code reviews.',
        measure: 85,
        target: 90,
        weight: 40,
      },
    ],

    fixedTasks: [
      {
        name: 'Implement Frontend Feature',
        description:
          'Implement an assigned frontend feature according to the requirements and UI design.',
        steps: [
          'Review the feature requirements and UI design.',
          'Create or update the required React components.',
          'Implement the required functionality.',
          'Test the feature locally.',
          'Submit the completed feature for review.',
        ],
        attachments: [],
        submissionTime: '17:00',
        repeat: [
          {
            type: 'daily',
          },
        ],
      },
    ],
    employeeIds: ['emp-002'],
  },

  'job-002': {
    id: 'job-002',
    title: 'Backend Developer',
    description: 'Develop and maintain backend services and APIs.',
    departmentId: 'dep-001',
    seniorityLevelId: 'sen-003',
    reportingManagerId: 'emp-001',
    qualificationIds: ['qual-002'],
    scheduleType: 'fixed',

    fixedSchedule: {
      checkInFrom: '09:00',
      checkInTo: '09:30',
      checkOutFrom: '17:00',
      checkOutTo: '17:30',
      hoursPerDay: 8,
    },

    performanceMetrics: [
      {
        name: 'API Delivery',
        description: 'Percentage of APIs delivered on time.',
        measure: 88,
        target: 95,
        weight: 60,
      },
      {
        name: 'System Reliability',
        description: 'Backend service reliability score.',
        measure: 94,
        target: 98,
        weight: 40,
      },
    ],

    fixedTasks: [
      {
        name: 'Implement Frontend Feature',
        description:
          'Implement an assigned frontend feature according to the requirements and UI design.',
        steps: [
          'Review the feature requirements and UI design.',
          'Create or update the required React components.',
          'Implement the required functionality.',
          'Test the feature locally.',
          'Submit the completed feature for review.',
        ],
        attachments: [],
        submissionTime: '17:00',
        repeat: [
          {
            type: 'daily',
          },
        ],
      },

      {
        name: 'Code Review',
        description:
          'Review frontend code changes to ensure quality, maintainability, and adherence to project standards.',
        steps: [
          'Review the assigned pull request.',
          'Check code quality and React best practices.',
          'Check for potential bugs or performance issues.',
          'Leave feedback where necessary.',
          'Approve or request changes.',
        ],
        attachments: [],
        submissionTime: '16:30',
        repeat: [
          {
            type: 'daily',
          },
        ],
      },
    ],
    employeeIds: ['emp-003'],
  },

  'job-003': {
    id: 'job-003',
    title: 'Sales Representative',
    description: 'Manage customer relationships and achieve sales targets.',
    departmentId: 'dep-002',
    seniorityLevelId: 'sen-002',
    reportingManagerId: 'emp-001',
    qualificationIds: ['qual-005'],
    scheduleType: 'shifts',

    performanceMetrics: [
      {
        name: 'Sales Target',
        description: 'Percentage of monthly sales target achieved.',
        measure: 82,
        target: 100,
        weight: 70,
      },
      {
        name: 'Customer Satisfaction',
        description: 'Customer satisfaction score.',
        measure: 88,
        target: 90,
        weight: 30,
      },
    ],

    fixedTasks: [
      {
        name: 'Customer Follow-Up',
        description:
          'Follow up with assigned customers and update the status of active sales opportunities.',
        steps: [
          'Review assigned customers and active opportunities.',
          'Contact customers who require follow-up.',
          'Record customer feedback and responses.',
          'Update the status of each sales opportunity.',
          'Submit the completed follow-up report.',
        ],
        attachments: [],
        submissionTime: '17:00',
        repeat: [
          {
            type: 'daily',
          },
        ],
      },
    ],
    employeeIds: ['emp-004'],
  },

  'job-004': {
    id: 'job-004',
    title: 'Operations Coordinator',
    description: 'Coordinate daily operational activities and processes.',
    departmentId: 'dep-003',
    seniorityLevelId: 'sen-004',
    reportingManagerId: 'emp-001',
    qualificationIds: ['qual-003', 'qual-004'],
    scheduleType: 'shifts',

    performanceMetrics: [
      {
        name: 'Task Completion',
        description: 'Percentage of operational tasks completed.',
        measure: 92,
        target: 95,
        weight: 60,
      },
      {
        name: 'Process Accuracy',
        description: 'Accuracy of operational processes.',
        measure: 96,
        target: 98,
        weight: 40,
      },
    ],

    fixedTasks: [
      {
        name: 'Daily Operations Check',
        description:
          'Review daily operational activities and identify issues that require attention.',
        steps: [
          'Review the daily operations schedule.',
          'Check the status of ongoing activities.',
          'Identify delays or operational issues.',
          'Assign follow-up actions where necessary.',
          'Submit the daily operations report.',
        ],
        attachments: [],
        submissionTime: '10:00',
        repeat: [
          {
            type: 'daily',
          },
        ],
      },

      {
        name: 'Process Verification',
        description:
          'Verify that operational processes are being performed correctly and according to company procedures.',
        steps: [
          'Review the assigned operational processes.',
          'Verify that required procedures were followed.',
          'Check records for missing or incorrect information.',
          'Document any identified issues.',
          'Submit the verification results.',
        ],
        attachments: [],
        submissionTime: '14:00',
        repeat: [
          {
            type: 'daily',
          },
        ],
      },

      {
        name: 'Weekly Operations Report',
        description:
          'Prepare a weekly summary of operational activities, completed tasks, and outstanding issues.',
        steps: [
          'Review completed operational tasks.',
          'Review outstanding tasks and unresolved issues.',
          'Summarize operational performance.',
          'Identify recurring problems or process improvements.',
          'Submit the weekly operations report.',
        ],
        attachments: [],
        submissionTime: '16:00',
        repeat: [
          {
            type: 'weekly',
          },
        ],
      },
    ],
    employeeIds: ['emp-005'],
  },

  'job-005': {
    id: 'job-005',
    title: 'HR Manager',
    description: 'Manage employee relations and HR operations.',
    departmentId: 'dep-004',
    seniorityLevelId: 'sen-005',
    reportingManagerId: 'emp-001',
    qualificationIds: ['qual-003'],
    scheduleType: 'fixed',

    fixedSchedule: {
      checkInFrom: '08:30',
      checkInTo: '09:00',
      checkOutFrom: '16:30',
      checkOutTo: '17:00',
      hoursPerDay: 8,
    },

    performanceMetrics: [
      {
        name: 'Employee Satisfaction',
        description: 'Overall employee satisfaction score.',
        measure: 87,
        target: 92,
        weight: 50,
      },
      {
        name: 'Recruitment Efficiency',
        description: 'Percentage of recruitment targets achieved.',
        measure: 90,
        target: 95,
        weight: 50,
      },
    ],

    fixedTasks: [
      {
        name: 'Employee Check-In',
        description:
          'Review employee concerns, requests, and workplace issues that require HR attention.',
        steps: [
          'Review pending employee requests and concerns.',
          'Follow up with employees when necessary.',
          'Document important employee issues.',
          'Coordinate appropriate actions with management.',
          'Update the HR records.',
        ],
        attachments: [],
        submissionTime: '12:00',
        repeat: [
          {
            type: 'daily',
          },
        ],
      },

      {
        name: 'Recruitment Pipeline Review',
        description:
          'Review active recruitment processes and ensure open positions are progressing according to hiring requirements.',
        steps: [
          'Review all active job vacancies.',
          'Check candidate applications and interview status.',
          'Identify delayed recruitment processes.',
          'Coordinate next steps with hiring managers.',
          'Update the recruitment pipeline.',
        ],
        attachments: [],
        submissionTime: '16:00',
        repeat: [
          {
            type: 'weekly',
          },
        ],
      },
    ],
    employeeIds: [],
  },
};
