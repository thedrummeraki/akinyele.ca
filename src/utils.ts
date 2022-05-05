import { Project } from "./sections/Projects/types";

// Source: https://stackoverflow.com/questions/2519818/create-a-permalink-with-javascript
export function usePermalink(str: string) {
  return str
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/^-*|-*$/g, "")
    .toLowerCase();
}

export function useGithubUrl(project: Project) {
  if (project.github) {
    return typeof project.github === "string"
      ? project.github
      : `https://github.com/thedrummeraki/${project.slug}`;
  }
  return null;
}
