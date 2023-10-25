import { Link } from "react-router-dom";
import { github, openInNew } from "../../icons";
import { Project } from "../Projects/types";

import { useGithubUrl } from "../../utils";
import { Tag, TagsContainer } from "../../components";
import BackButton from "../../components/BackButton";
import { projectDeployedWith, technologyInfo } from "../Projects/useProjects";
import { useCallback, useEffect, useState } from "react";

interface Props {
  project: Project;
}

export default function ViewProjectDetails({ project }: Props) {
  const deploymentInfo = projectDeployedWith(project);
  const [showSpinInfo, setShowSpinInfo] = useState(false);
  const [projectRequest, setProjectRequest] = useState<any>();
  const [status, setStatus] = useState<string>();
  const [requesterEmail, setRequesterEmail] = useState<string | null>(
    localStorage.getItem("requester.email")
  );

  const { spin } = project;

  const [loading, setLoading] = useState(false);
  const requestNow = useCallback(() => {
    console.log({ requesterEmail });
    if (!requesterEmail || !spin) {
      return;
    }
    const encodedEmail = window.btoa(requesterEmail);
    setLoading(true);
    fetch(
      `http://localhost/users/${encodedEmail}/requests?project_slug=${encodeURIComponent(
        spin.slug
      )}`,
      {
        method: "POST",
      }
    )
      .then((res) => res.json())
      .then(setProjectRequest)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [requesterEmail, spin]);

  useEffect(() => {
    if (spin && !projectRequest) {
      const currentProject = localStorage.getItem(spin.slug);
      if (currentProject) {
        const { requester, id } = JSON.parse(currentProject);
        fetch(`http://localhost/users/${requester}/requests/${id}`)
          .then((res) => res.json())
          .then(setProjectRequest)
          .catch(console.error);
      }
    }
  }, [spin, projectRequest]);

  useEffect(() => {
    if (
      spin &&
      requesterEmail &&
      projectRequest &&
      (projectRequest.status !== "ready" || projectRequest.status !== "failed")
    ) {
      const encodedEmail = window.btoa(requesterEmail);
      let id = setInterval(() => {
        fetch(
          `http://localhost/users/${encodedEmail}/requests/${projectRequest.id}`
        )
          .then((res) => res.json())
          .then((res) => {
            const data = {
              id: res.id,
              requester: encodedEmail,
            };
            localStorage.setItem(`${spin.slug}`, JSON.stringify(data));
          })
          .catch(console.error);
      }, 1000);

      return () => clearInterval(id);
    }
  }, [projectRequest, requesterEmail, spin]);

  console.log({ projectRequest });

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
            {project.spin ? (
              <div className="try">
                <button
                  className="button"
                  onClick={() => setShowSpinInfo((current) => !current)}
                >
                  {loading
                    ? "Please wait..."
                    : showSpinInfo
                    ? "Cancel"
                    : "Try now!"}
                </button>
              </div>
            ) : null}
          </div>
          {showSpinInfo ? (
            <div className="spin-info-container">
              <p className="details">
                Spin up an instance of <i>"{project.name}"</i> by entering your
                email below. The application will be able for approximately 3
                hours from the moment it's ready. You will have the option to
                "destroy the application" once you're done with it.
                <br />
                <br />
                To prevent abuse, only one instance of an application can be
                requested at once.
              </p>
              <div className="spin-info">
                <input
                  className="filter"
                  placeholder="Email address: john.doe@email.com"
                  onChange={(e) => setRequesterEmail(e.target.value)}
                />
                <button
                  className="button"
                  disabled={requesterEmail?.trim().length === 0}
                  onClick={requestNow}
                >
                  {projectRequest && projectRequest.status
                    ? projectRequest.status
                    : "Request now"}
                </button>
              </div>
            </div>
          ) : null}
          <div className="synopsis">{project.synopsis}</div>
          <div style={{ display: "flex", gap: 10, margin: "1rem" }}>
            <GithubLink project={project} />
            <ExternalLink project={project} />
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

function ExternalLink({ project }: { project: Project }) {
  const title = "Open " + project.name;

  const imageMarkup = <img src={openInNew} className="icon" alt={title} />;

  if (!project.url && project.internalUrl) {
    return (
      <Link to={project.internalUrl} title={title}>
        {imageMarkup}
      </Link>
    );
  } else if (!project.url && !project.internalUrl) {
    return null;
  }

  return (
    <a href={project.url} target="_blank" rel="noreferrer" title={title}>
      {imageMarkup}
    </a>
  );
}
