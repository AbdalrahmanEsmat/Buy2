//------------ Types ------------
import type {
  Department,
  Employee,
  Job,
  Qualification,
  SeniorityLevel,
} from '@/types';

//------------ dbs ------------

// 51 employees
export const employees: Employee[] = [
  {
    id: 'emp-001',
    name: 'Ahmed Hassan',
    email: 'ahmed.hassan@buy2.com',
    joinDate: '2023-02-15',
  },
  {
    id: 'emp-002',
    name: 'Sara Mohamed',
    email: 'sara.mohamed@buy2.com',
    joinDate: '2023-06-10',
  },
  {
    id: 'emp-003',
    name: 'Omar Ali',
    email: 'omar.ali@buy2.com',
    joinDate: '2024-01-08',
  },
  {
    id: 'emp-004',
    name: 'Nour Ibrahim',
    email: 'nour.ibrahim@buy2.com',
    joinDate: '2024-04-22',
  },
  {
    id: 'emp-005',
    name: 'Youssef Khaled',
    email: 'youssef.khaled@buy2.com',
    joinDate: '2024-09-01',
  },
  {
    id: 'emp-006',
    name: 'Mariam Adel',
    email: 'mariam.adel@buy2.com',
    joinDate: '2023-11-12',
  },
  {
    id: 'emp-007',
    name: 'Karim Samir',
    email: 'karim.samir@buy2.com',
    joinDate: '2024-02-19',
  },
  {
    id: 'emp-008',
    name: 'Hana Mostafa',
    email: 'hana.mostafa@buy2.com',
    joinDate: '2024-03-25',
  },
  {
    id: 'emp-009',
    name: 'Mahmoud Tarek',
    email: 'mahmoud.tarek@buy2.com',
    joinDate: '2023-08-14',
  },
  {
    id: 'emp-010',
    name: 'Laila Fathy',
    email: 'laila.fathy@buy2.com',
    joinDate: '2024-05-06',
  },
  {
    id: 'emp-011',
    name: 'Adam Nabil',
    email: 'adam.nabil@buy2.com',
    joinDate: '2023-10-02',
  },
  {
    id: 'emp-012',
    name: 'Salma Wael',
    email: 'salma.wael@buy2.com',
    joinDate: '2024-06-17',
  },
  {
    id: 'emp-013',
    name: 'Hassan Emad',
    email: 'hassan.emad@buy2.com',
    joinDate: '2023-04-29',
  },
  {
    id: 'emp-014',
    name: 'Jana Hossam',
    email: 'jana.hossam@buy2.com',
    joinDate: '2024-07-08',
  },
  {
    id: 'emp-015',
    name: 'Mostafa Ayman',
    email: 'mostafa.ayman@buy2.com',
    joinDate: '2023-12-04',
  },
  {
    id: 'emp-016',
    name: 'Reem Ashraf',
    email: 'reem.ashraf@buy2.com',
    joinDate: '2024-08-21',
  },
  {
    id: 'emp-017',
    name: 'Khaled Wael',
    email: 'khaled.wael@buy2.com',
    joinDate: '2023-07-11',
  },
  {
    id: 'emp-018',
    name: 'Dina Sameh',
    email: 'dina.sameh@buy2.com',
    joinDate: '2024-09-16',
  },
  {
    id: 'emp-019',
    name: 'Tamer Nasser',
    email: 'tamer.nasser@buy2.com',
    joinDate: '2023-05-23',
  },
  {
    id: 'emp-020',
    name: 'Farah Magdy',
    email: 'farah.magdy@buy2.com',
    joinDate: '2024-10-01',
  },
  {
    id: 'emp-021',
    name: 'Ziad Fares',
    email: 'ziad.fares@buy2.com',
    joinDate: '2023-09-18',
  },
  {
    id: 'emp-022',
    name: 'Aya Sherif',
    email: 'aya.sherif@buy2.com',
    joinDate: '2024-11-05',
  },
  {
    id: 'emp-023',
    name: 'Othman Reda',
    email: 'othman.reda@buy2.com',
    joinDate: '2025-01-13',
  },
  {
    id: 'emp-024',
    name: 'Amr Hamdy',
    email: 'amr.hamdy@buy2.com',
    joinDate: '2024-10-14',
  },
  {
    id: 'emp-025',
    name: 'Mona Adel',
    email: 'mona.adel@buy2.com',
    joinDate: '2023-03-20',
  },
  {
    id: 'emp-026',
    name: 'Omar Hany',
    email: 'omar.hany@buy2.com',
    joinDate: '2024-01-29',
  },
  {
    id: 'emp-027',
    name: 'Rana Mahmoud',
    email: 'rana.mahmoud@buy2.com',
    joinDate: '2024-02-12',
  },
  {
    id: 'emp-028',
    name: 'Ehab Mostafa',
    email: 'ehab.mostafa@buy2.com',
    joinDate: '2023-06-26',
  },
  {
    id: 'emp-029',
    name: 'Mai Tarek',
    email: 'mai.tarek@buy2.com',
    joinDate: '2024-03-11',
  },
  {
    id: 'emp-030',
    name: 'Yassin Ahmed',
    email: 'yassin.ahmed@buy2.com',
    joinDate: '2023-11-27',
  },
  {
    id: 'emp-031',
    name: 'Heba Khaled',
    email: 'heba.khaled@buy2.com',
    joinDate: '2024-04-08',
  },
  {
    id: 'emp-032',
    name: 'Karim Adel',
    email: 'karim.adel@buy2.com',
    joinDate: '2024-05-20',
  },
  {
    id: 'emp-033',
    name: 'Nada Hassan',
    email: 'nada.hassan@buy2.com',
    joinDate: '2023-08-07',
  },
  {
    id: 'emp-034',
    name: 'Sherif Nabil',
    email: 'sherif.nabil@buy2.com',
    joinDate: '2024-06-03',
  },
  {
    id: 'emp-035',
    name: 'Dalia Samir',
    email: 'dalia.samir@buy2.com',
    joinDate: '2023-12-18',
  },
  {
    id: 'emp-036',
    name: 'Mahmoud Ashraf',
    email: 'mahmoud.ashraf@buy2.com',
    joinDate: '2024-07-22',
  },
  {
    id: 'emp-037',
    name: 'Aya Mostafa',
    email: 'aya.mostafa@buy2.com',
    joinDate: '2024-08-05',
  },
  {
    id: 'emp-038',
    name: 'Hossam Fathy',
    email: 'hossam.fathy@buy2.com',
    joinDate: '2023-09-04',
  },
  {
    id: 'emp-039',
    name: 'Menna Wael',
    email: 'menna.wael@buy2.com',
    joinDate: '2024-09-09',
  },
  {
    id: 'emp-040',
    name: 'Tarek Emad',
    email: 'tarek.emad@buy2.com',
    joinDate: '2023-05-15',
  },
  {
    id: 'emp-041',
    name: 'Esraa Nasser',
    email: 'esraa.nasser@buy2.com',
    joinDate: '2024-10-21',
  },
  {
    id: 'emp-042',
    name: 'Mostafa Reda',
    email: 'mostafa.reda@buy2.com',
    joinDate: '2025-02-03',
  },
  {
    id: 'emp-043',
    name: 'Rania Fathy',
    email: 'rania.fathy@buy2.com',
    joinDate: '2023-07-24',
  },
  {
    id: 'emp-044',
    name: 'Ahmed Nasser',
    email: 'ahmed.nasser@buy2.com',
    joinDate: '2024-11-18',
  },
  {
    id: 'emp-045',
    name: 'Yara Emad',
    email: 'yara.emad@buy2.com',
    joinDate: '2025-03-10',
  },
  {
    id: 'emp-046',
    name: 'Khaled Hassan',
    email: 'khaled.hassan@buy2.com',
    joinDate: '2023-10-16',
  },
  {
    id: 'emp-047',
    name: 'Salma Ibrahim',
    email: 'salma.ibrahim@buy2.com',
    joinDate: '2024-12-02',
  },
  {
    id: 'emp-048',
    name: 'Mazen Ali',
    email: 'mazen.ali@buy2.com',
    joinDate: '2025-04-07',
  },
  {
    id: 'emp-049',
    name: 'Farida Sameh',
    email: 'farida.sameh@buy2.com',
    joinDate: '2024-12-16',
  },
  {
    id: 'emp-050',
    name: 'Nouran Magdy',
    email: 'nouran.magdy@buy2.com',
    joinDate: '2025-05-12',
  },
];

