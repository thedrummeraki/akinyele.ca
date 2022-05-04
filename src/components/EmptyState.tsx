import { PropsWithChildren } from "react";
import Header from "./Header";

interface Props {
  title: string;
  header?: boolean;
  description?: string;
}

export default function EmptyState({
  title,
  description,
  header,
  children,
}: PropsWithChildren<Props>) {
  return (
    <>
      {header && <Header />}
      <section className="container empty-state">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
        {children}
      </section>
    </>
  );
}
