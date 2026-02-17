export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  icon: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface Stat {
  label: string;
  value: string;
}

export interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface CourseSection {
  id: string;
  category: string;
  description: string;
  courses: Course[];
}