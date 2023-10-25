import { Routes, Route, useLocation } from "react-router-dom";
import MusicProvider from "../App/providers/MusicProvider";
import {
  Home,
  Music,
  Projects,
  About,
  DexifyPrivacyPolicy,
  ViewProject,
  ViewAllProjects,
  Try,
  ViewPhotoAlbum,
} from "../sections";
import ScrollToTop from "./ScrollToTop";

export default function AppRoutes() {
  const location = useLocation();

  return (
    <MusicProvider>
      <ScrollToTop />
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/archive" element={<ViewAllProjects />} />
        <Route path="/projects/try" element={<Try />} />
        <Route path="/projects/:slug" element={<ViewProject />} />
        <Route path="/music" element={<Music />} />
        <Route path="/dexify/privacy" element={<DexifyPrivacyPolicy />} />
        <Route path="/photos/:id" element={<ViewPhotoAlbum />} />
      </Routes>
    </MusicProvider>
  );
}
