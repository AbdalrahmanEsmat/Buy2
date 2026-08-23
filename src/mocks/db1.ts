//------------ Types ------------
import type {
  Department,
  Employee,
  Job,
  Qualification,
  SeniorityLevel,
} from "@/types";

//------------ dbs ------------

// 51 employees
export const employees: Record<string, Employee> = {
  "emp-001": {
    employeeId: "emp-001",
    name: "Ahmed Hassan",
    email: "ahmed.hassan@buy2.com",
    joinDate: "2023-02-15",
  },
  "emp-002": {
    employeeId: "emp-002",
    name: "Sara Mohamed",
    email: "sara.mohamed@buy2.com",
    joinDate: "2023-06-10",
  },
  "emp-003": {
    employeeId: "emp-003",
    name: "Omar Ali",
    email: "omar.ali@buy2.com",
    joinDate: "2024-01-08",
  },
  "emp-004": {
    employeeId: "emp-004",
    name: "Nour Ibrahim",
    email: "nour.ibrahim@buy2.com",
    joinDate: "2024-04-22",
  },
  "emp-005": {
    employeeId: "emp-005",
    name: "Youssef Khaled",
    email: "youssef.khaled@buy2.com",
    joinDate: "2024-09-01",
  },
  "emp-006": {
    employeeId: "emp-006",
    name: "Mariam Adel",
    email: "mariam.adel@buy2.com",
    joinDate: "2023-11-12",
  },
  "emp-007": {
    employeeId: "emp-007",
    name: "Karim Samir",
    email: "karim.samir@buy2.com",
    joinDate: "2024-02-19",
  },
  "emp-008": {
    employeeId: "emp-008",
    name: "Hana Mostafa",
    email: "hana.mostafa@buy2.com",
    joinDate: "2024-03-25",
  },
  "emp-009": {
    employeeId: "emp-009",
    name: "Mahmoud Tarek",
    email: "mahmoud.tarek@buy2.com",
    joinDate: "2023-08-14",
  },
  "emp-010": {
    employeeId: "emp-010",
    name: "Laila Fathy",
    email: "laila.fathy@buy2.com",
    joinDate: "2024-05-06",
  },
  "emp-011": {
    employeeId: "emp-011",
    name: "Adam Nabil",
    email: "adam.nabil@buy2.com",
    joinDate: "2023-10-02",
  },
  "emp-012": {
    employeeId: "emp-012",
    name: "Salma Wael",
    email: "salma.wael@buy2.com",
    joinDate: "2024-06-17",
  },
  "emp-013": {
    employeeId: "emp-013",
    name: "Hassan Emad",
    email: "hassan.emad@buy2.com",
    joinDate: "2023-04-29",
  },
  "emp-014": {
    employeeId: "emp-014",
    name: "Jana Hossam",
    email: "jana.hossam@buy2.com",
    joinDate: "2024-07-08",
  },
  "emp-015": {
    employeeId: "emp-015",
    name: "Mostafa Ayman",
    email: "mostafa.ayman@buy2.com",
    joinDate: "2023-12-04",
  },
  "emp-016": {
    employeeId: "emp-016",
    name: "Reem Ashraf",
    email: "reem.ashraf@buy2.com",
    joinDate: "2024-08-21",
  },
  "emp-017": {
    employeeId: "emp-017",
    name: "Khaled Wael",
    email: "khaled.wael@buy2.com",
    joinDate: "2023-07-11",
  },
  "emp-018": {
    employeeId: "emp-018",
    name: "Dina Sameh",
    email: "dina.sameh@buy2.com",
    joinDate: "2024-09-16",
  },
  "emp-019": {
    employeeId: "emp-019",
    name: "Tamer Nasser",
    email: "tamer.nasser@buy2.com",
    joinDate: "2023-05-23",
  },
  "emp-020": {
    employeeId: "emp-020",
    name: "Farah Magdy",
    email: "farah.magdy@buy2.com",
    joinDate: "2024-10-01",
  },
  "emp-021": {
    employeeId: "emp-021",
    name: "Ziad Fares",
    email: "ziad.fares@buy2.com",
    joinDate: "2023-09-18",
  },
  "emp-022": {
    employeeId: "emp-022",
    name: "Aya Sherif",
    email: "aya.sherif@buy2.com",
    joinDate: "2024-11-05",
  },
  "emp-023": {
    employeeId: "emp-023",
    name: "Othman Reda",
    email: "othman.reda@buy2.com",
    joinDate: "2025-01-13",
  },
  "emp-024": {
    employeeId: "emp-024",
    name: "Amr Hamdy",
    email: "amr.hamdy@buy2.com",
    joinDate: "2024-10-14",
  },

  "emp-025": {
    employeeId: "emp-025",
    name: "Mona Adel",
    email: "mona.adel@buy2.com",
    joinDate: "2023-03-20",
  },

  "emp-026": {
    employeeId: "emp-026",
    name: "Omar Hany",
    email: "omar.hany@buy2.com",
    joinDate: "2024-01-29",
  },

  "emp-027": {
    employeeId: "emp-027",
    name: "Rana Mahmoud",
    email: "rana.mahmoud@buy2.com",
    joinDate: "2024-02-12",
  },

  "emp-028": {
    employeeId: "emp-028",
    name: "Ehab Mostafa",
    email: "ehab.mostafa@buy2.com",
    joinDate: "2023-06-26",
  },

  "emp-029": {
    employeeId: "emp-029",
    name: "Mai Tarek",
    email: "mai.tarek@buy2.com",
    joinDate: "2024-03-11",
  },

  "emp-030": {
    employeeId: "emp-030",
    name: "Yassin Ahmed",
    email: "yassin.ahmed@buy2.com",
    joinDate: "2023-11-27",
  },

  "emp-031": {
    employeeId: "emp-031",
    name: "Heba Khaled",
    email: "heba.khaled@buy2.com",
    joinDate: "2024-04-08",
  },

  "emp-032": {
    employeeId: "emp-032",
    name: "Karim Adel",
    email: "karim.adel@buy2.com",
    joinDate: "2024-05-20",
  },

  "emp-033": {
    employeeId: "emp-033",
    name: "Nada Hassan",
    email: "nada.hassan@buy2.com",
    joinDate: "2023-08-07",
  },

  "emp-034": {
    employeeId: "emp-034",
    name: "Sherif Nabil",
    email: "sherif.nabil@buy2.com",
    joinDate: "2024-06-03",
  },

  "emp-035": {
    employeeId: "emp-035",
    name: "Dalia Samir",
    email: "dalia.samir@buy2.com",
    joinDate: "2023-12-18",
  },

  "emp-036": {
    employeeId: "emp-036",
    name: "Mahmoud Ashraf",
    email: "mahmoud.ashraf@buy2.com",
    joinDate: "2024-07-22",
  },

  "emp-037": {
    employeeId: "emp-037",
    name: "Aya Mostafa",
    email: "aya.mostafa@buy2.com",
    joinDate: "2024-08-05",
  },

  "emp-038": {
    employeeId: "emp-038",
    name: "Hossam Fathy",
    email: "hossam.fathy@buy2.com",
    joinDate: "2023-09-04",
  },

  "emp-039": {
    employeeId: "emp-039",
    name: "Menna Wael",
    email: "menna.wael@buy2.com",
    joinDate: "2024-09-09",
  },

  "emp-040": {
    employeeId: "emp-040",
    name: "Tarek Emad",
    email: "tarek.emad@buy2.com",
    joinDate: "2023-05-15",
  },

  "emp-041": {
    employeeId: "emp-041",
    name: "Esraa Nasser",
    email: "esraa.nasser@buy2.com",
    joinDate: "2024-10-21",
  },

  "emp-042": {
    employeeId: "emp-042",
    name: "Mostafa Reda",
    email: "mostafa.reda@buy2.com",
    joinDate: "2025-02-03",
  },

  "emp-043": {
    employeeId: "emp-043",
    name: "Rania Fathy",
    email: "rania.fathy@buy2.com",
    joinDate: "2023-07-24",
  },

  "emp-044": {
    employeeId: "emp-044",
    name: "Ahmed Nasser",
    email: "ahmed.nasser@buy2.com",
    joinDate: "2024-11-18",
  },

  "emp-045": {
    employeeId: "emp-045",
    name: "Yara Emad",
    email: "yara.emad@buy2.com",
    joinDate: "2025-03-10",
  },

  "emp-046": {
    employeeId: "emp-046",
    name: "Khaled Hassan",
    email: "khaled.hassan@buy2.com",
    joinDate: "2023-10-16",
  },

  "emp-047": {
    employeeId: "emp-047",
    name: "Salma Ibrahim",
    email: "salma.ibrahim@buy2.com",
    joinDate: "2024-12-02",
  },

  "emp-048": {
    employeeId: "emp-048",
    name: "Mazen Ali",
    email: "mazen.ali@buy2.com",
    joinDate: "2025-04-07",
  },

  "emp-049": {
    employeeId: "emp-049",
    name: "Farida Sameh",
    email: "farida.sameh@buy2.com",
    joinDate: "2024-12-16",
  },

  "emp-050": {
    employeeId: "emp-050",
    name: "Nouran Magdy",
    email: "nouran.magdy@buy2.com",
    joinDate: "2025-05-12",
  },
};

