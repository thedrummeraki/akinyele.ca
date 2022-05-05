import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import MusicProvider from "../App/providers/MusicProvider";
import {
  Home,
  Music,
  Projects,
  About,
  DexifyPrivacyPolicy,
  ViewProject,
} from "../sections";

export default function AppRoutes() {
  const location = useLocation();

  return (
    <MusicProvider>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ViewProject />} />
        <Route path="/music" element={<Music />} />
        <Route path="/dexify/privacy" element={<DexifyPrivacyPolicy />} />
      </Routes>
    </MusicProvider>
  );
}
