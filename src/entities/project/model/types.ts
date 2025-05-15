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

export interface ProjectListProps {
    projects: ProjectType[];
  }

export interface ProjectCardProps {
    project: ProjectType;
  }