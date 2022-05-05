export interface BasicProject {
  hidden?: boolean;
  featured?: boolean;
  slug: string;
  name: string;
  synopsis: string;
  tags: ProjectTag[];
  technologies: ProjectTechnology[];
  description?: string;
  url?: string;
  internalUrl?: string;
  hackathon?: boolean;
  internal?: boolean; // indicate if project for internal use only (ie: within company only)
  imageUrl?: string;
  company?: CompanyDetails;
  gallery?: string[]; // image url list for photo gallery
  github?: boolean | string; // if true, the github url will be derived from the slug
  madeIn: ProjectMadeInfo;
  watchDemo?: {
    embed?: boolean;
    link: string;
  };
}

export interface FeaturedProject extends BasicProject {
  featured?: true;
  mobileImage?: string;
  desktopImage?: string;
}

export type Project = BasicProject & FeaturedProject;

export type ProjectTag = "web" | "mobile" | "bot" | "api" | "library" | "game";
export type Season = "fall" | "winter" | "spring" | "summer";

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
  | "sorbet"
  | "python"
  | "C#"
  | "unity"
  | "java";

export interface CompanyDetails {
  name: string;
  website?: string;
  github?: string;
}

export interface ProjectMadeInfo {
  year: number;
  season?: Season;
}
