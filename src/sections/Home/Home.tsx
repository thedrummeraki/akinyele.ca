import { Projects, Welcome } from "./components";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Welcome onWelcomed={() => {}} />
      <Projects />
    </div>
  );
}