// 23 qualifications
export const qualifications: Qualification[] = [
  {
    id: 'qual-001',
    name: 'React',
  },
  {
    id: 'qual-002',
    name: 'Node.js',
  },
  {
    id: 'qual-003',
    name: 'Project Management',
  },
  {
    id: 'qual-004',
    name: 'POS Systems',
  },
  {
    id: 'qual-005',
    name: 'Customer Service',
  },
  {
    id: 'qual-006',
    name: 'TypeScript',
  },
  {
    id: 'qual-007',
    name: 'SQL',
  },
  {
    id: 'qual-008',
    name: 'UI/UX Design',
  },
  {
    id: 'qual-009',
    name: 'Digital Marketing',
  },
  {
    id: 'qual-010',
    name: 'Sales Negotiation',
  },
  {
    id: 'qual-011',
    name: 'Inventory Management',
  },
  {
    id: 'qual-012',
    name: 'Accounting',
  },
  {
    id: 'qual-013',
    name: 'Financial Analysis',
  },
  {
    id: 'qual-014',
    name: 'Recruitment',
  },
  {
    id: 'qual-015',
    name: 'Payroll',
  },
  {
    id: 'qual-016',
    name: 'Data Analysis',
  },
  {
    id: 'qual-017',
    name: 'Quality Assurance',
  },
  {
    id: 'qual-018',
    name: 'DevOps',
  },
  {
    id: 'qual-019',
    name: 'Cybersecurity',
  },
  {
    id: 'qual-020',
    name: 'Business Administration',
  },
  {
    id: 'qual-021',
    name: 'Supply Chain',
  },
  {
    id: 'qual-022',
    name: 'Technical Support',
  },
  {
    id: 'qual-023',
    name: 'Training & Development',
  },
];

// 23 seniority levels
export const seniorityLevels: SeniorityLevel[] = [
  {
    id: 'sen-001',
    name: 'Junior',
  },
  {
    id: 'sen-002',
    name: 'Mid-Level',
  },
  {
    id: 'sen-003',
    name: 'Senior',
  },
  {
    id: 'sen-004',
    name: 'Lead',
  },
  {
    id: 'sen-005',
    name: 'Manager',
  },
  {
    id: 'sen-006',
    name: 'Trainee',
  },
  {
    id: 'sen-007',
    name: 'Associate',
  },
  {
    id: 'sen-008',
    name: 'Senior Associate',
  },
  {
    id: 'sen-009',
    name: 'Specialist',
  },
  {
    id: 'sen-010',
    name: 'Senior Specialist',
  },
  {
    id: 'sen-011',
    name: 'Supervisor',
  },
  {
    id: 'sen-012',
    name: 'Assistant Manager',
  },
  {
    id: 'sen-013',
    name: 'Deputy Manager',
  },
  {
    id: 'sen-014',
    name: 'Department Manager',
  },
  {
    id: 'sen-015',
    name: 'Senior Manager',
  },
  {
    id: 'sen-016',
    name: 'Principal',
  },
  {
    id: 'sen-017',
    name: 'Staff',
  },
  {
    id: 'sen-018',
    name: 'Team Lead',
  },
  {
    id: 'sen-019',
    name: 'Head',
  },
  {
    id: 'sen-020',
    name: 'Director',
  },
  {
    id: 'sen-021',
    name: 'Senior Director',
  },
  {
    id: 'sen-022',
    name: 'General Manager',
  },
  {
    id: 'sen-023',
    name: 'Executive',
  },
];