// 23 qualifications
export const qualifications: Record<string, Qualification> = {
  "qual-001": {
    id: "qual-001",
    name: "React",
  },
  "qual-002": {
    id: "qual-002",
    name: "Node.js",
  },
  "qual-003": {
    id: "qual-003",
    name: "Project Management",
  },
  "qual-004": {
    id: "qual-004",
    name: "POS Systems",
  },
  "qual-005": {
    id: "qual-005",
    name: "Customer Service",
  },
  "qual-006": {
    id: "qual-006",
    name: "TypeScript",
  },
  "qual-007": {
    id: "qual-007",
    name: "SQL",
  },
  "qual-008": {
    id: "qual-008",
    name: "UI/UX Design",
  },
  "qual-009": {
    id: "qual-009",
    name: "Digital Marketing",
  },
  "qual-010": {
    id: "qual-010",
    name: "Sales Negotiation",
  },
  "qual-011": {
    id: "qual-011",
    name: "Inventory Management",
  },
  "qual-012": {
    id: "qual-012",
    name: "Accounting",
  },
  "qual-013": {
    id: "qual-013",
    name: "Financial Analysis",
  },
  "qual-014": {
    id: "qual-014",
    name: "Recruitment",
  },
  "qual-015": {
    id: "qual-015",
    name: "Payroll",
  },
  "qual-016": {
    id: "qual-016",
    name: "Data Analysis",
  },
  "qual-017": {
    id: "qual-017",
    name: "Quality Assurance",
  },
  "qual-018": {
    id: "qual-018",
    name: "DevOps",
  },
  "qual-019": {
    id: "qual-019",
    name: "Cybersecurity",
  },
  "qual-020": {
    id: "qual-020",
    name: "Business Administration",
  },
  "qual-021": {
    id: "qual-021",
    name: "Supply Chain",
  },
  "qual-022": {
    id: "qual-022",
    name: "Technical Support",
  },
  "qual-023": {
    id: "qual-023",
    name: "Training & Development",
  },
};

