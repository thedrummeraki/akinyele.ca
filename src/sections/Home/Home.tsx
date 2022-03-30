import { Welcome } from "./components";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="welcome-background" />
      <Welcome onWelcomed={() => {}} />
    </div>
  );
}
