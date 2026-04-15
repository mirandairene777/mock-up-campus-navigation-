export interface Course {
  id: string;
  code: string;
  name: string;
  college: string;
  degree: string;
  description: string;
  duration: string;
}

export interface College {
  id: string;
  name: string;
  shortName: string;
  description: string;
  dean: string;
  courses: string[];
}

export const coursesSource = {
  campus: 'LSPU Santa Cruz Campus (SCC)',
  programsPage: 'https://lspu.edu.ph/courses/scc',
};

export const colleges: College[] = [
  {
    id: 'cas',
    name: 'College of Arts and Sciences',
    shortName: 'CAS',
    description: 'Liberal arts and science programs at LSPU SCC.',
    dean: 'To be updated',
    courses: ['bab', 'bsbio', 'bschem', 'bsmath', 'bspsych'],
  },
  {
    id: 'cbaa',
    name: 'College of Business, Administration and Accountancy',
    shortName: 'CBAA',
    description: 'Business, administration, and accountancy programs at LSPU SCC.',
    dean: 'To be updated',
    courses: ['bsba', 'bsa', 'bsais', 'mpa'],
  },
  {
    id: 'ccs',
    name: 'College of Computer Studies',
    shortName: 'CCS',
    description: 'Computing and IT programs at LSPU SCC.',
    dean: 'To be updated',
    courses: ['bsit', 'bscs', 'msit'],
  },
  {
    id: 'ccje',
    name: 'College of Criminal Justice Education',
    shortName: 'CCJE',
    description: 'Criminology and criminal justice education at LSPU SCC.',
    dean: 'To be updated',
    courses: ['bscrim'],
  },
  {
    id: 'cted',
    name: 'College of Teacher Education',
    shortName: 'CTED',
    description: 'Teacher education programs at LSPU SCC.',
    dean: 'To be updated',
    courses: ['bped', 'btled', 'maed'],
  },
  {
    id: 'shs',
    name: 'Senior High School',
    shortName: 'SHS',
    description: 'Senior High School tracks and strands at LSPU SCC.',
    dean: 'To be updated',
    courses: ['shs-abm', 'shs-humss', 'shs-stem', 'shs-tvl-he', 'shs-tvl-ict', 'shs-tvl-bpp'],
  },
];

