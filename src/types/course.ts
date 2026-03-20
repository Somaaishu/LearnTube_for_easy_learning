export interface Topic {
  id: string;
  title: string;
  explanation: string;
  examples: string[];
  codeExample?: string;
  keyConceptsLearned: string[];
  videoUrl: string;
}

export interface Module {
  id: string;
  title: string;
  topics: Topic[];
}

export interface Course {
  id: string;
  title: string;
  category: 'it' | 'non-it';
  level: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  icon: string;
  modules: Module[];
}