// 23 seniority levels
export const seniorityLevels: Record<string, SeniorityLevel> = {
  "sen-001": {
    id: "sen-001",
    name: "Junior",
  },
  "sen-002": {
    id: "sen-002",
    name: "Mid-Level",
  },
  "sen-003": {
    id: "sen-003",
    name: "Senior",
  },
  "sen-004": {
    id: "sen-004",
    name: "Lead",
  },
  "sen-005": {
    id: "sen-005",
    name: "Manager",
  },
  "sen-006": {
    id: "sen-006",
    name: "Trainee",
  },
  "sen-007": {
    id: "sen-007",
    name: "Associate",
  },
  "sen-008": {
    id: "sen-008",
    name: "Senior Associate",
  },
  "sen-009": {
    id: "sen-009",
    name: "Specialist",
  },
  "sen-010": {
    id: "sen-010",
    name: "Senior Specialist",
  },
  "sen-011": {
    id: "sen-011",
    name: "Supervisor",
  },
  "sen-012": {
    id: "sen-012",
    name: "Assistant Manager",
  },
  "sen-013": {
    id: "sen-013",
    name: "Deputy Manager",
  },
  "sen-014": {
    id: "sen-014",
    name: "Department Manager",
  },
  "sen-015": {
    id: "sen-015",
    name: "Senior Manager",
  },
  "sen-016": {
    id: "sen-016",
    name: "Principal",
  },
  "sen-017": {
    id: "sen-017",
    name: "Staff",
  },
  "sen-018": {
    id: "sen-018",
    name: "Team Lead",
  },
  "sen-019": {
    id: "sen-019",
    name: "Head",
  },
  "sen-020": {
    id: "sen-020",
    name: "Director",
  },
  "sen-021": {
    id: "sen-021",
    name: "Senior Director",
  },
  "sen-022": {
    id: "sen-022",
    name: "General Manager",
  },
  "sen-023": {
    id: "sen-023",
    name: "Executive",
  },
};

// 23 departments
export const departments: Record<string, Department> = {
  "dep-001": {
    id: "dep-001",
    name: "Engineering",
  },
  "dep-002": {
    id: "dep-002",
    name: "Sales",
  },
  "dep-003": {
    id: "dep-003",
    name: "Operations",
  },
  "dep-004": {
    id: "dep-004",
    name: "Human Resources",
  },
  "dep-005": {
    id: "dep-005",
    name: "Finance",
  },
  "dep-006": {
    id: "dep-006",
    name: "Product",
  },
  "dep-007": {
    id: "dep-007",
    name: "Marketing",
  },
  "dep-008": {
    id: "dep-008",
    name: "Customer Support",
  },
  "dep-009": {
    id: "dep-009",
    name: "Information Technology",
  },
  "dep-010": {
    id: "dep-010",
    name: "Quality Assurance",
  },
  "dep-011": {
    id: "dep-011",
    name: "Procurement",
  },
  "dep-012": {
    id: "dep-012",
    name: "Supply Chain",
  },
  "dep-013": {
    id: "dep-013",
    name: "Legal",
  },
  "dep-014": {
    id: "dep-014",
    name: "Administration",
  },
  "dep-015": {
    id: "dep-015",
    name: "Business Development",
  },
  "dep-016": {
    id: "dep-016",
    name: "Data & Analytics",
  },
  "dep-017": {
    id: "dep-017",
    name: "Security",
  },
  "dep-018": {
    id: "dep-018",
    name: "Training & Development",
  },
  "dep-019": {
    id: "dep-019",
    name: "Facilities",
  },
  "dep-020": {
    id: "dep-020",
    name: "Retail",
  },
  "dep-021": {
    id: "dep-021",
    name: "Logistics",
  },
  "dep-022": {
    id: "dep-022",
    name: "Compliance",
  },
  "dep-023": {
    id: "dep-023",
    name: "Strategy",
  },
};

