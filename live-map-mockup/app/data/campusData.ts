export interface Location {
  id: string;
  name: string;
  category: 'academic' | 'administrative' | 'facilities' | 'services' | 'recreational';
  description: string;
  coordinates: { x: number; y: number };
  details: {
    hours?: string;
    contact?: string;
    floor?: string;
  };
}

export const campusLocations: Location[] = [
  {
    id: '1',
    name: 'Main Building',
    category: 'administrative',
    description: 'Administrative offices and main campus services',
    coordinates: { x: 50, y: 40 },
    details: {
      hours: 'Mon-Fri 8:00 AM - 5:00 PM',
      contact: '(049) 501-0836',
    },
  },
  {
    id: '2',
    name: 'College of Engineering Building',
    category: 'academic',
    description: 'Engineering programs: Civil, Electrical, Mechanical, and Electronics Engineering',
    coordinates: { x: 35, y: 55 },
    details: {
      hours: 'Mon-Sat 7:00 AM - 7:00 PM',
      floor: '3 floors',
    },
  },
  {
    id: '3',
    name: 'College of Arts and Sciences Building',
    category: 'academic',
    description: 'IT, Computer Science, Mathematics, and Biology programs',
    coordinates: { x: 65, y: 45 },
    details: {
      hours: 'Mon-Sat 7:00 AM - 7:00 PM',
      floor: '4 floors',
    },
  },
  {
    id: '4',
    name: 'Library',
    category: 'facilities',
    description: 'University library with study areas and resources',
    coordinates: { x: 50, y: 60 },
    details: {
      hours: 'Mon-Sat 8:00 AM - 8:00 PM',
      contact: 'library@lspu.edu.ph',
    },
  },
  {
    id: '5',
    name: 'Student Center',
    category: 'services',
    description: 'Student activities and services',
    coordinates: { x: 45, y: 30 },
    details: {
      hours: 'Mon-Fri 8:00 AM - 6:00 PM',
    },
  },
  {
    id: '6',
    name: 'Cafeteria',
    category: 'services',
    description: 'Main dining hall and food services',
    coordinates: { x: 70, y: 55 },
    details: {
      hours: 'Mon-Sat 7:00 AM - 6:00 PM',
    },
  },
  {
    id: '7',
    name: 'College of Teacher Education Building',
    category: 'academic',
    description: 'Elementary and Secondary Education programs',
    coordinates: { x: 30, y: 35 },
    details: {
      hours: 'Mon-Sat 7:00 AM - 7:00 PM',
      floor: '3 floors',
    },
  },
  {
    id: '8',
    name: 'Gymnasium',
    category: 'recreational',
    description: 'Indoor sports facility and events venue',
    coordinates: { x: 60, y: 70 },
    details: {
      hours: 'Mon-Sat 6:00 AM - 8:00 PM',
    },
  },
  {
    id: '9',
    name: 'Computer Laboratory Building',
    category: 'facilities',
    description: 'Computer labs and IT services for all programs',
    coordinates: { x: 40, y: 45 },
    details: {
      hours: 'Mon-Sat 7:00 AM - 7:00 PM',
    },
  },
  {
    id: '10',
    name: 'Science Laboratory Building',
    category: 'facilities',
    description: 'Physics, Chemistry, and Biology laboratories',
    coordinates: { x: 55, y: 50 },
    details: {
      hours: 'Mon-Sat 7:00 AM - 6:00 PM',
    },
  },
  {
    id: '11',
    name: 'Registrar Office',
    category: 'administrative',
    description: 'Student records and registration',
    coordinates: { x: 52, y: 38 },
    details: {
      hours: 'Mon-Fri 8:00 AM - 5:00 PM',
      contact: 'registrar@lspu.edu.ph',
    },
  },
  {
    id: '12',
    name: 'Chapel',
    category: 'facilities',
    description: 'University chapel for worship and reflection',
    coordinates: { x: 75, y: 35 },
    details: {
      hours: 'Daily 6:00 AM - 6:00 PM',
    },
  },
  {
    id: '13',
    name: 'College of Business and Accountancy Building',
    category: 'academic',
    description: 'Business Administration, Accountancy, and BSAIS programs',
    coordinates: { x: 25, y: 60 },
    details: {
      hours: 'Mon-Sat 7:00 AM - 7:00 PM',
      floor: '3 floors',
    },
  },
  {
    id: '14',
    name: 'College of Criminal Justice Education Building',
    category: 'academic',
    description: 'Criminology program and law enforcement training',
    coordinates: { x: 75, y: 60 },
    details: {
      hours: 'Mon-Sat 7:00 AM - 7:00 PM',
      floor: '2 floors',
    },
  },
  {
    id: '15',
    name: 'Engineering Laboratories',
    category: 'facilities',
    description: 'Specialized labs for Civil, Mechanical, and Electrical Engineering',
    coordinates: { x: 30, y: 65 },
    details: {
      hours: 'Mon-Sat 7:00 AM - 6:00 PM',
    },
  },
  {
    id: '16',
    name: 'Electronics and Communications Lab',
    category: 'facilities',
    description: 'ECE laboratory with advanced telecommunications equipment',
    coordinates: { x: 38, y: 58 },
    details: {
      hours: 'Mon-Sat 7:00 AM - 6:00 PM',
    },
  },
  {
    id: '17',
    name: 'Programming and Software Development Lab',
    category: 'facilities',
    description: 'Dedicated lab for IT and Computer Science students',
    coordinates: { x: 68, y: 48 },
    details: {
      hours: 'Mon-Sat 7:00 AM - 7:00 PM',
    },
  },
  {
    id: '18',
    name: 'Language Laboratory',
    category: 'facilities',
    description: 'Multimedia language learning facility',
    coordinates: { x: 28, y: 42 },
    details: {
      hours: 'Mon-Sat 7:00 AM - 6:00 PM',
    },
  },
  {
    id: '19',
    name: 'Mathematics Learning Center',
    category: 'facilities',
    description: 'Tutorial and study area for mathematics courses',
    coordinates: { x: 62, y: 40 },
    details: {
      hours: 'Mon-Sat 7:00 AM - 6:00 PM',
    },
  },
  {
    id: '20',
    name: 'Mock Classroom - CTED',
    category: 'facilities',
    description: 'Practice teaching facility for education students',
    coordinates: { x: 32, y: 30 },
    details: {
      hours: 'Mon-Sat 7:00 AM - 6:00 PM',
    },
  },
  {
    id: '21',
    name: 'Business Simulation Lab',
    category: 'facilities',
    description: 'Business case studies and simulation exercises',
    coordinates: { x: 22, y: 56 },
    details: {
      hours: 'Mon-Sat 7:00 AM - 6:00 PM',
    },
  },
  {
    id: '22',
    name: 'Criminology Training Facility',
    category: 'facilities',
    description: 'Physical training and law enforcement simulation area',
    coordinates: { x: 78, y: 65 },
    details: {
      hours: 'Mon-Sat 6:00 AM - 6:00 PM',
    },
  },
  {
    id: '23',
    name: 'Research and Development Center',
    category: 'facilities',
    description: 'Research facilities for faculty and graduate students',
    coordinates: { x: 58, y: 32 },
    details: {
      hours: 'Mon-Fri 8:00 AM - 5:00 PM',
    },
  },
  {
    id: '24',
    name: 'Innovation Hub',
    category: 'facilities',
    description: 'Startup incubation and technology innovation center',
    coordinates: { x: 45, y: 68 },
    details: {
      hours: 'Mon-Sat 8:00 AM - 8:00 PM',
    },
  },
];

export const categories = [
  { id: 'all', name: 'All Locations', color: 'bg-blue-500' },
  { id: 'academic', name: 'Academic', color: 'bg-purple-500' },
  { id: 'administrative', name: 'Administrative', color: 'bg-green-500' },
  { id: 'facilities', name: 'Facilities', color: 'bg-orange-500' },
  { id: 'services', name: 'Services', color: 'bg-pink-500' },
  { id: 'recreational', name: 'Recreational', color: 'bg-cyan-500' },
];