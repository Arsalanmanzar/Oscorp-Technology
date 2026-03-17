import { Feature, Testimonial, Stat, Category, RoadmapStep, CourseSection, GalleryStudent } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Courses', href: '/courses' },
  { name: 'Stories', href: '/stories' },
  { name: 'Contact', href: '/contact' },
];

export const CORE_CATEGORIES: Category[] = [
  {
    id: 'cat1',
    title: 'Operating Courses',
    description: 'Master heavy machinery operation and industrial control systems certification.',
    icon: 'Settings'
  },
  {
    id: 'cat2',
    title: 'Safety Officer Courses',
    description: 'Comprehensive HSE training aligned with global safety standards and risk assessment.',
    icon: 'HardHat'
  },
  {
    id: 'cat3',
    title: 'Job Oriented Courses',
    description: 'Rapid-track career skills designed for immediate industry deployment and soft skills.',
    icon: 'Briefcase'
  },
  {
    id: 'cat4',
    title: 'Quality Controller',
    description: 'Advanced QA/QC methodologies, ISO protocols, and industrial material testing.',
    icon: 'ScanEye'
  },
  {
    id: 'cat5',
    title: 'Welding',
    description: 'Specialized technical certification in Arc, MIG, TIG, and advanced metallurgy.',
    icon: 'Flame'
  }
];

export const INSTITUTE_FEATURES: Feature[] = [
  {
    id: 'f1',
    title: 'Lab Facilities',
    description: 'Train on industrial-grade chillers, live PLC/BMS simulation panels, and quantum-ready hardware kits.',
    icon: 'Cpu',
  },
  {
    id: 'f2',
    title: 'Industry-Standard Software',
    description: 'Master the tools that build the world: AutoCAD, Revit MEP, HAP, SolidWorks, and Catia.',
    icon: 'MonitorCheck',
  },
  {
    id: 'f3',
    title: 'Certified Instructors',
    description: 'Learn directly from working industry professionals and veteran engineers, not just academics.',
    icon: 'Award',
  },
  {
    id: 'f4',
    title: 'Design Studios',
    description: 'State-of-the-art workstations for high-fidelity rendering and rapid prototyping.',
    icon: 'Component',
  },
  {
    id: 'f5',
    title: 'Global Certification',
    description: 'Earn credentials recognized by top multinational corporations and secure your place in the global workforce.',
    icon: 'Globe2',
  }
];

export const ROADMAP_STEPS: RoadmapStep[] = [
  {
    id: 'step1',
    title: 'Theory & Software',
    description: 'Mastering the design principles.',
    icon: 'BookOpen',
  },
  {
    id: 'step2',
    title: 'Practical Lab Sessions',
    description: 'Hands-on training with real equipment.',
    icon: 'Wrench',
  },
  {
    id: 'step3',
    title: 'Certification & Interview Prep',
    description: 'Getting ready for the industry.',
    icon: 'FileCheck',
  },
  {
    id: 'step4',
    title: 'Interview & Job Landing',
    description: 'Do job interviews and land your new job.',
    icon: 'Briefcase',
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Ateequr Rahman',
    role: 'Senior Engineer',
    company: 'Cyberdyne Systems',
    content: "I enrolled in the HVAC training with zero practical knowledge, but the hands-on sessions and expert guidance completely transformed my skills. Within months, I secured a job opportunity in Dubai. Today, I’m working confidently in a professional environment—all thanks to this course.",
    image: 'https://picsum.photos/100/100?random=1',
  },
  {
    id: 't2',
    name: 'Arkam Naseem',
    role: 'CTO',
    company: 'Stark Industries',
    content: "The Safety training program not only gave me technical knowledge but also boosted my confidence to work internationally. The certification helped me land a job in Qatar, and I now feel proud to work in a globally recognized safety role.",
    image: 'https://picsum.photos/100/100?random=2',
  },
  {
    id: 't3',
    name: 'Asfi Khan',
    role: 'Lead Architect',
    company: 'Zaha Hadid Architects',
    content: "Learning BMS operations here was a game-changer for my career. The real-time system training and industry-focused approach helped me crack interviews easily. I am now working in Saudi Arabia as a BMS Operator, and it’s been a life-changing journey",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100',
  }
];

export const STATS: Stat[] = [
  { label: 'Graduates Hired', value: '99%' },
  { label: 'Partner Companies', value: '500+' },
  { label: 'Active Students', value: '1,200' },
  { label: 'Courses Offered', value: '30+' },
];

