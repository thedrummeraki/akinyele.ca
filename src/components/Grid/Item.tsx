import { useContext } from "react";
import { GridContext } from "./Grid";

export function Item({ children }: React.PropsWithChildren<{}>) {
  const context = useContext(GridContext);

  if (!context.id) {
    throw new Error("Grid.Item used outside of Grid.");
  }

  return <div className="item">{children}</div>;
}
