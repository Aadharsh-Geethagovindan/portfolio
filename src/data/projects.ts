import projectsRaw from "./projects.json";

export type ProjectLinks = {
  github?: string;
  live?: string;
  video?: string;
};

export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  status: "Shipped" | "In progress";
  stack: string[];
  highlights: string[];
  links: ProjectLinks;
  coverImage: string;
  featured: boolean;
};

export const projects = projectsRaw as Project[];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug) ?? null;
}
