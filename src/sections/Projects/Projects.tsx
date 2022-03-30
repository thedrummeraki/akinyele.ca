import { MouseEventHandler, useEffect, useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";
import useProjects from "./useProjects";

import "./Projects.css";
import { Link } from "react-router-dom";

const tags = [
  {
    name: "Web",
    slug: "web",
  },
  {
    name: "Mobile",
    slug: "mobile",
  },
  {
    name: "Bots",
    slug: "bot",
  },
  {
    name: "Libraries",
    slug: "library",
  },
  {
    name: "API",
    slug: "api",
  },
];

export default function Projects() {
  const projects = useProjects();
  const [selected, setSelectedTags] = useState<string[]>([]);
  const [typedTag, setTypedTag] = useState<string>();

  const [input, setInput] = useState("");

  const filterInput = input.trim().toLocaleLowerCase();

  const filteredProjects = useMemo(() => {
    const filterApplied = selected.length > 0 || filterInput.length > 0;

    if (!filterApplied) {
      return projects;
    }

    const selectedTags = [...selected, typedTag].filter(notEmpty);

    return projects
      .filter((project) =>
        selectedTags.length === 0
          ? true
          : intersect(project.tags, selectedTags).length > 0
      )
      .filter((project) =>
        typedTag
          ? true
          : project.name.toLocaleLowerCase().includes(filterInput) ||
            project.synopsis.toLocaleLowerCase().includes(filterInput) ||
            project.description?.toLocaleLowerCase().includes(filterInput) ||
            project.slug.toLocaleLowerCase().includes(filterInput)
      );
  }, [projects, filterInput, selected, typedTag]);

  useEffect(() => {
    if (filterInput.length === 0) {
      setTypedTag(undefined);
    } else {
      const tag = tags.find(
        (tag) => tag.slug.toLocaleLowerCase() === filterInput
      );

      setTypedTag(tag?.slug);
    }
  }, [filterInput]);

  return (
    <>
      <section className="projects fluid-container">
        <h2 className="title">My projects</h2>
        <Link to="/">Home</Link>
        <input
          type="text"
          placeholder="Filter..."
          className="filter"
          value={input}
          onInput={(e) => {
            setInput((e.target as any).value);
          }}
        />
        <div className="actions">
          <div className="tags-container">
            {tags.map((tag) => (
              <Tag
                key={tag.slug}
                name={tag.name}
                selected={selected.includes(tag.slug) || typedTag === tag.slug}
                onClick={() => {
                  setSelectedTags((current) => {
                    if (current.includes(tag.slug)) {
                      return current.filter((x) => x !== tag.slug);
                    } else {
                      return [...current, tag.slug];
                    }
                  });
                }}
              />
            ))}
            <button
              className="text-button"
              onClick={() => {
                setSelectedTags([]);
                setInput("");
              }}
            >
              Reset
            </button>
          </div>
        </div>
        <div className="results">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}

function Tag({
  name,
  selected,
  onClick,
}: {
  name: string;
  selected?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      onClick={onClick}
      className={`button${selected ? " selected" : ""}`}
    >
      {name}
    </button>
  );
}

function intersect<T>(a: T[], b: T[]) {
  var setA = new Set(a);
  var setB = new Set(b);
  var intersection = new Set([...setA].filter((x) => setB.has(x)));
  return Array.from(intersection);
}

function notEmpty<T>(obj: T | undefined | null): obj is T {
  return obj !== null && obj !== undefined;
}
