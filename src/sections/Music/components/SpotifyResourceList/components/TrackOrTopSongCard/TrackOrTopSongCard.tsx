import {
  isTrack,
  useArtistPlayedOnOtherTrack,
  useResourcePlaying,
} from "../../../../../../App/providers/MusicProvider";
import { Track } from "../../../../types";
import { TopSong } from "../../../Insights/Insights";

import "./TrackOrTopSongCard.css";

interface Props {
  resource: Track | TopSong;
}

interface TrackProps {
  track: Track;
}

interface TopSongProps {
  topSong: TopSong;
}

export default function TrackOrTopSongCard({ resource }: Props) {
  if (isTrack(resource)) {
    return <TrackCard track={resource} />;
  }

  return <TopSongCard topSong={resource} />;
}

function TrackCard({ track }: TrackProps) {
  const isPlaying = useResourcePlaying(track);
  const artistPlaying = useArtistPlayedOnOtherTrack(track);

  const artistsText =
    track.artists.length < 3
      ? track.artists.join(" and ")
      : track.artists
          .slice(0, 2)
          .join(", ")
          .concat(` and ${track.artists.length - 2} more`);

  return (
    <a
      className="track"
      target="_blank"
      rel="noreferrer"
      href={`https://open.spotify.com/track/${track.id}`}
    >
      <img className="image" src={track.album.img} alt={track.name} />
      <div
        className="info"
        style={{ display: "flex", flexDirection: "column", gap: 7.5 }}
      >
        <span className={`name${isPlaying ? " playing" : ""}`}>
          {track.name}
        </span>
        <small className={artistPlaying ? "playing" : ""}>{artistsText}</small>
      </div>
    </a>
  );
}

function TopSongCard({ topSong }: TopSongProps) {
  const { details: track, count } = topSong;
  const isPlaying = useResourcePlaying(topSong);

  const artistNames = track.artists.map((artist) => artist.name);

  const artistsText =
    artistNames.length < 3
      ? artistNames.join(" and ")
      : artistNames
          .slice(0, 2)
          .join(", ")
          .concat(` and ${artistNames.length - 2} more`);

  return (
    <a
      className="track"
      target="_blank"
      rel="noreferrer"
      href={`https://open.spotify.com/track/${track.id}`}
    >
      <img className="image" src={track.album.image.url} alt={track.name} />
      <div
        className="info"
        style={{ display: "flex", flexDirection: "column", gap: 7.5 }}
      >
        <span className={`name${isPlaying ? " playing" : ""}`}>
          {track.name}
        </span>
        <small>{artistsText}</small>
        <small>
          <em>
            Play count: <strong>{count}</strong>
          </em>
        </small>
      </div>
    </a>
  );
}
