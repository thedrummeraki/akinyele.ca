import { Link } from "react-router-dom";
import { github, openInNew } from "../../icons";
import { Project, SpinnableProject } from "../Projects/types";

import { useGithubUrl } from "../../utils";
import { Tag, TagsContainer } from "../../components";
import BackButton from "../../components/BackButton";
import { projectDeployedWith, technologyInfo } from "../Projects/useProjects";
import { useCallback, useEffect, useState } from "react";
import useSpin from "./useSpin";
import SpinButton from "./SpinButton";
import SpinBanner from "./SpinBanner";

interface Props {
  project: Project;
}

export default function ViewProjectDetails({ project }: Props) {
  const deploymentInfo = projectDeployedWith(project);
  const [projectUrl] = useState<string>();

  return (
    <section className="container project">
      <div style={{ marginTop: "1rem" }}>
        <BackButton to="/projects" />
      </div>
      <div style={{ display: "flex", marginTop: "1rem" }}>
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <div className="title-container">
            <h2 className="title">{project.name}</h2>

            {project.internalUrl ? (
              <div className="try">
                <a href={project.internalUrl} className="button">
                  Check it out!
                </a>
              </div>
            ) : project.spin ? (
              <div className="try">
                <SpinButton project={asSpinnableProject(project)} />
              </div>
            ) : null}
          </div>
          <div className="synopsis">{project.synopsis}</div>
          <div style={{ display: "flex", gap: 10, margin: "1rem" }}>
            <GithubLink project={project} />
            <ExternalLink project={project} tryLink={projectUrl} />
          </div>
        </div>
      </div>
      {deploymentInfo && (
        <div style={{ marginLeft: ".5rem" }}>
          <TagsContainer>
            {deploymentInfo.map((deployInfo) => {
              const { url, name } = deployInfo;
              return <Tag url={url} name={name} />;
            })}
          </TagsContainer>
        </div>
      )}

      {project.watchDemo?.embed && (
        <div className="section">
          <div
            style={{
              width: "100%",
              height: 500,
              margin: "0 auto",
              borderRadius: ".5rem",
              zIndex: 1,
              overflow: "hidden",
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src={project.watchDemo.link}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
      )}

      {project.description && (
        <div className="section description">
          <div className="sub-section">
            <h3>Description</h3>
            <p>{project.description.normal}</p>
          </div>

          {project.description.challenges && (
            <div className="sub-section">
              <h3>Challenges</h3>
              <p>{project.description.challenges}</p>
            </div>
          )}

          {project.description.technical && (
            <div className="sub-section">
              <h3>Technical description</h3>
              <p>{project.description.technical}</p>
            </div>
          )}

          {(project.description.services || []).length > 0 && (
            <div className="sub-section">
              <h3>Services and APIs</h3>
              <TagsContainer>
                {project.description.services!.map((service) => {
                  const tagMarkup = (
                    <Tag name={service.name} style={{ color: service.color }} />
                  );

                  if (service.url) {
                    if (service.internal) {
                      return (
                        <Link
                          to={service.url}
                          style={{ textDecoration: "none" }}
                        >
                          {tagMarkup}
                        </Link>
                      );
                    }
                    return (
                      <a
                        href={service.url}
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        {tagMarkup}
                      </a>
                    );
                  }

                  return tagMarkup;
                })}
              </TagsContainer>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

function GithubLink({ project }: { project: Project }) {
  const githubUrl = useGithubUrl(project);

  if (!githubUrl) {
    return null;
  }

  return (
    <a href={githubUrl} target="_blank" rel="noreferrer" title="View on Github">
      <img src={github} className="icon" alt={project.name + " github"} />
    </a>
  );
}

function ExternalLink({
  project,
  tryLink,
}: {
  project: Project;
  tryLink?: string;
}) {
  const title = "Open " + project.name;

  const imageMarkup = <img src={openInNew} className="icon" alt={title} />;

  if (!project.url && project.internalUrl) {
    return (
      <Link to={project.internalUrl} title={title}>
        {imageMarkup}
      </Link>
    );
  } else if (!project.url && !project.internalUrl && !tryLink) {
    return null;
  }

  return (
    <a
      href={tryLink || project.url}
      target="_blank"
      rel="noreferrer"
      title={title}
    >
      {imageMarkup}
    </a>
  );
}

function asSpinnableProject(project: Project): SpinnableProject {
  return project.spin! && (project as SpinnableProject);
}
