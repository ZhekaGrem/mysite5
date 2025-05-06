export type LocaleType = 'en' | 'ua';

export interface ProjectType {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}