export const DETAILED_COURSE_SECTIONS: CourseSection[] = [
  {
    id: 'operating',
    category: 'Operating Courses',
    description: 'Heavy machinery operation and control certifications for large scale construction and logistics.',
    courses: [
      { id: '1', title: 'Forklift', duration: 'One Month', level: 'Beginner', description: 'Comprehensive forklift operation and safety training.', icon: 'Package' },
      { id: '2', title: 'JCB', duration: 'Two Months', level: 'Intermediate', description: 'JCB Backhoe Loader operation and maintenance techniques.', icon: 'Tractor' },
      { id: '3', title: 'Excavator', duration: 'Two Months', level: 'Intermediate', description: 'Hydraulic excavator operation for construction and earthmoving.', icon: 'Settings' },
      { id: '4', title: 'Mobile Crane', duration: 'Two Months', level: 'Advanced', description: 'Mobile crane lifting operations, load charts, and site safety.', icon: 'Truck' },
      { id: '5', title: 'Loader', duration: 'Two Months', level: 'Intermediate', description: 'Heavy wheel loader operation and material handling.', icon: 'Tractor' },
    ]
  },
  {
    id: 'safety',
    category: 'Safety Officer Courses',
    description: 'Global HSE standards training to ensure workplace safety and compliance.',
    courses: [
      { id: '6', title: 'Industrial Safety', duration: 'Three Months', level: 'Intermediate', description: 'Fundamentals of industrial hazard management and protocols.', icon: 'HardHat' },
      { id: '7', title: 'Industrial & Fire Safety', duration: 'Four Months', level: 'Intermediate', description: 'Combined industrial safety and fire prevention strategies.', icon: 'Flame' },
      { id: '8', title: 'Adv Dip Industrial Safety', duration: 'Six Months', level: 'Advanced', description: 'Advanced diploma in comprehensive industrial safety management.', icon: 'ShieldAlert' },
      { id: '9', title: 'IOSH-MS', duration: 'One Month', level: 'Intermediate', description: 'IOSH Managing Safely certification for leadership roles.', icon: 'FileCheck' },
      { id: '10', title: 'OSHA-30 Hours', duration: 'One Month', level: 'Beginner', description: 'OSHA 30-hour construction safety outreach program.', icon: 'Cone' },
      { id: '11', title: 'NEBOSH-IGC', duration: 'Three Months', level: 'Advanced', description: 'International General Certificate in Occupational Health and Safety.', icon: 'Globe2' },
    ]
  },
  {
    id: 'job',
    category: 'Job Oriented Courses',
    description: 'Skill-focused programs designed for immediate employment in technical sectors.',
    courses: [
      { id: '12', title: 'AC Technician', duration: 'Three Months', level: 'Beginner', description: 'Air conditioning system installation, service, and repair.', icon: 'Fan' },
      { id: '13', title: 'HVAC Technician', duration: 'Three Months', level: 'Intermediate', description: 'Heating, Ventilation, and Air Conditioning systems mastery.', icon: 'Wind' },
      { id: '14', title: 'Instrument Technician', duration: 'Three Months', level: 'Advanced', description: 'Industrial instrumentation, calibration, and control systems.', icon: 'Gauge' },
      { id: '15', title: 'BMS Technician', duration: 'Three Months', level: 'Advanced', description: 'Building Management Systems installation and monitoring.', icon: 'Monitor' },
      { id: '16', title: 'Land Surveyor', duration: 'Three Months', level: 'Intermediate', description: 'Land surveying techniques using total station and GPS equipment.', icon: 'Map' },
      { id: '17', title: 'CCTV Technician', duration: 'Three Months', level: 'Beginner', description: 'Security camera system installation, networking, and troubleshooting.', icon: 'Camera' },
      { id: '18', title: 'Electrician', duration: 'Three Months', level: 'Beginner', description: 'Domestic and industrial electrical wiring and safety.', icon: 'Zap' },
    ]
  },
  {
    id: 'qc',
    category: 'Quality Controller',
    description: 'Ensure industrial excellence with advanced QA/QC methodologies.',
    courses: [
      { id: '19', title: 'Mechanical QA & QC', duration: 'Three Months', level: 'Advanced', description: 'Quality assurance for mechanical industrial systems.', icon: 'Settings' },
      { id: '20', title: 'NDT LEVEL II', duration: 'One Month', level: 'Intermediate', description: 'Non-Destructive Testing Level II certification training.', icon: 'Scan' },
      { id: '21', title: 'NDT LEVEL II Certificate', duration: 'One Month', level: 'Intermediate', description: 'Certification process for NDT Level II professionals.', icon: 'FileBadge' },
    ]
  },
  {
    id: 'welding',
    category: 'Welding',
    description: 'Master the art of joining metals with precision and strength.',
    courses: [
      { id: '22', title: 'Arc Welding', duration: 'Two Months', level: 'Beginner', description: 'Shielded Metal Arc Welding (SMAW) fundamentals.', icon: 'Flame' },
      { id: '23', title: 'Argon (TIG) Welding', duration: 'Two Months', level: 'Intermediate', description: 'Tungsten Inert Gas (TIG) welding techniques.', icon: 'Zap' },
      { id: '24', title: 'MIG Welding', duration: 'One Month', level: 'Intermediate', description: 'Metal Inert Gas (MIG) welding operations.', icon: 'Flame' },
      { id: '25', title: 'Arc & Argon (TIG)-6G', duration: 'Three Months', level: 'Advanced', description: 'Combined Arc and TIG welding for 6G pipe positions.', icon: 'Circle' },
      { id: '26', title: 'Arc & Argon (TIG)-6G', duration: 'Four Months', level: 'Advanced', description: 'Extended 6G welding training for complete mastery.', icon: 'Circle' },
    ]
  }
];

