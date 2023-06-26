export interface BasicProject {
  hidden?: boolean;
  featured?: boolean;
  status: "active" | "stopped" | "done" | "paused";
  slug: string;
  name: string;
  synopsis: string;
  beta?: boolean;
  tags: ProjectTag[];
  technologies: ProjectTechnology[];
  description?: ProjectDescription;
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
  deployedWith?: ProjectDeploymentValue[];
}

export interface FeaturedProject extends BasicProject {
  featured?: true;
  mobileImage?: string;
  desktopImage?: string;
}

export type Project = BasicProject & FeaturedProject;

export type ProjectTag =
  | "web"
  | "mobile"
  | "bot"
  | "api"
  | "library"
  | "game"
  | "oauth"
  | "cli";
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
  | "java"
  | "mongo"
  | "rust";

export interface ProjectTimeline {
  year: number;
  moment?: string; // could be a month, a season
  description: string;
}

export interface ProjectDescription {
  normal: string;
  technical?: string;
  challenges?: string;
  timeline?: ProjectTimeline[];
  services?: {
    name: string;
    url?: string;
    color?: string;
    internal?: boolean;
  }[];
}

export type ProjectDeploymentValue =
  | "heroku"
  | "vercel"
  | "k8s"
  | "digitalocean"
  | "raspeberrypi"
  | "fly"
  | "rubygems"
  | "gcp"
  | "discord"
  | "google-play";

export interface ProjectDeployment {
  name: string;
  url?: string;
}

export interface CompanyDetails {
  name: string;
  website?: string;
  github?: string;
}

export interface ProjectMadeInfo {
  year: number;
  season?: Season;
}
