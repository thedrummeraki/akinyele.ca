import React, { useContext, useEffect, useState } from "react";
import { useMusicContext } from "../../../App/providers/MusicProvider";
// import { pause, play } from "../../../icons";
import { TrackArtist } from "../types";

import "./ListeningLive.css";

export default function ListeningLive() {
  const { track } = useMusicContext();
  const isMobile = useCurrentWidth() < 768;

  if (!track || !track.album || !track.artists) {
    return null;
  }

  // const iconMarkup = track.playing ? (
  //   <img src={pause} alt="Playing" className="icon" />
  // ) : (
  //   <img src={play} alt="Paused" className="icon" />
  // );

  return (
    <div className={`listening-live${isMobile ? " mobile" : ""}`}>
      <div className="card">
        <div className="body">
          <img
            src={track.album.image.url}
            alt={track.album.name}
            className="image"
          />
          <div className="track-info">
            <div className="track-title-album">
              <div className="track-title">
                <span className="title">{track.name}</span>
              </div>
              <div className="album-artist-info">
                {track.artists
                  .map<React.ReactNode>((artist) => (
                    <ArtistLink key={artist.id} artist={artist} />
                  ))
                  .reduce((prev, current) => [prev, ", ", current])}
              </div>
            </div>
            <div className="track-progress">
              <div className="total">
                <div
                  className="actual"
                  style={{ width: `${track.progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArtistLink({ artist }: { artist: TrackArtist }) {
  return (
    <a
      href={`https://open.spotify.com/artist/${artist.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="artist-link"
    >
      {artist.name}
    </a>
  );
}

export const getWindowWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

export function useCurrentWidth() {
  // save current window width in the state object
  let [width, setWidth] = useState(getWindowWidth());

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    const resizeListener = () => {
      // change width from the state object
      setWidth(getWindowWidth());
    };
    // set resize listener
    window.addEventListener("resize", resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return width;
}