// 23 jobs
export const jobs: Record<string, Job> = {
  "job-001": {
    id: "job-001",
    title: "Frontend Developer",
    description: "Build and maintain web applications.",
    departmentId: "dep-001",
    seniorityLevelId: "sen-003",
    reportingManagerId: "emp-001",
    qualificationIds: ["qual-001", "qual-006"],
    scheduleType: "fixed",
    fixedSchedule: {
      checkInFrom: "09:00",
      checkInTo: "09:30",
      checkOutFrom: "17:00",
      checkOutTo: "17:30",
      hoursPerDay: 8,
    },
    performanceMetrics: [
      {
        name: "Performance Achievement",
        description: "Percentage of assigned objectives achieved.",
        measure: 85,
        target: 95,
        weight: 60,
      },
      {
        name: "Quality Score",
        description: "Quality and accuracy of completed work.",
        measure: 89,
        target: 95,
        weight: 40,
      },
    ],
    fixedTasks: [
      {
        name: "Development Task",
        description:
          "Complete assigned development work according to requirements.",
        steps: [
          "Review the assigned work and requirements.",
          "Complete the required activities.",
          "Check the result for accuracy and quality.",
          "Record any issues or follow-up actions.",
          "Submit the completed task.",
        ],
        attachments: [
          "../FakeFiles/jobManagement/Buy2 Business.docx",
          "../FakeFiles/jobManagement/Buy2 Technical.docx",
        ],
        submissionTime: "17:00",
        repeat: ["daily"],
      },
    ],
    employeeIds: ["emp-002", "emp-024", "emp-025"],
  },
  "job-002": {
    id: "job-002",
    title: "Backend Developer",
    description: "Develop and maintain backend services and APIs.",
    departmentId: "dep-001",
    seniorityLevelId: "sen-003",
    reportingManagerId: "emp-001",
    qualificationIds: ["qual-002", "qual-007"],
    scheduleType: "fixed",
    fixedSchedule: {
      checkInFrom: "08:30",
      checkInTo: "09:00",
      checkOutFrom: "16:30",
      checkOutTo: "17:00",
      hoursPerDay: 8,
    },
    performanceMetrics: [
      {
        name: "Performance Achievement",
        description: "Percentage of assigned objectives achieved.",
        measure: 88,
        target: 95,
        weight: 60,
      },
      {
        name: "Quality Score",
        description: "Quality and accuracy of completed work.",
        measure: 94,
        target: 95,
        weight: 40,
      },
    ],
    fixedTasks: [
      {
        name: "Development Task",
        description:
          "Complete assigned development work according to requirements.",
        steps: [
          "Review the assigned work and requirements.",
          "Complete the required activities.",
          "Check the result for accuracy and quality.",
          "Record any issues or follow-up actions.",
          "Submit the completed task.",
        ],
        attachments: [],
        submissionTime: "17:00",
        repeat: ["daily"],
      },
    ],
    employeeIds: ["emp-003", "emp-026", "emp-027"],
  },
  "job-003": {
    id: "job-003",
    title: "Sales Representative",
    description: "Manage customer relationships and achieve sales targets.",
    departmentId: "dep-002",
    seniorityLevelId: "sen-002",
    reportingManagerId: "emp-001",
    qualificationIds: ["qual-005", "qual-010"],
    scheduleType: "shifts",
    performanceMetrics: [
      {
        name: "Performance Achievement",
        description: "Percentage of assigned objectives achieved.",
        measure: 91,
        target: 95,
        weight: 60,
      },
      {
        name: "Quality Score",
        description: "Quality and accuracy of completed work.",
        measure: 86,
        target: 95,
        weight: 40,
      },
    ],
    fixedTasks: [
      {
        name: "Sales Follow-Up",
        description:
          "Follow up with assigned customers and update opportunity status.",
        steps: [
          "Review the assigned work and requirements.",
          "Complete the required activities.",
          "Check the result for accuracy and quality.",
          "Record any issues or follow-up actions.",
          "Submit the completed task.",
        ],
        attachments: [],
        submissionTime: "16:00",
        repeat: ["daily"],
      },
    ],
    employeeIds: ["emp-004", "emp-028", "emp-029", "emp-030"],
  },
  "job-004": {
    id: "job-004",
    title: "Operations Coordinator",
    description: "Coordinate daily operational activities and processes.",
    departmentId: "dep-003",
    seniorityLevelId: "sen-004",
    reportingManagerId: "emp-001",
    qualificationIds: ["qual-003", "qual-004"],
    scheduleType: "shifts",
    performanceMetrics: [
      {
        name: "Performance Achievement",
        description: "Percentage of assigned objectives achieved.",
        measure: 94,
        target: 95,
        weight: 60,
      },
      {
        name: "Quality Score",
        description: "Quality and accuracy of completed work.",
        measure: 91,
        target: 95,
        weight: 40,
      },
    ],
    fixedTasks: [
      {
        name: "Operations Check",
        description: "Review daily operations and resolve outstanding issues.",
        steps: [
          "Review the assigned work and requirements.",
          "Complete the required activities.",
          "Check the result for accuracy and quality.",
          "Record any issues or follow-up actions.",
          "Submit the completed task.",
        ],
        attachments: [],
        submissionTime: "17:00",
        repeat: ["daily"],
      },
    ],
    employeeIds: ["emp-005", "emp-031", "emp-032"],
  },
  "job-005": {
    id: "job-005",
    title: "HR Manager",
    description: "Manage employee relations and HR operations.",
    departmentId: "dep-004",
    seniorityLevelId: "sen-005",
    reportingManagerId: "emp-001",
    qualificationIds: ["qual-003", "qual-014"],
    scheduleType: "fixed",
    fixedSchedule: {
      checkInFrom: "08:30",
      checkInTo: "09:00",
      checkOutFrom: "16:30",
      checkOutTo: "17:00",
      hoursPerDay: 8,
    },
    performanceMetrics: [
      {
        name: "Performance Achievement",
        description: "Percentage of assigned objectives achieved.",
        measure: 82,
        target: 95,
        weight: 60,
      },
      {
        name: "Quality Score",
        description: "Quality and accuracy of completed work.",
        measure: 96,
        target: 95,
        weight: 40,
      },
    ],
    fixedTasks: [
      {
        name: "Employee Check-In",
        description: "Review employee requests and follow up on HR actions.",
        steps: [
          "Review the assigned work and requirements.",
          "Complete the required activities.",
          "Check the result for accuracy and quality.",
          "Record any issues or follow-up actions.",
          "Submit the completed task.",
        ],
        attachments: [],
        submissionTime: "17:00",
        repeat: ["weekly"],
      },
    ],
    employeeIds: ["emp-006", "emp-033", "emp-034"],
  },
  "job-006": {
    id: "job-006",
    title: "Product Specialist",
    description: "Define product requirements and coordinate product delivery.",
    departmentId: "dep-006",
    seniorityLevelId: "sen-003",
    reportingManagerId: "emp-009",
    qualificationIds: ["qual-003", "qual-016"],
    scheduleType: "fixed",
    fixedSchedule: {
      checkInFrom: "09:30",
      checkInTo: "10:00",
      checkOutFrom: "17:30",
      checkOutTo: "18:00",
      hoursPerDay: 8,
    },
    performanceMetrics: [
      {
        name: "Performance Achievement",
        description: "Percentage of assigned objectives achieved.",
        measure: 85,
        target: 95,
        weight: 60,
      },
      {
        name: "Quality Score",
        description: "Quality and accuracy of completed work.",
        measure: 88,
        target: 95,
        weight: 40,
      },
    ],
    fixedTasks: [
      {
        name: "Daily Task",
        description:
          "Complete assigned responsibilities and submit the required update.",
        steps: [
          "Review the assigned work and requirements.",
          "Complete the required activities.",
          "Check the result for accuracy and quality.",
          "Record any issues or follow-up actions.",
          "Submit the completed task.",
        ],
        attachments: [],
        submissionTime: "16:00",
        repeat: ["daily"],
      },
    ],
    employeeIds: ["emp-007", "emp-035"],
  },
  "job-007": {
    id: "job-007",
    title: "Marketing Specialist",
    description: "Plan and execute marketing campaigns and content.",
    departmentId: "dep-007",
    seniorityLevelId: "sen-002",
    reportingManagerId: "emp-010",
    qualificationIds: ["qual-009", "qual-016"],
    scheduleType: "fixed",
    fixedSchedule: {
      checkInFrom: "09:00",
      checkInTo: "09:30",
      checkOutFrom: "17:00",
      checkOutTo: "17:30",
      hoursPerDay: 8,
    },
    performanceMetrics: [
      {
        name: "Performance Achievement",
        description: "Percentage of assigned objectives achieved.",
        measure: 88,
        target: 95,
        weight: 60,
      },
      {
        name: "Quality Score",
        description: "Quality and accuracy of completed work.",
        measure: 93,
        target: 95,
        weight: 40,
      },
    ],
    fixedTasks: [
      {
        name: "Daily Task",
        description:
          "Complete assigned responsibilities and submit the required update.",
        steps: [
          "Review the assigned work and requirements.",
          "Complete the required activities.",
          "Check the result for accuracy and quality.",
          "Record any issues or follow-up actions.",
          "Submit the completed task.",
        ],
        attachments: [],
        submissionTime: "17:00",
        repeat: ["daily"],
      },
    ],
    employeeIds: ["emp-008", "emp-036"],
  },
  "job-008": {
    id: "job-008",
    title: "Customer Support Agent",
    description: "Handle customer requests and resolve service issues.",
    departmentId: "dep-008",
    seniorityLevelId: "sen-002",
    reportingManagerId: "emp-011",
    qualificationIds: ["qual-005", "qual-022"],
    scheduleType: "shifts",
    performanceMetrics: [
      {
        name: "Performance Achievement",
        description: "Percentage of assigned objectives achieved.",
        measure: 91,
        target: 95,
        weight: 60,
      },
      {
        name: "Quality Score",
        description: "Quality and accuracy of completed work.",
        measure: 85,
        target: 95,
        weight: 40,
      },
    ],
    fixedTasks: [
      {
        name: "Daily Task",
        description:
          "Complete assigned responsibilities and submit the required update.",
        steps: [
          "Review the assigned work and requirements.",
          "Complete the required activities.",
          "Check the result for accuracy and quality.",
          "Record any issues or follow-up actions.",
          "Submit the completed task.",
        ],
        attachments: [],
        submissionTime: "17:00",
        repeat: ["daily"],
      },
    ],
    employeeIds: ["emp-009", "emp-037", "emp-038"],
  },
  "job-009": {
    id: "job-009",
    title: "IT Support Specialist",
    description: "Maintain internal systems and provide technical support.",
    departmentId: "dep-009",
    seniorityLevelId: "sen-003",
    reportingManagerId: "emp-012",
    qualificationIds: ["qual-022", "qual-007"],
    scheduleType: "shifts",
    performanceMetrics: [
      {
        name: "Performance Achievement",
        description: "Percentage of assigned objectives achieved.",
        measure: 94,
        target: 95,
        weight: 60,
      },
      {
        name: "Quality Score",
        description: "Quality and accuracy of completed work.",
        measure: 90,
        target: 95,
        weight: 40,
      },
    ],
    fixedTasks: [
      {
        name: "Daily Task",
        description:
          "Complete assigned responsibilities and submit the required update.",
        steps: [
          "Review the assigned work and requirements.",
          "Complete the required activities.",
          "Check the result for accuracy and quality.",
          "Record any issues or follow-up actions.",
          "Submit the completed task.",
        ],
        attachments: [],
        submissionTime: "16:00",
        repeat: ["daily"],
      },
    ],
    employeeIds: ["emp-010", "emp-039"],
  },
  "job-010": {
    id: "job-010",
    title: "QA Engineer",
    description: "Test software releases and maintain quality standards.",
    departmentId: "dep-010",
    seniorityLevelId: "sen-003",
    reportingManagerId: "emp-013",
    qualificationIds: ["qual-017", "qual-001"],
    scheduleType: "fixed",
    fixedSchedule: {
      checkInFrom: "09:00",
      checkInTo: "09:30",
      checkOutFrom: "17:00",
      checkOutTo: "17:30",
      hoursPerDay: 8,
    },
    performanceMetrics: [
      {
        name: "Performance Achievement",
        description: "Percentage of assigned objectives achieved.",
        measure: 82,
        target: 95,
        weight: 60,
      },
      {
        name: "Quality Score",
        description: "Quality and accuracy of completed work.",
        measure: 95,
        target: 95,
        weight: 40,
      },
    ],
    fixedTasks: [
      {
        name: "Daily Task",
        description:
          "Complete assigned responsibilities and submit the required update.",
        steps: [
          "Review the assigned work and requirements.",
          "Complete the required activities.",
          "Check the result for accuracy and quality.",
          "Record any issues or follow-up actions.",
          "Submit the completed task.",
        ],
        attachments: [],
        submissionTime: "17:00",
        repeat: ["weekly"],
      },
    ],
    employeeIds: ["emp-011", "emp-040"],
  },
  "job-011": {
    id: "job-011",
    title: "Procurement Specialist",
    description: "Manage purchasing activities and supplier relationships.",
    departmentId: "dep-011",
    seniorityLevelId: "sen-002",
    reportingManagerId: "emp-014",
    qualificationIds: ["qual-011", "qual-020"],
    scheduleType: "fixed",
    fixedSchedule: {
      checkInFrom: "08:30",
      checkInTo: "09:00",
      checkOutFrom: "16:30",
      checkOutTo: "17:00",
      hoursPerDay: 8,
    },
    performanceMetrics: [
      {
        name: "Performance Achievement",
        description: "Percentage of assigned objectives achieved.",
        measure: 85,
        target: 95,
        weight: 60,
      },
      {
        name: "Quality Score",
        description: "Quality and accuracy of completed work.",
        measure: 87,
        target: 95,
        weight: 40,
      },
    ],
    fixedTasks: [
      {
        name: "Daily Task",
        description:
          "Complete assigned responsibilities and submit the required update.",
        steps: [
          "Review the assigned work and requirements.",
          "Complete the required activities.",
          "Check the result for accuracy and quality.",
          "Record any issues or follow-up actions.",
          "Submit the completed task.",
        ],
        attachments: [],
        submissionTime: "17:00",
        repeat: ["daily"],
      },
    ],
    employeeIds: ["emp-012", "emp-041"],
  },
  "job-012": {
    id: "job-012",
    title: "Supply Chain Coordinator",
    description: "Coordinate inventory flow and supply chain operations.",
    departmentId: "dep-012",
    seniorityLevelId: "sen-003",
    reportingManagerId: "emp-015",
    qualificationIds: ["qual-021", "qual-011"],
    scheduleType: "shifts",
    performanceMetrics: [
      {
        name: "Performance Achievement",
        description: "Percentage of assigned objectives achieved.",
        measure: 88,
        target: 95,
        weight: 60,
      },
      {
        name: "Quality Score",
        description: "Quality and accuracy of completed work.",
        measure: 92,
        target: 95,
        weight: 40,
      },
    ],
    fixedTasks: [
      {
        name: "Daily Task",
        description:
          "Complete assigned responsibilities and submit the required update.",
        steps: [
          "Review the assigned work and requirements.",
          "Complete the required activities.",
          "Check the result for accuracy and quality.",
          "Record any issues or follow-up actions.",
          "Submit the completed task.",
        ],
        attachments: [],
        submissionTime: "16:00",
        repeat: ["daily"],
      },
    ],
    employeeIds: ["emp-013", "emp-042"],
  },
  "job-013": {
    id: "job-013",
    title: "Legal Specialist",
    description:
      "Support contracts, legal documentation, and compliance matters.",
    departmentId: "dep-013",
    seniorityLevelId: "sen-003",
    reportingManagerId: "emp-016",
    qualificationIds: ["qual-020"],
    scheduleType: "fixed",
    fixedSchedule: {
      checkInFrom: "09:00",
      checkInTo: "09:30",
      checkOutFrom: "17:00",
      checkOutTo: "17:30",
      hoursPerDay: 8,
    },
    performanceMetrics: [
      {
        name: "Performance Achievement",
        description: "Percentage of assigned objectives achieved.",
        measure: 91,
        target: 95,
        weight: 60,
      },
      {
        name: "Quality Score",
        description: "Quality and accuracy of completed work.",
        measure: 84,
        target: 95,
        weight: 40,
      },
    ],
    fixedTasks: [
      {
        name: "Daily Task",
        description:
          "Complete assigned responsibilities and submit the required update.",
        steps: [
          "Review the assigned work and requirements.",
          "Complete the required activities.",
          "Check the result for accuracy and quality.",
          "Record any issues or follow-up actions.",
          "Submit the completed task.",
        ],
        attachments: [],
        submissionTime: "17:00",
        repeat: ["daily"],
      },
    ],
    employeeIds: ["emp-014", "emp-043"],
  },
  "job-014": {
    id: "job-014",
    title: "Administrative Coordinator",
    description:
      "Coordinate administrative requests and company documentation.",
    departmentId: "dep-014",
    seniorityLevelId: "sen-002",
    reportingManagerId: "emp-017",
    qualificationIds: ["qual-020", "qual-003"],
    scheduleType: "fixed",
    fixedSchedule: {
      checkInFrom: "08:30",
      checkInTo: "09:00",
      checkOutFrom: "16:30",
      checkOutTo: "17:00",
      hoursPerDay: 8,
    },
    performanceMetrics: [
      {
        name: "Performance Achievement",
        description: "Percentage of assigned objectives achieved.",
        measure: 94,
        target: 95,
        weight: 60,
      },
      {
        name: "Quality Score",
        description: "Quality and accuracy of completed work.",
        measure: 89,
        target: 95,
        weight: 40,
      },
    ],
    fixedTasks: [
      {
        name: "Daily Task",
        description:
          "Complete assigned responsibilities and submit the required update.",
        steps: [
          "Review the assigned work and requirements.",
          "Complete the required activities.",
          "Check the result for accuracy and quality.",
          "Record any issues or follow-up actions.",
          "Submit the completed task.",
        ],
        attachments: [],
        submissionTime: "17:00",
        repeat: ["daily"],
      },
    ],
    employeeIds: ["emp-015", "emp-044"],
  },
  "job-015": {
    id: "job-015",
    title: "Business Development Executive",
    description:
      "Identify growth opportunities and develop strategic accounts.",
    departmentId: "dep-015",
    seniorityLevelId: "sen-004",
    reportingManagerId: "emp-018",
    qualificationIds: ["qual-010", "qual-020"],
    scheduleType: "fixed",
    fixedSchedule: {
      checkInFrom: "09:30",
      checkInTo: "10:00",
      checkOutFrom: "17:30",
      checkOutTo: "18:00",
      hoursPerDay: 8,
    },
    performanceMetrics: [
      {
        name: "Performance Achievement",
        description: "Percentage of assigned objectives achieved.",
        measure: 82,
        target: 95,
        weight: 60,
      },
      {
        name: "Quality Score",
        description: "Quality and accuracy of completed work.",
        measure: 94,
        target: 95,
        weight: 40,
      },
    ],
    fixedTasks: [
      {
        name: "Daily Task",
        description:
          "Complete assigned responsibilities and submit the required update.",
        steps: [
          "Review the assigned work and requirements.",
          "Complete the required activities.",
          "Check the result for accuracy and quality.",
          "Record any issues or follow-up actions.",
          "Submit the completed task.",
        ],
        attachments: [],
        submissionTime: "16:00",
        repeat: ["weekly"],
      },
    ],
    employeeIds: ["emp-016", "emp-045"],
  },
  "job-016": {
    id: "job-016",
    title: "Data Analyst",
    description: "Analyze business data and provide actionable insights.",
    departmentId: "dep-016",
    seniorityLevelId: "sen-003",
    reportingManagerId: "emp-019",
    qualificationIds: ["qual-016", "qual-007"],
    scheduleType: "fixed",
    fixedSchedule: {
      checkInFrom: "09:00",
      checkInTo: "09:30",
      checkOutFrom: "17:00",
      checkOutTo: "17:30",
      hoursPerDay: 8,
    },
    performanceMetrics: [
      {
        name: "Performance Achievement",
        description: "Percentage of assigned objectives achieved.",
        measure: 85,
        target: 95,
        weight: 60,
      },
      {
        name: "Quality Score",
        description: "Quality and accuracy of completed work.",
        measure: 86,
        target: 95,
        weight: 40,
      },
    ],
    fixedTasks: [
      {
        name: "Daily Task",
        description:
          "Complete assigned responsibilities and submit the required update.",
        steps: [
          "Review the assigned work and requirements.",
          "Complete the required activities.",
          "Check the result for accuracy and quality.",
          "Record any issues or follow-up actions.",
          "Submit the completed task.",
        ],
        attachments: [],
        submissionTime: "17:00",
        repeat: ["daily"],
      },
    ],
    employeeIds: ["emp-017", "emp-046"],
  },
  "job-017": {
    id: "job-017",
    title: "Security Specialist",
    description: "Protect company systems and monitor security controls.",
    departmentId: "dep-017",
    seniorityLevelId: "sen-003",
    reportingManagerId: "emp-020",
    qualificationIds: ["qual-019", "qual-018"],
    scheduleType: "shifts",
    performanceMetrics: [
      {
        name: "Performance Achievement",
        description: "Percentage of assigned objectives achieved.",
        measure: 88,
        target: 95,
        weight: 60,
      },
      {
        name: "Quality Score",
        description: "Quality and accuracy of completed work.",
        measure: 91,
        target: 95,
        weight: 40,
      },
    ],
    fixedTasks: [
      {
        name: "Daily Task",
        description:
          "Complete assigned responsibilities and submit the required update.",
        steps: [
          "Review the assigned work and requirements.",
          "Complete the required activities.",
          "Check the result for accuracy and quality.",
          "Record any issues or follow-up actions.",
          "Submit the completed task.",
        ],
        attachments: [],
        submissionTime: "17:00",
        repeat: ["daily"],
      },
    ],
    employeeIds: ["emp-018", "emp-047"],
  },
  "job-018": {
    id: "job-018",
    title: "Training Coordinator",
    description:
      "Coordinate employee training programs and learning activities.",
    departmentId: "dep-018",
    seniorityLevelId: "sen-002",
    reportingManagerId: "emp-021",
    qualificationIds: ["qual-023", "qual-014"],
    scheduleType: "fixed",
    fixedSchedule: {
      checkInFrom: "09:30",
      checkInTo: "10:00",
      checkOutFrom: "17:30",
      checkOutTo: "18:00",
      hoursPerDay: 8,
    },
    performanceMetrics: [
      {
        name: "Performance Achievement",
        description: "Percentage of assigned objectives achieved.",
        measure: 91,
        target: 95,
        weight: 60,
      },
      {
        name: "Quality Score",
        description: "Quality and accuracy of completed work.",
        measure: 96,
        target: 95,
        weight: 40,
      },
    ],
    fixedTasks: [
      {
        name: "Daily Task",
        description:
          "Complete assigned responsibilities and submit the required update.",
        steps: [
          "Review the assigned work and requirements.",
          "Complete the required activities.",
          "Check the result for accuracy and quality.",
          "Record any issues or follow-up actions.",
          "Submit the completed task.",
        ],
        attachments: [],
        submissionTime: "16:00",
        repeat: ["daily"],
      },
    ],
    employeeIds: ["emp-019", "emp-048"],
  },
  "job-019": {
    id: "job-019",
    title: "Facilities Coordinator",
    description:
      "Manage workplace facilities, maintenance, and service requests.",
    departmentId: "dep-019",
    seniorityLevelId: "sen-003",
    reportingManagerId: "emp-022",
    qualificationIds: ["qual-020", "qual-003"],
    scheduleType: "fixed",
    fixedSchedule: {
      checkInFrom: "09:00",
      checkInTo: "09:30",
      checkOutFrom: "17:00",
      checkOutTo: "17:30",
      hoursPerDay: 8,
    },
    performanceMetrics: [
      {
        name: "Performance Achievement",
        description: "Percentage of assigned objectives achieved.",
        measure: 94,
        target: 95,
        weight: 60,
      },
      {
        name: "Quality Score",
        description: "Quality and accuracy of completed work.",
        measure: 88,
        target: 95,
        weight: 40,
      },
    ],
    fixedTasks: [
      {
        name: "Daily Task",
        description:
          "Complete assigned responsibilities and submit the required update.",
        steps: [
          "Review the assigned work and requirements.",
          "Complete the required activities.",
          "Check the result for accuracy and quality.",
          "Record any issues or follow-up actions.",
          "Submit the completed task.",
        ],
        attachments: [],
        submissionTime: "17:00",
        repeat: ["daily"],
      },
    ],
    employeeIds: ["emp-020", "emp-049"],
  },
  "job-020": {
    id: "job-020",
    title: "Retail Supervisor",
    description: "Supervise retail operations and daily store performance.",
    departmentId: "dep-020",
    seniorityLevelId: "sen-011",
    reportingManagerId: "emp-023",
    qualificationIds: ["qual-004", "qual-005"],
    scheduleType: "shifts",
    performanceMetrics: [
      {
        name: "Performance Achievement",
        description: "Percentage of assigned objectives achieved.",
        measure: 82,
        target: 95,
        weight: 60,
      },
      {
        name: "Quality Score",
        description: "Quality and accuracy of completed work.",
        measure: 93,
        target: 95,
        weight: 40,
      },
    ],
    fixedTasks: [
      {
        name: "Daily Task",
        description:
          "Complete assigned responsibilities and submit the required update.",
        steps: [
          "Review the assigned work and requirements.",
          "Complete the required activities.",
          "Check the result for accuracy and quality.",
          "Record any issues or follow-up actions.",
          "Submit the completed task.",
        ],
        attachments: [],
        submissionTime: "17:00",
        repeat: ["weekly"],
      },
    ],
    employeeIds: ["emp-021", "emp-050"],
  },
  "job-021": {
    id: "job-021",
    title: "Logistics Coordinator",
    description: "Coordinate deliveries, shipments, and logistics schedules.",
    departmentId: "dep-021",
    seniorityLevelId: "sen-003",
    reportingManagerId: "emp-001",
    qualificationIds: ["qual-021", "qual-011"],
    scheduleType: "shifts",
    performanceMetrics: [
      {
        name: "Performance Achievement",
        description: "Percentage of assigned objectives achieved.",
        measure: 85,
        target: 95,
        weight: 60,
      },
      {
        name: "Quality Score",
        description: "Quality and accuracy of completed work.",
        measure: 85,
        target: 95,
        weight: 40,
      },
    ],
    fixedTasks: [
      {
        name: "Daily Task",
        description:
          "Complete assigned responsibilities and submit the required update.",
        steps: [
          "Review the assigned work and requirements.",
          "Complete the required activities.",
          "Check the result for accuracy and quality.",
          "Record any issues or follow-up actions.",
          "Submit the completed task.",
        ],
        attachments: [],
        submissionTime: "16:00",
        repeat: ["daily"],
      },
    ],
    employeeIds: ["emp-022"],
  },
  "job-022": {
    id: "job-022",
    title: "Compliance Officer",
    description:
      "Monitor compliance requirements and maintain audit readiness.",
    departmentId: "dep-022",
    seniorityLevelId: "sen-004",
    reportingManagerId: "emp-002",
    qualificationIds: ["qual-020", "qual-013"],
    scheduleType: "fixed",
    fixedSchedule: {
      checkInFrom: "09:00",
      checkInTo: "09:30",
      checkOutFrom: "17:00",
      checkOutTo: "17:30",
      hoursPerDay: 8,
    },
    performanceMetrics: [
      {
        name: "Performance Achievement",
        description: "Percentage of assigned objectives achieved.",
        measure: 88,
        target: 95,
        weight: 60,
      },
      {
        name: "Quality Score",
        description: "Quality and accuracy of completed work.",
        measure: 90,
        target: 95,
        weight: 40,
      },
    ],
    fixedTasks: [
      {
        name: "Daily Task",
        description:
          "Complete assigned responsibilities and submit the required update.",
        steps: [
          "Review the assigned work and requirements.",
          "Complete the required activities.",
          "Check the result for accuracy and quality.",
          "Record any issues or follow-up actions.",
          "Submit the completed task.",
        ],
        attachments: [],
        submissionTime: "17:00",
        repeat: ["daily"],
      },
    ],
    employeeIds: ["emp-023"],
  },
  "job-023": {
    id: "job-023",
    title: "Strategy Analyst",
    description: "Analyze business performance and support strategic planning.",
    departmentId: "dep-023",
    seniorityLevelId: "sen-004",
    reportingManagerId: "emp-003",
    qualificationIds: ["qual-016", "qual-020"],
    scheduleType: "fixed",
    fixedSchedule: {
      checkInFrom: "08:30",
      checkInTo: "09:00",
      checkOutFrom: "16:30",
      checkOutTo: "17:00",
      hoursPerDay: 8,
    },
    performanceMetrics: [
      {
        name: "Performance Achievement",
        description: "Percentage of assigned objectives achieved.",
        measure: 91,
        target: 95,
        weight: 60,
      },
      {
        name: "Quality Score",
        description: "Quality and accuracy of completed work.",
        measure: 95,
        target: 95,
        weight: 40,
      },
    ],
    fixedTasks: [
      {
        name: "Daily Task",
        description:
          "Complete assigned responsibilities and submit the required update.",
        steps: [
          "Review the assigned work and requirements.",
          "Complete the required activities.",
          "Check the result for accuracy and quality.",
          "Record any issues or follow-up actions.",
          "Submit the completed task.",
        ],
        attachments: [],
        submissionTime: "17:00",
        repeat: ["daily"],
      },
    ],
    employeeIds: [],
  },
};

// roles
export const roles = [
  {
    id: 1,
    name: "General Manager",
    users: 2,
    permissions: [
      "All admin controls",
      "Request services",
      "Renewal contracts",
      "View all documents",
      "Replay with reject or approve",
    ],
  },
  {
    id: 2,
    name: "General Manager",
    users: 20,
    permissions: [
      "All admin controls",
      "Request services",
      "Renewal contracts",
      "View all documents",
    ],
  },
  {
    id: 3,
    name: "General Manager",
    users: 2,
    permissions: [
      "All admin controls",
      "Request services",
      "Renewal contracts",
      "View all documents",
      "Replay with reject or approve",
    ],
  },
  {
    id: 4,
    name: "General Manager",
    users: 2,
    permissions: [
      "All admin controls",
      "Request services",
      "Renewal contracts",
      "View all documents",
      "Replay with reject or approve",
    ],
  },
  {
    id: 5,
    name: "General Manager",
    users: 2,
    permissions: [
      "All admin controls",
      "Request services",
      "Renewal contracts",
      "View all documents",
      "Replay with reject or approve",
    ],
  },
];
