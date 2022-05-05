import React from "react";
import "./Grid.css";

import { v4 as uuid } from "uuid";
import { Item } from "./Item";

export const GridContext = React.createContext<{ id: string }>({ id: "" });

// type ColumnCount = 1 | 2 | 3 | 4 | 5 | 6;
// type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";

// interface Props {
//   hide?: ColumnCount;
//   under?: Breakpoint;
// }

function GridProvider({ children }: React.PropsWithChildren<{}>) {
  const id = uuid();

  return (
    <GridContext.Provider value={{ id }}>
      <div key={`grid-${id}`} className="grid">
        {children}
      </div>
    </GridContext.Provider>
  );
}

export default function Grid({ children }: React.PropsWithChildren<{}>) {
  return <GridProvider>{children}</GridProvider>;
}

Grid.Item = Item;
