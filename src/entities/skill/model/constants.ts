import type { Hobbies, WorkValues, SkillData, Benefits } from './types';

export const HOBBIES: Hobbies[] = [
  {
    title: 'Gaming',
    desc: 'Strategy & RPG enthusiast',
    icon: '🎮',
    details:
      'Particularly interested in games that challenge strategic thinking and problem-solving abilities. Currently exploring game development as a hobby.',
    color: 'rgb(42, 157, 143)',
  },
  {
    title: 'Hiking',
    desc: 'Nature exploration',
    icon: '🏔️',
    details:
      'Regular mountain trips and nature photography. Completed 12 major trails across different landscapes and terrains.',
    color: 'rgb(178, 255, 158)',
  },
  {
    title: 'Fitness',
    desc: 'Strength training',
    icon: '💪',
    details:
      'Dedicated to maintaining both physical and mental health through regular workout routines and yoga practices.',
    color: 'rgb(175, 252, 65)',
  },
  {
    title: 'Reading',
    desc: 'Tech & Science books',
    icon: '📚',
    details:
      'Always expanding knowledge through technical literature, science journals, and industry publications. Active member of two book clubs.',
    color: 'rgb(29, 211, 176)',
  },
];

export const WORK_VALUES: WorkValues[] = [
  {
    title: 'Clean Code Craftsman',
    description:
      'I write self-documenting code with clear naming conventions and modular architecture. My codebase consistently scores over 90% on maintainability metrics, reducing technical debt by 35% on recent projects.',
    metrics: ['90%+ maintainability', '35% less tech debt'],
  },
  {
    title: 'User Experience Engineer',
    description:
      "Every feature I build starts with user research and journey mapping. I've reduced bounce rates by 28% through performance optimizations and intuitive UI design.",
    metrics: ['28% bounce rate reduction', 'User-first approach'],
  },
  {
    title: 'Performance Optimization Specialist',
    description:
      "I've cut average page load times from 4.2s to under 1.5s through strategic code splitting, asset optimization, and caching strategies.",
    metrics: ['4.2s → 1.5s load time', '60fps animations'],
  },
];

export const SKILLS_DATA: SkillData = {
  technical: [
    { name: 'Frontend Development', level: 90, color: 'rgb(42, 157, 143)' },
    { name: 'React/Next.js', level: 95, color: 'rgb(178, 255, 158)' },
    { name: 'TypeScript', level: 85, color: 'rgb(175, 252, 65)' },
    { name: 'UI/UX Design', level: 80, color: 'rgb(29, 211, 176)' },
    { name: 'Backend Integration', level: 75, color: 'rgb(169, 60, 186)' },
    { name: 'Performance Optimization', level: 85, color: 'rgb(231, 111, 81)' },
  ],
  languages: [
    { name: 'Ukrainian', level: 'Native', proficiency: 100 },
    { name: 'English', level: 'Professional', proficiency: 90 },
    { name: 'Polish', level: 'Intermediate', proficiency: 70 },
  ],
};


export const BENEFITS_OF_WORKING:Benefits[]=[
  {title: 'Technical Excellence',
  desc: 'Deep expertise in modern web technologies and best practices',
  color: 'rgb(42, 157, 143)',
},
{
  title: 'Quick Adaptation',
  desc: 'Fast learning and integration into new projects and teams',
  color: 'rgb(178, 255, 158)',
},
{
  title: 'Result-Oriented',
  desc: 'Focus on delivering business value and meeting objectives',
  color: 'rgb(175, 252, 65)',
},]