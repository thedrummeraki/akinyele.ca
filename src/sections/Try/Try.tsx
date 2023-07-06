import { Header } from "../../components";
import { useDocumentTitle } from "../../components/DocumentTitle";
import ProjectCard from "../Projects/ProjectCard";
import { useSpinnableProjects } from "../Projects/useProjects";

export default function Try() {
  useDocumentTitle({ title: "Try a project" });

  const projects = useSpinnableProjects();

  return (
    <>
      <Header />
      <section className="projects container">
        <h2 className="title">Try a project</h2>
        <p>Choose a project below.</p>

        <div>
          <div className="projects">
            <div className="grid">
              {projects.map((project) => (
                <ProjectCard project={project} onTechnologySelect={() => {}} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