// 23 departments
export const departments: Department[] = [
  {
    id: 'dep-001',
    name: 'Engineering',
    location: '46 Ain Shams Street, El-Zaytoun, Cairo',
    code: 'ENG',
    descriptio:
      'Responsible for software development and technical engineering.',
  },
  {
    id: 'dep-002',
    name: 'Sales',
    location: '18 Abbas El-Akkad Street, Nasr City, Cairo',
    code: 'SAL',
    descriptio: 'Responsible for generating revenue through sales activities.',
  },
  {
    id: 'dep-003',
    name: 'Operations',
    location: '12 El-Tahrir Street, Dokki, Giza',
    code: 'OPS',
    descriptio: 'Manages daily business operations and processes.',
  },
  {
    id: 'dep-004',
    name: 'Human Resources',
    location: '25 Makram Ebeid Street, Nasr City, Cairo',
    code: 'HR',
    descriptio: 'Manages employees, recruitment, and workplace policies.',
  },
  {
    id: 'dep-005',
    name: 'Finance',
    location: '31 Ramses Street, Downtown Cairo',
    code: 'FIN',
    descriptio: 'Manages financial planning, accounting, and reporting.',
  },
  {
    id: 'dep-006',
    name: 'Product',
    location: '9 Mostafa El-Nahas Street, Nasr City, Cairo',
    code: 'PROD',
    descriptio: 'Responsible for product strategy and management.',
  },
  {
    id: 'dep-007',
    name: 'Marketing',
    location: '22 Lebanon Street, Mohandessin, Giza',
    code: 'MKT',
    descriptio: 'Responsible for marketing campaigns and branding.',
  },
  {
    id: 'dep-008',
    name: 'Customer Support',
    location: '14 El-Hegaz Street, Heliopolis, Cairo',
    code: 'CS',
    descriptio: 'Provides assistance and support to customers.',
  },
  {
    id: 'dep-009',
    name: 'Information Technology',
    location: '38 Ahmed Orabi Street, Mohandessin, Giza',
    code: 'IT',
    descriptio: 'Manages IT infrastructure and technical support.',
  },
  {
    id: 'dep-010',
    name: 'Quality Assurance',
    location: '7 El-Merghany Street, Heliopolis, Cairo',
    code: 'QA',
    descriptio: 'Ensures products and processes meet quality standards.',
  },
  {
    id: 'dep-011',
    name: 'Procurement',
    location: '16 El-Nasr Road, Maadi, Cairo',
    code: 'PROC',
    descriptio: 'Manages purchasing and supplier relationships.',
  },
  {
    id: 'dep-012',
    name: 'Supply Chain',
    location: '42 Ring Road, New Cairo',
    code: 'SCM',
    descriptio: 'Manages the flow of goods, materials, and resources.',
  },
  {
    id: 'dep-013',
    name: 'Legal',
    location: '11 Talaat Harb Street, Downtown Cairo',
    code: 'LEG',
    descriptio: 'Handles legal matters and contracts.',
  },
  {
    id: 'dep-014',
    name: 'Administration',
    location: '29 El-Montazah Street, Heliopolis, Cairo',
    code: 'ADM',
    descriptio: 'Manages administrative tasks and organizational support.',
  },
  {
    id: 'dep-015',
    name: 'Business Development',
    location: '20 North Teseen Street, New Cairo',
    code: 'BD',
    descriptio: 'Identifies new business opportunities and partnerships.',
  },
  {
    id: 'dep-016',
    name: 'Data & Analytics',
    location: '33 El-Batal Ahmed Abdel Aziz Street, Mohandessin, Giza',
    code: 'DA',
    descriptio: 'Analyzes data to support business decisions.',
  },
  {
    id: 'dep-017',
    name: 'Security',
    location: '8 Salah Salem Street, Nasr City, Cairo',
    code: 'SEC',
    descriptio: 'Manages organizational security and risk.',
  },
  {
    id: 'dep-018',
    name: 'Training & Development',
    location: '17 El-Bahr El-Azam Street, Giza',
    code: 'L&D',
    descriptio: 'Develops employee training and development programs.',
  },
  {
    id: 'dep-019',
    name: 'Facilities',
    location: '24 Corniche El-Maadi, Maadi, Cairo',
    code: 'FAC',
    descriptio: 'Manages buildings, maintenance, and workplace services.',
  },
  {
    id: 'dep-020',
    name: 'Retail',
    location: '5 El-Horreya Street, Heliopolis, Cairo',
    code: 'RET',
    descriptio: 'Manages retail operations and sales activities.',
  },
  {
    id: 'dep-021',
    name: 'Logistics',
    location: '41 Cairo-Alexandria Desert Road, Giza',
    code: 'LOG',
    descriptio: 'Manages transportation, warehousing, and distribution.',
  },
  {
    id: 'dep-022',
    name: 'Compliance',
    location: '13 El-Galaa Street, Downtown Cairo',
    code: 'COMP',
    descriptio: 'Ensures the organization follows applicable regulations.',
  },
  {
    id: 'dep-023',
    name: 'Strategy',
    location: '27 South Teseen Street, New Cairo',
    code: 'STR',
    descriptio: 'Develops long-term organizational strategy.',
  },
];

