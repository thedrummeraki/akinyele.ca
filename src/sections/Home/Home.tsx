import { useEffect, useRef } from "react";
import { useDocumentTitle } from "../../components/DocumentTitle";
import { Welcome } from "./components";
import "./Home.css";

export default function Home() {
  useDocumentTitle({ title: "Welcome" });
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      backgroundRef.current?.classList.add("active");
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="home">
      <div ref={backgroundRef} className="welcome-background" />
      <Welcome onWelcomed={() => {}} />
    </div>
  );
}
