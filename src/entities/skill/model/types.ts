export interface Technical {
  name: string;
  level: number;
  color: string;
}
export interface Languages {
  name: string;
  level: string;
  proficiency: number;
}

export interface SkillData {
  technical: Technical[];
  languages: Languages[];
}

export interface WorkValues {
  title: string;
  description: string;
  metrics: string[];
}

export interface Hobbies {
  title: string;
  desc: string;
  icon: string;
  details: string;
  color: string;
}


export interface Benefits{
  title: string
  desc: string
  color:string
}