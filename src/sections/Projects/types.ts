export interface Project {
  slug: string;
  name: string;
  synopsis: string;
  tags: ProjectTag[];
  technologies: ProjectTechnology[];
  description?: string;
  url?: string;
  imageUrl?: string;
  github?: boolean | string; // if true, the github url will be derived from the slug
  madeIn: {
    year: number;
    season?: "fall" | "winter" | "spring" | "summer";
  };
  watchDemo?: {
    embed?: boolean;
    link: string;
  };
}

export type ProjectTag = "web" | "mobile" | "bot" | "api" | "library";

export interface TagState {
  slug: string;
  name: ProjectTag;
  selected?: boolean;
}

export type ProjectTechnology =
  | "rails"
  | "react"
  | "js"
  | "ruby"
  | "node"
  | "react-native"
  | "sorbet";
