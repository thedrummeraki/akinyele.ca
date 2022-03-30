export interface Project {
  slug: string;
  name: string;
  synopsis: string;
  tags: ProjectTag[];
  description?: string;
  url?: string;
  imageUrl?: string;
  github?: boolean | string; // if true, the github url will be derived from the slug
  madeIn: {
    year: number;
    season?: 'fall' | 'winter' | 'spring' | 'summer';
  };
}

export type ProjectTag = 'web' | 'mobile' | 'bot' | 'api' | 'library';

export interface TagState {
  slug: string;
  name: ProjectTag;
  selected?: boolean;
}
