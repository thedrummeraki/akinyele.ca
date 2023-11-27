import { useEffect } from "react";
import { SpinnableProject } from "../../Projects/types";
import useSpin from "../useSpin";

interface Props {
  project: SpinnableProject;
  onProjectUrlReady: (url: string) => void;
}

export default function SpinBanner({ project, onProjectUrlReady }: Props) {
  const { loading, state, url } = useSpin(project);

  const initializing = loading && !state;

  useEffect(() => {
    if (url) onProjectUrlReady(url);
  }, [url]);

  return (
    <div className="spin-info-container">
      <span className="section description details">
        Spin up a temporary instance of <i>"{project.name}"</i>. The application
        will be able for approximately 3 hours from the moment it's ready. Only
        one instance of an application can be requested at once.
        <br />
        <br />
        Generating a new instance may take several minutes.{" "}
        {initializing &&
          "We're fetching the state of the application. Please wait..."}
        {state && `State: ${state}`}
      </span>
    </div>
  );
}