// 23 jobs
export const jobs: Job[] = [
  {
    id: 'job-001',
    title: 'Frontend Developer',
    description: 'Build and maintain web applications.',
    departmentId: 'dep-001',
    seniorityLevelId: 'sen-003',
    reportingManagerId: 'emp-001',
    qualificationIds: ['qual-001', 'qual-006'],
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
        name: 'Performance Achievement',
        description: 'Percentage of assigned objectives achieved.',
        measure: 85,
        target: 95,
        weight: 60,
      },
      {
        name: 'Quality Score',
        description: 'Quality and accuracy of completed work.',
        measure: 89,
        target: 95,
        weight: 40,
      },
    ],
    fixedTasks: [
      {
        name: 'Review Daily Sales Activity',
        description:
          'Review the day’s sales activity and update outstanding opportunities.',
        steps: [
          'Review sales activity',
          'Update opportunity status',
          'Record follow-up actions',
        ],
        attachments: [],
        submissionTime: '17:00',
        repeat: {
          repeatType: 'daily',
        },
      },
      {
        name: 'Check Customer Support Queue',
        description:
          'Review and process outstanding customer support requests.',
        steps: [
          'Review open requests',
          'Resolve pending issues',
          'Escalate unresolved cases',
        ],
        attachments: [],
        submissionTime: '16:30',
        repeat: {
          repeatType: 'daily',
        },
      },
      {
        name: 'Review Employee Requests',
        description:
          'Review pending employee requests and complete required HR actions.',
        steps: [
          'Review requests',
          'Process approved requests',
          'Update request status',
        ],
        attachments: [],
        submissionTime: '16:00',
        repeat: {
          repeatType: 'daily',
        },
      },
    ],
    employeeIds: ['emp-002', 'emp-024', 'emp-025'],
  },
  {
    id: 'job-002',
    title: 'Backend Developer',
    description: 'Develop and maintain backend services and APIs.',
    departmentId: 'dep-001',
    seniorityLevelId: 'sen-003',
    reportingManagerId: 'emp-001',
    qualificationIds: ['qual-002', 'qual-007'],
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
        name: 'Performance Achievement',
        description: 'Percentage of assigned objectives achieved.',
        measure: 88,
        target: 95,
        weight: 60,
      },
      {
        name: 'Quality Score',
        description: 'Quality and accuracy of completed work.',
        measure: 94,
        target: 95,
        weight: 40,
      },
    ],
    fixedTasks: [
      {
        name: 'Update Project Progress',
        description: 'Update the current progress of active project work.',
        steps: ['Review completed work', 'Update progress', 'Record blockers'],
        attachments: [],
        submissionTime: '17:30',
        repeat: {
          repeatType: 'daily',
        },
      },
      {
        name: 'Review Inventory Levels',
        description:
          'Check inventory levels and identify products requiring replenishment.',
        steps: [
          'Review inventory',
          'Identify low-stock items',
          'Submit replenishment requests',
        ],
        attachments: [],
        submissionTime: '15:00',
        repeat: {
          repeatType: 'daily',
        },
      },
    ],
    employeeIds: ['emp-003', 'emp-026', 'emp-027'],
  },
  {
    id: 'job-003',
    title: 'Sales Representative',
    description: 'Manage customer relationships and achieve sales targets.',
    departmentId: 'dep-002',
    seniorityLevelId: 'sen-002',
    reportingManagerId: 'emp-001',
    qualificationIds: ['qual-005', 'qual-010'],
    scheduleType: 'shifts',
    performanceMetrics: [
      {
        name: 'Performance Achievement',
        description: 'Percentage of assigned objectives achieved.',
        measure: 91,
        target: 95,
        weight: 60,
      },
      {
        name: 'Quality Score',
        description: 'Quality and accuracy of completed work.',
        measure: 86,
        target: 95,
        weight: 40,
      },
    ],
    fixedTasks: [
      {
        name: 'Process Purchase Requests',
        description: 'Review and process pending purchase requests.',
        steps: [
          'Review requests',
          'Verify requirements',
          'Process approved requests',
        ],
        attachments: [],
        submissionTime: '16:00',
        repeat: {
          repeatType: 'daily',
        },
      },
      {
        name: 'Review Marketing Performance',
        description:
          'Review active marketing activities and identify performance issues.',
        steps: [
          'Review campaign data',
          'Compare performance',
          'Record required actions',
        ],
        attachments: [],
        submissionTime: '17:00',
        repeat: {
          repeatType: 'daily',
        },
      },
      {
        name: 'Review Financial Transactions',
        description:
          'Review daily financial transactions for accuracy and exceptions.',
        steps: [
          'Review transactions',
          'Identify discrepancies',
          'Record exceptions',
        ],
        attachments: [],
        submissionTime: '18:00',
        repeat: {
          repeatType: 'daily',
        },
      },
    ],
    employeeIds: ['emp-004', 'emp-028', 'emp-029', 'emp-030'],
  },
  {
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
        name: 'Performance Achievement',
        description: 'Percentage of assigned objectives achieved.',
        measure: 94,
        target: 95,
        weight: 60,
      },
      {
        name: 'Quality Score',
        description: 'Quality and accuracy of completed work.',
        measure: 91,
        target: 95,
        weight: 40,
      },
    ],
    fixedTasks: [
      {
        name: 'Weekly Sales Pipeline Review',
        description:
          'Review the sales pipeline and identify opportunities requiring action.',
        steps: [
          'Review pipeline',
          'Update opportunity stages',
          'Identify next actions',
        ],
        attachments: [],
        submissionTime: '15:00',
        repeat: {
          repeatType: 'weekly',
          weeklyDay: 'monday',
        },
      },
      {
        name: 'Weekly Team Planning',
        description:
          'Review team priorities and plan activities for the upcoming week.',
        steps: ['Review priorities', 'Assign activities', 'Confirm deadlines'],
        attachments: [],
        submissionTime: '10:00',
        repeat: {
          repeatType: 'weekly',
          weeklyDay: 'monday',
        },
      },
      {
        name: 'Weekly HR Review',
        description:
          'Review outstanding HR activities and employee-related requests.',
        steps: [
          'Review HR requests',
          'Check pending actions',
          'Update records',
        ],
        attachments: [],
        submissionTime: '14:00',
        repeat: {
          repeatType: 'weekly',
          weeklyDay: 'tuesday',
        },
      },
    ],
    employeeIds: ['emp-005', 'emp-031', 'emp-032'],
  },
  {
    id: 'job-005',
    title: 'HR Manager',
    description: 'Manage employee relations and HR operations.',
    departmentId: 'dep-004',
    seniorityLevelId: 'sen-005',
    reportingManagerId: 'emp-001',
    qualificationIds: ['qual-003', 'qual-014'],
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
        name: 'Performance Achievement',
        description: 'Percentage of assigned objectives achieved.',
        measure: 82,
        target: 95,
        weight: 60,
      },
      {
        name: 'Quality Score',
        description: 'Quality and accuracy of completed work.',
        measure: 96,
        target: 95,
        weight: 40,
      },
    ],
    fixedTasks: [
      {
        name: 'Weekly Development Review',
        description: 'Review development progress and technical blockers.',
        steps: [
          'Review completed work',
          'Check blockers',
          'Plan upcoming work',
        ],
        attachments: [],
        submissionTime: '16:00',
        repeat: {
          repeatType: 'weekly',
          weeklyDay: 'tuesday',
        },
      },
      {
        name: 'Weekly Marketing Review',
        description: 'Review marketing performance and upcoming campaigns.',
        steps: [
          'Review campaign results',
          'Identify trends',
          'Plan adjustments',
        ],
        attachments: [],
        submissionTime: '15:30',
        repeat: {
          repeatType: 'weekly',
          weeklyDay: 'wednesday',
        },
      },
      {
        name: 'Weekly Inventory Review',
        description:
          'Review inventory levels and upcoming supply requirements.',
        steps: ['Review inventory', 'Identify shortages', 'Plan replenishment'],
        attachments: [],
        submissionTime: '14:30',
        repeat: {
          repeatType: 'weekly',
          weeklyDay: 'wednesday',
        },
      },
    ],
    employeeIds: ['emp-006', 'emp-033', 'emp-034'],
  },
  {
    id: 'job-006',
    title: 'Product Specialist',
    description: 'Define product requirements and coordinate product delivery.',
    departmentId: 'dep-006',
    seniorityLevelId: 'sen-003',
    reportingManagerId: 'emp-009',
    qualificationIds: ['qual-003', 'qual-016'],
    scheduleType: 'fixed',
    fixedSchedule: {
      checkInFrom: '09:30',
      checkInTo: '10:00',
      checkOutFrom: '17:30',
      checkOutTo: '18:00',
      hoursPerDay: 8,
    },
    performanceMetrics: [
      {
        name: 'Performance Achievement',
        description: 'Percentage of assigned objectives achieved.',
        measure: 85,
        target: 95,
        weight: 60,
      },
      {
        name: 'Quality Score',
        description: 'Quality and accuracy of completed work.',
        measure: 88,
        target: 95,
        weight: 40,
      },
    ],
    fixedTasks: [
      {
        name: 'Weekly Finance Review',
        description:
          'Review financial activity and outstanding accounting items.',
        steps: [
          'Review transactions',
          'Check exceptions',
          'Update financial records',
        ],
        attachments: [],
        submissionTime: '16:00',
        repeat: {
          repeatType: 'weekly',
          weeklyDay: 'thursday',
        },
      },
      {
        name: 'Weekly Compliance Review',
        description:
          'Review compliance activities and outstanding requirements.',
        steps: [
          'Review requirements',
          'Check documentation',
          'Record missing items',
        ],
        attachments: [],
        submissionTime: '15:00',
        repeat: {
          repeatType: 'weekly',
          weeklyDay: 'thursday',
        },
      },
      {
        name: 'Weekly Support Quality Review',
        description: 'Review customer support quality and recurring issues.',
        steps: [
          'Review support cases',
          'Identify recurring issues',
          'Record improvements',
        ],
        attachments: [],
        submissionTime: '16:30',
        repeat: {
          repeatType: 'weekly',
          weeklyDay: 'friday',
        },
      },
    ],
    employeeIds: ['emp-007', 'emp-035'],
  },
  {
    id: 'job-007',
    title: 'Marketing Specialist',
    description: 'Plan and execute marketing campaigns and content.',
    departmentId: 'dep-007',
    seniorityLevelId: 'sen-002',
    reportingManagerId: 'emp-010',
    qualificationIds: ['qual-009', 'qual-016'],
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
        name: 'Performance Achievement',
        description: 'Percentage of assigned objectives achieved.',
        measure: 88,
        target: 95,
        weight: 60,
      },
      {
        name: 'Quality Score',
        description: 'Quality and accuracy of completed work.',
        measure: 93,
        target: 95,
        weight: 40,
      },
    ],
    fixedTasks: [
      {
        name: 'Weekly Operations Report',
        description:
          'Review operational performance and prepare the weekly report.',
        steps: [
          'Review operations',
          'Summarize performance',
          'Record recommendations',
        ],
        attachments: [],
        submissionTime: '15:00',
        repeat: {
          repeatType: 'weekly',
          weeklyDay: 'friday',
        },
      },
      {
        name: 'Customer Follow-Up Review',
        description:
          'Follow up with customers on active requests and opportunities.',
        steps: [
          'Review customer list',
          'Complete follow-ups',
          'Update customer records',
        ],
        attachments: [],
        submissionTime: '16:00',
        repeat: {
          repeatType: 'multiple_days',
          multipleDays: ['monday', 'wednesday', 'friday'],
        },
      },
      {
        name: 'Sales Outreach',
        description: 'Perform scheduled outreach to prospective customers.',
        steps: ['Review prospects', 'Contact prospects', 'Record responses'],
        attachments: [],
        submissionTime: '17:00',
        repeat: {
          repeatType: 'multiple_days',
          multipleDays: ['monday', 'tuesday', 'thursday'],
        },
      },
    ],
    employeeIds: ['emp-008', 'emp-036'],
  },
  {
    id: 'job-008',
    title: 'Customer Support Agent',
    description: 'Handle customer requests and resolve service issues.',
    departmentId: 'dep-008',
    seniorityLevelId: 'sen-002',
    reportingManagerId: 'emp-011',
    qualificationIds: ['qual-005', 'qual-022'],
    scheduleType: 'shifts',
    performanceMetrics: [
      {
        name: 'Performance Achievement',
        description: 'Percentage of assigned objectives achieved.',
        measure: 91,
        target: 95,
        weight: 60,
      },
      {
        name: 'Quality Score',
        description: 'Quality and accuracy of completed work.',
        measure: 85,
        target: 95,
        weight: 40,
      },
    ],
    fixedTasks: [
      {
        name: 'Equipment Inspection',
        description:
          'Inspect workplace equipment and record maintenance issues.',
        steps: [
          'Inspect equipment',
          'Record issues',
          'Submit maintenance requests',
        ],
        attachments: [],
        submissionTime: '14:00',
        repeat: {
          repeatType: 'multiple_days',
          multipleDays: ['monday', 'wednesday'],
        },
      },
      {
        name: 'Warehouse Stock Check',
        description:
          'Perform physical stock checks for selected inventory items.',
        steps: ['Check stock', 'Compare quantities', 'Record discrepancies'],
        attachments: [],
        submissionTime: '13:00',
        repeat: {
          repeatType: 'multiple_days',
          multipleDays: ['tuesday', 'thursday', 'saturday'],
        },
      },
    ],
    employeeIds: ['emp-009', 'emp-037', 'emp-038'],
  },
  {
    id: 'job-009',
    title: 'IT Support Specialist',
    description: 'Maintain internal systems and provide technical support.',
    departmentId: 'dep-009',
    seniorityLevelId: 'sen-003',
    reportingManagerId: 'emp-012',
    qualificationIds: ['qual-022', 'qual-007'],
    scheduleType: 'shifts',
    performanceMetrics: [
      {
        name: 'Performance Achievement',
        description: 'Percentage of assigned objectives achieved.',
        measure: 94,
        target: 95,
        weight: 60,
      },
      {
        name: 'Quality Score',
        description: 'Quality and accuracy of completed work.',
        measure: 90,
        target: 95,
        weight: 40,
      },
    ],
    fixedTasks: [
      {
        name: 'Social Media Content Review',
        description:
          'Review scheduled social media content before publication.',
        steps: [
          'Review content',
          'Check schedule',
          'Approve or request changes',
        ],
        attachments: [],
        submissionTime: '12:00',
        repeat: {
          repeatType: 'multiple_days',
          multipleDays: [
            'monday',
            'wednesday',
            'friday',
            'sunday',
            'tuesday',
            'thursday',
            'saturday',
          ],
        },
      },
      {
        name: 'Security Monitoring Review',
        description:
          'Review security alerts and investigate outstanding events.',
        steps: ['Review alerts', 'Investigate events', 'Document findings'],
        attachments: [],
        submissionTime: '18:00',
        repeat: {
          repeatType: 'multiple_days',
          multipleDays: ['monday', 'thursday'],
        },
      },
      {
        name: 'Employee Attendance Review',
        description: 'Review attendance records and identify irregularities.',
        steps: [
          'Review attendance',
          'Identify exceptions',
          'Record follow-up actions',
        ],
        attachments: [],
        submissionTime: '10:00',
        repeat: {
          repeatType: 'multiple_days',
          multipleDays: ['monday', 'wednesday', 'friday'],
        },
      },
    ],
    employeeIds: ['emp-010', 'emp-039'],
  },
  {
    id: 'job-010',
    title: 'QA Engineer',
    description: 'Test software releases and maintain quality standards.',
    departmentId: 'dep-010',
    seniorityLevelId: 'sen-003',
    reportingManagerId: 'emp-013',
    qualificationIds: ['qual-017', 'qual-001'],
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
        name: 'Performance Achievement',
        description: 'Percentage of assigned objectives achieved.',
        measure: 82,
        target: 95,
        weight: 60,
      },
      {
        name: 'Quality Score',
        description: 'Quality and accuracy of completed work.',
        measure: 95,
        target: 95,
        weight: 40,
      },
    ],
    fixedTasks: [
      {
        name: 'Delivery Schedule Check',
        description:
          'Review upcoming deliveries and identify delays or exceptions.',
        steps: [
          'Review deliveries',
          'Check schedules',
          'Contact relevant parties',
        ],
        attachments: [],
        submissionTime: '11:00',
        repeat: {
          repeatType: 'multiple_days',
          multipleDays: ['tuesday', 'thursday', 'saturday'],
        },
      },
    ],
    employeeIds: ['emp-011', 'emp-040'],
  },
  {
    id: 'job-011',
    title: 'Procurement Specialist',
    description: 'Manage purchasing activities and supplier relationships.',
    departmentId: 'dep-011',
    seniorityLevelId: 'sen-002',
    reportingManagerId: 'emp-014',
    qualificationIds: ['qual-011', 'qual-020'],
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
        name: 'Performance Achievement',
        description: 'Percentage of assigned objectives achieved.',
        measure: 85,
        target: 95,
        weight: 60,
      },
      {
        name: 'Quality Score',
        description: 'Quality and accuracy of completed work.',
        measure: 87,
        target: 95,
        weight: 40,
      },
    ],
    fixedTasks: [
      {
        name: 'Project Status Check',
        description: 'Check project progress across active workstreams.',
        steps: ['Review project status', 'Check blockers', 'Update progress'],
        attachments: [],
        submissionTime: '16:00',
        repeat: {
          repeatType: 'multiple_days',
          multipleDays: ['monday', 'wednesday'],
        },
      },
    ],
    employeeIds: ['emp-012', 'emp-041'],
  },
  {
    id: 'job-012',
    title: 'Supply Chain Coordinator',
    description: 'Coordinate inventory flow and supply chain operations.',
    departmentId: 'dep-012',
    seniorityLevelId: 'sen-003',
    reportingManagerId: 'emp-015',
    qualificationIds: ['qual-021', 'qual-011'],
    scheduleType: 'shifts',
    performanceMetrics: [
      {
        name: 'Performance Achievement',
        description: 'Percentage of assigned objectives achieved.',
        measure: 88,
        target: 95,
        weight: 60,
      },
      {
        name: 'Quality Score',
        description: 'Quality and accuracy of completed work.',
        measure: 92,
        target: 95,
        weight: 40,
      },
    ],
    fixedTasks: [
      {
        name: 'Monthly Employee Records Review',
        description:
          'Review employee records and ensure required information is up to date.',
        steps: [
          'Review records',
          'Identify missing information',
          'Update records',
        ],
        attachments: [],
        submissionTime: '15:00',
        repeat: {
          repeatType: 'monthly',
          monthlyDays: [1, 5, 10, 25],
        },
      },
    ],
    employeeIds: ['emp-013', 'emp-042'],
  },
  {
    id: 'job-013',
    title: 'Legal Specialist',
    description:
      'Support contracts, legal documentation, and compliance matters.',
    departmentId: 'dep-013',
    seniorityLevelId: 'sen-003',
    reportingManagerId: 'emp-016',
    qualificationIds: ['qual-020'],
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
        name: 'Performance Achievement',
        description: 'Percentage of assigned objectives achieved.',
        measure: 91,
        target: 95,
        weight: 60,
      },
      {
        name: 'Quality Score',
        description: 'Quality and accuracy of completed work.',
        measure: 84,
        target: 95,
        weight: 40,
      },
    ],
    fixedTasks: [
      {
        name: 'Monthly Payroll Review',
        description:
          'Review payroll information before the monthly payroll cycle.',
        steps: [
          'Review payroll data',
          'Check exceptions',
          'Record corrections',
        ],
        attachments: [],
        submissionTime: '16:00',
        repeat: {
          repeatType: 'monthly',
          monthlyDays: [5, 10, 15, 20],
        },
      },
    ],
    employeeIds: ['emp-014', 'emp-043'],
  },
  {
    id: 'job-014',
    title: 'Administrative Coordinator',
    description:
      'Coordinate administrative requests and company documentation.',
    departmentId: 'dep-014',
    seniorityLevelId: 'sen-002',
    reportingManagerId: 'emp-017',
    qualificationIds: ['qual-020', 'qual-003'],
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
        name: 'Performance Achievement',
        description: 'Percentage of assigned objectives achieved.',
        measure: 94,
        target: 95,
        weight: 60,
      },
      {
        name: 'Quality Score',
        description: 'Quality and accuracy of completed work.',
        measure: 89,
        target: 95,
        weight: 40,
      },
    ],
    fixedTasks: [
      {
        name: 'Customer Feedback Review',
        description:
          'Review customer feedback and identify recurring issues or improvement opportunities.',
        steps: [
          'Review customer feedback',
          'Identify recurring issues',
          'Group feedback by category',
          'Record improvement actions',
        ],
        attachments: [],
        submissionTime: '14:30',
        repeat: {
          repeatType: 'multiple_days',
          multipleDays: ['monday', 'wednesday', 'friday'],
        },
      },
    ],
    employeeIds: ['emp-015', 'emp-044'],
  },
  {
    id: 'job-015',
    title: 'Business Development Executive',
    description:
      'Identify growth opportunities and develop strategic accounts.',
    departmentId: 'dep-015',
    seniorityLevelId: 'sen-004',
    reportingManagerId: 'emp-018',
    qualificationIds: ['qual-010', 'qual-020'],
    scheduleType: 'fixed',
    fixedSchedule: {
      checkInFrom: '09:30',
      checkInTo: '10:00',
      checkOutFrom: '17:30',
      checkOutTo: '18:00',
      hoursPerDay: 8,
    },
    performanceMetrics: [
      {
        name: 'Performance Achievement',
        description: 'Percentage of assigned objectives achieved.',
        measure: 82,
        target: 95,
        weight: 60,
      },
      {
        name: 'Quality Score',
        description: 'Quality and accuracy of completed work.',
        measure: 94,
        target: 95,
        weight: 40,
      },
    ],
    fixedTasks: [
      {
        name: 'Weekly Budget Review',
        description:
          'Review the department budget and identify significant variances.',
        steps: [
          'Review budget figures',
          'Compare actual spending against the budget',
          'Identify significant variances',
          'Record required actions',
        ],
        attachments: [],
        submissionTime: '15:00',
        repeat: {
          repeatType: 'multiple_days',
          multipleDays: ['monday', 'wednesday', 'friday'],
        },
      },
      {
        name: 'Team Performance Review',
        description:
          'Review employee and team performance results and identify areas for improvement.',
        steps: [
          'Review performance results',
          'Compare results against targets',
          'Identify areas requiring improvement',
          'Record recommendations',
        ],
        attachments: [],
        submissionTime: '16:00',
        repeat: {
          repeatType: 'multiple_days',
          multipleDays: ['tuesday', 'thursday'],
        },
      },
    ],
    employeeIds: ['emp-016', 'emp-045'],
  },
  {
    id: 'job-016',
    title: 'Data Analyst',
    description: 'Analyze business data and provide actionable insights.',
    departmentId: 'dep-016',
    seniorityLevelId: 'sen-003',
    reportingManagerId: 'emp-019',
    qualificationIds: ['qual-016', 'qual-007'],
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
        name: 'Performance Achievement',
        description: 'Percentage of assigned objectives achieved.',
        measure: 85,
        target: 95,
        weight: 60,
      },
      {
        name: 'Quality Score',
        description: 'Quality and accuracy of completed work.',
        measure: 86,
        target: 95,
        weight: 40,
      },
    ],
    fixedTasks: [
      {
        name: 'Monthly Management Report',
        description:
          'Prepare the monthly management report covering key business activities.',
        steps: [
          'Collect department updates',
          'Prepare report',
          'Review key findings',
        ],
        attachments: [],
        submissionTime: '16:30',
        repeat: {
          repeatType: 'monthly',
          monthlyDays: [1, 2, 5, 10, 25],
        },
      },
    ],
    employeeIds: ['emp-017', 'emp-046'],
  },
  {
    id: 'job-017',
    title: 'Security Specialist',
    description: 'Protect company systems and monitor security controls.',
    departmentId: 'dep-017',
    seniorityLevelId: 'sen-003',
    reportingManagerId: 'emp-020',
    qualificationIds: ['qual-019', 'qual-018'],
    scheduleType: 'shifts',
    performanceMetrics: [
      {
        name: 'Performance Achievement',
        description: 'Percentage of assigned objectives achieved.',
        measure: 88,
        target: 95,
        weight: 60,
      },
      {
        name: 'Quality Score',
        description: 'Quality and accuracy of completed work.',
        measure: 91,
        target: 95,
        weight: 40,
      },
    ],
    fixedTasks: [
      {
        name: 'Monthly Marketing Performance Review',
        description: 'Review marketing performance for the previous month.',
        steps: [
          'Review campaign results',
          'Analyze performance',
          'Prepare recommendations',
        ],
        attachments: [],
        submissionTime: '15:00',
        repeat: {
          repeatType: 'monthly',
          monthlyDays: [22, 24],
        },
      },
    ],
    employeeIds: ['emp-018', 'emp-047'],
  },
  {
    id: 'job-018',
    title: 'Training Coordinator',
    description:
      'Coordinate employee training programs and learning activities.',
    departmentId: 'dep-018',
    seniorityLevelId: 'sen-002',
    reportingManagerId: 'emp-021',
    qualificationIds: ['qual-023', 'qual-014'],
    scheduleType: 'fixed',
    fixedSchedule: {
      checkInFrom: '09:30',
      checkInTo: '10:00',
      checkOutFrom: '17:30',
      checkOutTo: '18:00',
      hoursPerDay: 8,
    },
    performanceMetrics: [
      {
        name: 'Performance Achievement',
        description: 'Percentage of assigned objectives achieved.',
        measure: 91,
        target: 95,
        weight: 60,
      },
      {
        name: 'Quality Score',
        description: 'Quality and accuracy of completed work.',
        measure: 96,
        target: 95,
        weight: 40,
      },
    ],
    fixedTasks: [
      {
        name: 'Monthly Equipment Maintenance',
        description:
          'Review equipment condition and schedule required maintenance.',
        steps: [
          'Inspect equipment',
          'Review maintenance history',
          'Schedule maintenance',
        ],
        attachments: [],
        submissionTime: '14:00',
        repeat: {
          repeatType: 'monthly',
          monthlyDays: [20, 25],
        },
      },
    ],
    employeeIds: ['emp-019', 'emp-048'],
  },
  {
    id: 'job-019',
    title: 'Facilities Coordinator',
    description:
      'Manage workplace facilities, maintenance, and service requests.',
    departmentId: 'dep-019',
    seniorityLevelId: 'sen-003',
    reportingManagerId: 'emp-022',
    qualificationIds: ['qual-020', 'qual-003'],
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
        name: 'Performance Achievement',
        description: 'Percentage of assigned objectives achieved.',
        measure: 94,
        target: 95,
        weight: 60,
      },
      {
        name: 'Quality Score',
        description: 'Quality and accuracy of completed work.',
        measure: 88,
        target: 95,
        weight: 40,
      },
    ],
    fixedTasks: [
      {
        name: 'Monthly Security Review',
        description:
          'Review security events and controls from the previous month.',
        steps: [
          'Review incidents',
          'Check security controls',
          'Document findings',
        ],
        attachments: [],
        submissionTime: '17:00',
        repeat: {
          repeatType: 'monthly',
          monthlyDays: [18, 20, 22],
        },
      },
    ],
    employeeIds: ['emp-020', 'emp-049'],
  },
  {
    id: 'job-020',
    title: 'Retail Supervisor',
    description: 'Supervise retail operations and daily store performance.',
    departmentId: 'dep-020',
    seniorityLevelId: 'sen-011',
    reportingManagerId: 'emp-023',
    qualificationIds: ['qual-004', 'qual-005'],
    scheduleType: 'shifts',
    performanceMetrics: [
      {
        name: 'Performance Achievement',
        description: 'Percentage of assigned objectives achieved.',
        measure: 82,
        target: 95,
        weight: 60,
      },
      {
        name: 'Quality Score',
        description: 'Quality and accuracy of completed work.',
        measure: 93,
        target: 95,
        weight: 40,
      },
    ],
    fixedTasks: [
      {
        name: 'Monthly Compliance Audit',
        description:
          'Review compliance documentation and outstanding requirements.',
        steps: [
          'Review documentation',
          'Check requirements',
          'Record deficiencies',
        ],
        attachments: [],
        submissionTime: '16:00',
        repeat: {
          repeatType: 'monthly',
          monthlyDays: [15, 20, 25],
        },
      },
    ],
    employeeIds: ['emp-021', 'emp-050'],
  },
  {
    id: 'job-021',
    title: 'Logistics Coordinator',
    description: 'Coordinate deliveries, shipments, and logistics schedules.',
    departmentId: 'dep-021',
    seniorityLevelId: 'sen-003',
    reportingManagerId: 'emp-001',
    qualificationIds: ['qual-021', 'qual-011'],
    scheduleType: 'shifts',
    performanceMetrics: [
      {
        name: 'Performance Achievement',
        description: 'Percentage of assigned objectives achieved.',
        measure: 85,
        target: 95,
        weight: 60,
      },
      {
        name: 'Quality Score',
        description: 'Quality and accuracy of completed work.',
        measure: 85,
        target: 95,
        weight: 40,
      },
    ],
    fixedTasks: [
      {
        name: 'Monthly Supplier Review',
        description:
          'Review supplier performance and outstanding procurement issues.',
        steps: [
          'Review supplier performance',
          'Check deliveries',
          'Record issues',
        ],
        attachments: [],
        submissionTime: '15:30',
        repeat: {
          repeatType: 'monthly',
          monthlyDays: [12, 18, 19, 20],
        },
      },
    ],
    employeeIds: ['emp-022'],
  },
  {
    id: 'job-022',
    title: 'Compliance Officer',
    description:
      'Monitor compliance requirements and maintain audit readiness.',
    departmentId: 'dep-022',
    seniorityLevelId: 'sen-004',
    reportingManagerId: 'emp-002',
    qualificationIds: ['qual-020', 'qual-013'],
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
        name: 'Performance Achievement',
        description: 'Percentage of assigned objectives achieved.',
        measure: 88,
        target: 95,
        weight: 60,
      },
      {
        name: 'Quality Score',
        description: 'Quality and accuracy of completed work.',
        measure: 90,
        target: 95,
        weight: 40,
      },
    ],
    fixedTasks: [
      {
        name: 'Monthly Inventory Audit',
        description:
          'Perform a monthly inventory audit and document discrepancies.',
        steps: ['Count inventory', 'Compare records', 'Document discrepancies'],
        attachments: [],
        submissionTime: '14:00',
        repeat: {
          repeatType: 'monthly',
          monthlyDays: [10, 15, 20, 25],
        },
      },
    ],
    employeeIds: ['emp-023'],
  },
  {
    id: 'job-023',
    title: 'Strategy Analyst',
    description: 'Analyze business performance and support strategic planning.',
    departmentId: 'dep-023',
    seniorityLevelId: 'sen-004',
    reportingManagerId: 'emp-003',
    qualificationIds: ['qual-016', 'qual-020'],
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
        name: 'Performance Achievement',
        description: 'Percentage of assigned objectives achieved.',
        measure: 91,
        target: 95,
        weight: 60,
      },
      {
        name: 'Quality Score',
        description: 'Quality and accuracy of completed work.',
        measure: 95,
        target: 95,
        weight: 40,
      },
    ],
    fixedTasks: [
      {
        name: 'Monthly Financial Report',
        description:
          'Prepare and review the monthly financial performance report.',
        steps: ['Collect financial data', 'Prepare report', 'Review results'],
        attachments: [],
        submissionTime: '17:00',
        repeat: {
          repeatType: 'monthly',
          monthlyDays: [7, 9, 18, 26],
        },
      },
    ],
    employeeIds: [],
  },
];