export const courses: Course[] = [
  // Arts and Sciences (CAS)
  {
    id: 'bab',
    code: 'BAB',
    name: 'Broadcasting',
    college: 'cas',
    degree: 'Bachelor of Arts',
    description: 'Media communication, broadcasting, and production fundamentals.',
    duration: '4 years',
  },
  {
    id: 'bsbio',
    code: 'BS Bio',
    name: 'Biology',
    college: 'cas',
    degree: 'Bachelor of Science',
    description: 'Study of living organisms and their interactions.',
    duration: '4 years',
  },
  {
    id: 'bschem',
    code: 'BS Chem',
    name: 'Chemistry',
    college: 'cas',
    degree: 'Bachelor of Science',
    description: 'Foundational and applied chemistry for scientific and industrial fields.',
    duration: '4 years',
  },
  {
    id: 'bsmath',
    code: 'BS Math',
    name: 'Mathematics',
    college: 'cas',
    degree: 'Bachelor of Science',
    description: 'Advanced study of mathematical theories and applications.',
    duration: '4 years',
  },
  {
    id: 'bspsych',
    code: 'BS Psych',
    name: 'Psychology',
    college: 'cas',
    degree: 'Bachelor of Science',
    description: 'Scientific study of human behavior and mental processes.',
    duration: '4 years',
  },
  // Business, Administration and Accountancy (CBAA)
  {
    id: 'bsba',
    code: 'BSBA',
    name: 'Business Administration',
    college: 'cba',
    degree: 'Bachelor of Science in',
    description: 'Comprehensive business management education.',
    duration: '4 years',
  },
  {
    id: 'bsa',
    code: 'BSA',
    name: 'Accountancy',
    college: 'cba',
    degree: 'Bachelor of Science in',
    description: 'Professional accounting and financial management.',
    duration: '4 years',
  },
  {
    id: 'bsais',
    code: 'BSAIS',
    name: 'Accounting Information System',
    college: 'cba',
    degree: 'Bachelor of Science in',
    description: 'Integration of accounting and information technology.',
    duration: '4 years',
  },
  {
    id: 'mpa',
    code: 'MPA',
    name: 'Public Administration',
    college: 'cbaa',
    degree: 'Master in',
    description: 'Graduate program for public sector governance and administration.',
    duration: '2 years',
  },
  // Computer Studies (CCS)
  {
    id: 'bsit',
    code: 'BSIT',
    name: 'Information Technology',
    college: 'ccs',
    degree: 'Bachelor of Science in',
    description: 'IT infrastructure, software development, and systems administration.',
    duration: '4 years',
  },
  {
    id: 'bscs',
    code: 'BSCS',
    name: 'Computer Science',
    college: 'ccs',
    degree: 'Bachelor of Science in',
    description: 'Programming, algorithms, and software computation theory.',
    duration: '4 years',
  },
  {
    id: 'msit',
    code: 'MSIT',
    name: 'Information Technology',
    college: 'ccs',
    degree: 'Master in',
    description: 'Graduate-level information technology specialization.',
    duration: '2 years',
  },
  // Criminal Justice (CCJE)
  {
    id: 'bscrim',
    code: 'BS Crim',
    name: 'Criminology',
    college: 'ccje',
    degree: 'Bachelor of Science in',
    description: 'Study of crime, criminal behavior, and law enforcement.',
    duration: '4 years',
  },
  // Teacher Education (CTE)
  {
    id: 'bped',
    code: 'BPED',
    name: 'Physical Education',
    college: 'cted',
    degree: 'Bachelor of',
    description: 'Preparation for teaching physical education and sports-related subjects.',
    duration: '4 years',
  },
  {
    id: 'btled',
    code: 'BTLEd',
    name: 'Technology and Livelihood Education',
    college: 'cted',
    degree: 'Bachelor of',
    description: 'Teacher preparation focused on technology and livelihood tracks.',
    duration: '4 years',
  },
  {
    id: 'maed',
    code: 'MAEd',
    name: 'Education',
    college: 'cted',
    degree: 'Master of Arts in',
    description: 'Graduate studies for advanced educational practice and leadership.',
    duration: '2 years',
  },
  // Senior High School (SHS)
  {
    id: 'shs-abm',
    code: 'ABM',
    name: 'Accountancy, Business and Management',
    college: 'shs',
    degree: 'Senior High School Strand',
    description: 'Academic track strand for business, accountancy, and management paths.',
    duration: '2 years',
  },
  {
    id: 'shs-humss',
    code: 'HUMSS',
    name: 'Humanities and Social Sciences',
    college: 'shs',
    degree: 'Senior High School Strand',
    description: 'Academic track strand for communication, social sciences, and liberal arts.',
    duration: '2 years',
  },
  {
    id: 'shs-stem',
    code: 'STEM',
    name: 'Science, Technology, Engineering and Mathematics',
    college: 'shs',
    degree: 'Senior High School Strand',
    description: 'Academic track strand focused on science and technology preparation.',
    duration: '2 years',
  },
  {
    id: 'shs-tvl-he',
    code: 'TVL-HE',
    name: 'Home Economics',
    college: 'shs',
    degree: 'Senior High School Strand',
    description: 'TVL strand preparing students for home economics-related skills and careers.',
    duration: '2 years',
  },
  {
    id: 'shs-tvl-ict',
    code: 'TVL-ICT',
    name: 'Information and Communications Technology',
    college: 'shs',
    degree: 'Senior High School Strand',
    description: 'TVL strand for ICT competencies and tech support pathways.',
    duration: '2 years',
  },
  {
    id: 'shs-tvl-bpp',
    code: 'TVL-BPP',
    name: 'Bread and Pastry Production',
    college: 'shs',
    degree: 'Senior High School Strand',
    description: 'TVL strand focused on baking, pastry production, and food preparation.',
    duration: '2 years',
  },
];
