import { useParams } from "react-router-dom";
import { EmptyState, Header } from "../../components";
import ProjectCard from "../Projects/ProjectCard";
import useProjects from "../Projects/useProjects";
import ViewProjectDetails from "./ViewProjectDetails";

import "./ViewProject.css";

export default function ViewProject() {
  const { slug } = useParams();
  const allProjects = useProjects();
  const project = useProject(slug);

  const projectsSuggestions = allProjects
    .filter((project) => !project.hidden)
    .slice(0, 6);

  if (project === null) {
    return (
      <EmptyState
        header
        title="This project does not exit, but check these ones out!"
      >
        <div>
          <div className="projects">
            <div className="grid">
              {projectsSuggestions.map((project) => (
                <ProjectCard project={project} onTechnologySelect={() => {}} />
              ))}
            </div>
          </div>
        </div>
      </EmptyState>
    );
  }

  return (
    <>
      <Header /> <ViewProjectDetails project={project} />
    </>
  );
}

export function useProject(slug: string | undefined) {
  const projects = useProjects();
  const project = projects.find(
    (p) => p.slug === slug && !p.hidden && (p.featured || p.spin)
  );

  return project || null;
}
