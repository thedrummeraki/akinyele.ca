import { Welcome } from "./components";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Welcome onWelcomed={() => {}} />
    </div>
  );
}
