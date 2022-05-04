import { PropsWithChildren } from "react";

import "./TagsContainer.css";

export default function TagsContainer({ children }: PropsWithChildren<{}>) {
  return <div className="tags-container">{children}</div>;
}
