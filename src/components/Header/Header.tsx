import { PropsWithChildren, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCurrentTrack } from "../../App/providers/MusicProvider";
import { myFace, spotify, spotifyOffline } from "../../icons";
import SocialLink from "../SocialLink";

import "./Header.css";

interface Props {
  name?: string;
}

export default function Header({ name = "Akinyele Cafe-Febrissy" }: Props) {
  const { track } = useCurrentTrack(5000);

  return (
    <div className="header">
      <Link to="/" className="logo" style={{ flexShrink: 1 }}>
        <div className="image">
          <img src={myFace} alt="Akinyele Cafe-Febrissy" />
        </div>
        <div className="name">
          <h3>{name}</h3>
        </div>
      </Link>
      <div className="menu" style={{ display: "flex", flexGrow: 1 }}>
        <HeaderLink to="/projects">Featured work</HeaderLink>
        <HeaderLink to="/projects/archive">All projects</HeaderLink>
        {/* <HeaderLink to="/projects/try">Try...</HeaderLink> */}
        {/* <HeaderLink to="/about">About me</HeaderLink> */}
        <div className="item">
          <SocialLink
            internal
            alt="spotify"
            icon={track?.playing ? spotify : spotifyOffline}
            url="/music"
          />
        </div>
      </div>
    </div>
  );
}

function HeaderLink({ to, children }: PropsWithChildren<{ to: string }>) {
  const [selected, setSelected] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setSelected(pathname === to);
  }, [pathname]);

  return (
    <Link to={to} className={`item${selected ? " selected" : ""}`}>
      {children}
    </Link>
  );
}
