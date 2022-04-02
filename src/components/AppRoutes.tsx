import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import MusicProvider from "../App/providers/MusicProvider";
import { Home, Music, Projects } from "../sections";

export default function AppRoutes() {
  const location = useLocation();

  return (
    <MusicProvider>
      <TransitionGroup component={null}>
        <CSSTransition key={location.key} classNames="my-node" timeout={500}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/music" element={<Music />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </MusicProvider>
  );
}