export const AI_SYSTEM_INSTRUCTION = `You are "Oscorp Bot", a helpful and enthusiastic academic advisor for Oscorp Technology. 
Oscorp Technology is a premier technical institute.
We offer a wide range of technical and industrial courses:

Core Technical Disciplines:
1. Operating Courses (Forklift, JCB, Excavator, Crane, Loader)
2. Safety Officer Courses (Industrial Safety, IOSH, OSHA, NEBOSH)
3. Job Oriented Courses (AC/HVAC, Instrument Tech, BMS, Land Surveyor, CCTV, Electrician)
4. Quality Controller Courses (Mechanical QA/QC, NDT Level II)
5. Welding (Arc, TIG, MIG, 6G)

Key Value Propositions:
- Advanced Lab Facilities
- Industry Standard Software
- Certified Instructors
- 100% Practical Training

Your goal is to help potential students choose the right course based on their interests.
Keep your answers concise, professional, and encouraging. 
If asked about pricing, mention that scholarships are available and to contact admissions.
Do not make up courses that are not listed.
Always maintain a tone that fits a high-tech, futuristic institute.`;

export const GALLERY_STUDENTS: GalleryStudent[] = [
  {
    id: 'gs1',
    name: 'Shahbaz Ahmad',
    designation: 'HVAC Engineer',
    company: 'Emaar Properties',
    image: '/students/student1.jpeg',
  },
  {
    id: 'gs2',
    name: 'Mohammad Shahnawaz',
    designation: 'Safety Officer',
    company: 'Saudi Aramco',
    image: '/students/student2.jpeg',
  },
  {
    id: 'gs3',
    name: 'Ateequr Rahman',
    designation: 'QA/QC Inspector',
    company: 'Descon Engineering',
    image: '/students/student3.jpeg',
  },
  {
    id: 'gs4',
    name: 'Azam Ansari',
    designation: 'Welding Supervisor',
    company: 'Bechtel Corporation',
    image: '/students/student4.jpeg',
  },
  {
    id: 'gs5',
    name: 'Tauseef Ahmad',
    designation: 'Crane Operator',
    company: 'Al Habtoor Group',
    image: '/students/student5.jpeg',
  },
  {
    id: 'gs6',
    name: 'Arkam Naseem',
    designation: 'Instrument Technician',
    company: 'Engro Corporation',
    image: '/students/student6.jpeg',
  },
  {
    id: 'gs7',
    name: 'Arshad Ansari',
    designation: 'BMS Technician',
    company: 'Siemens Energy',
    image: '/students/student7.jpeg',
  },
  {
    id: 'gs8',
    name: 'Majid Hussain',
    designation: 'Fire Safety Officer',
    company: 'ADNOC',
    image: '/students/student8.jpeg',
  },
  {
    id: 'gs9',
    name: 'Asfi Khan',
    designation: '',
    company: '',
    image: '/students/Asfi Khan.jpeg',
  },
  {
    id: 'gs10',
    name: 'Asif Iqbal',
    designation: '',
    company: '',
    image: '/students/Asif Iqbal.jpeg',
  },
  {
    id: 'gs11',
    name: 'Babar Ali',
    designation: '',
    company: '',
    image: '/students/Babar Ali.jpeg',
  },
  {
    id: 'gs12',
    name: 'Ghulam Mustafa',
    designation: '',
    company: '',
    image: '/students/Ghulam Mustafa.jpeg',
  },
  {
    id: 'gs13',
    name: 'Khalid Ansari',
    designation: '',
    company: '',
    image: '/students/Khalid Ansari.jpeg',
  },
  {
    id: 'gs14',
    name: 'Mohammad Saif',
    designation: '',
    company: '',
    image: '/students/Mohammad Saif.jpeg',
  },
  {
    id: 'gs15',
    name: 'Mohammad Shamser',
    designation: '',
    company: '',
    image: '/students/Mohammad Shamser.jpeg',
  },
  {
    id: 'gs16',
    name: 'Mohammad Tauseef Khan',
    designation: '',
    company: '',
    image: '/students/Mohammad Tauseef Khan.jpeg',
  },
  {
    id: 'gs17',
    name: 'Mohammad Zameer',
    designation: '',
    company: '',
    image: '/students/Mohammad Zameer.jpeg',
  },
  {
    id: 'gs18',
    name: 'Shahnawaz Ahmad',
    designation: '',
    company: '',
    image: '/students/Shahnawaz Ahmad .jpeg',
  },
  {
    id: 'gs19',
    name: 'Shahnawaz Ansari',
    designation: '',
    company: '',
    image: '/students/Shahnawaz Ansari.jpeg',
  },
  {
    id: 'gs20',
    name: 'Wahid Ansari',
    designation: '',
    company: '',
    image: '/students/Wahid Ansari.jpeg',
  }
];