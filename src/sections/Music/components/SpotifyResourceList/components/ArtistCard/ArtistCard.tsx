import { useResourcePlaying } from "../../../../../../App/providers/MusicProvider";
import { Artist } from "../../../../types";

import "./ArtistCard.css";

interface Props {
  artist: Artist;
}

export default function ArtistCard({ artist }: Props) {
  const isPlaying = useResourcePlaying(artist);

  return (
    <a
      className="artist"
      target="_blank"
      rel="noreferrer"
      href={`https://open.spotify.com/artist/${artist.id}`}
    >
      <img
        className="image"
        src={artist.img}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        alt={artist.name}
      />
      <div
        className="info"
        style={{ display: "flex", flexDirection: "column", gap: 7.5 }}
      >
        <span className={`name ${isPlaying ? " playing" : ""}`}>
          {artist.name}
        </span>
        <small>Artist</small>
      </div>
    </a>
  );
}
