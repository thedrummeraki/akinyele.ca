import React from "react";
import { SpinnableProject } from "../../Projects/types";

import "./SpinButton.css";
import useSpin from "../useSpin";

interface Props {
  project: SpinnableProject;
}

export default function SpinButton({ project }: Props) {
  const { loading, state, url, spinUp } = useSpin(project);

  const buttonAction = () => {
    if (state === "on") {
      window.open(url, "_blank");
    } else if (state === "off") {
      spinUp();
    }
  };

  const buttonLabel = () => {
    if (!state && loading) return "Fetching app details...";

    switch (state) {
      case "on":
        return "Open app now";
      case "off":
        return "I want to try this app";
      case "booting_up":
        return "Booting up server...";
      case "waiting":
        return "App starting...";
      case "unknown":
        return "Looking for app...";
      default:
        return "Please wait...";
    }
  };

  let disabled = state && !["on", "off"].includes(state);

  let className = ["button"];
  if (!state || disabled) {
    className.push("disabled");
  } else if (state) {
    className.push(state);
  }

  return (
    <button
      disabled={disabled}
      className={className.join(" ")}
      onClick={buttonAction}
    >
      {buttonLabel()}
    </button>
  );
}
