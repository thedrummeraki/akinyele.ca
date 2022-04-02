import { useContext } from "react";
import { MusicContext } from "../../../App/providers/MusicProvider";
import { pause, play } from "../../../icons";

import "./ListeningLive.css";

export default function ListeningLive() {
  const { track } = useContext(MusicContext);

  if (!track || !track.album || !track.artists) {
    return null;
  }

  const iconMarkup = track.playing ? (
    <img src={pause} alt="Playing" />
  ) : (
    <img src={play} alt="Paused" />
  );

  return (
    <div className="listening-live">
      <div className="card">
        <div className="body">
          <img
            src={track.album.image.url}
            alt={track.album.name}
            className="image"
          />
          <div className="track-info">
            <div className="track-title">
              {iconMarkup}
              <span className="title">{track.name}</span>
            </div>
            <div className="album-artist-info">
              <strong>{track.album.name}</strong> by{" "}
              <strong>
                {track.artists
                  .map((artist) => artist.name)
                  .filter((x) => x)
                  .join(", ")}
              </strong>
            </div>
            <div className="track-progress">
              <div className="total">
                <div
                  className="actual"
                  style={{
                    width: `${track.progress}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
