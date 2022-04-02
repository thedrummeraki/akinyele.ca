import { useResourcePlaying } from "../../../../../../App/providers/MusicProvider";
import { Track } from "../../../../types";

import "./TrackCard.css";

interface Props {
  track: Track;
}

export default function TrackCard({ track }: Props) {
  const isPlaying = useResourcePlaying(track);

  const artistsText =
    track.artists.length < 3
      ? track.artists.join(" and ")
      : track.artists
          .slice(0, 2)
          .join(", ")
          .concat(` and ${track.artists.length - 2} more`);

  return (
    <a className="track" target="_blank" href="#">
      <img className="image" src={track.album.img} alt={track.name} />
      <div
        className="info"
        style={{ display: "flex", flexDirection: "column", gap: 7.5 }}
      >
        <span className={`name${isPlaying ? " playing" : ""}`}>
          {track.name}
        </span>
        <small>{artistsText}</small>
      </div>
    </a>
  );
}
