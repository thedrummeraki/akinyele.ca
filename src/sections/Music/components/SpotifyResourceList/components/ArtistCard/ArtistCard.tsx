import { useResourcePlaying } from "../../../../../../App/providers/MusicProvider";
import { Artist } from "../../../../types";

import "./ArtistCard.css";

interface Props {
  artist: Artist;
  detailed?: boolean;
}

export default function ArtistCard({ artist, detailed }: Props) {
  const isPlaying = useResourcePlaying(artist);

  if (detailed) {
    return (
      <div className="artist detailed">
        <img
          className="image"
          src={artist.img}
          style={{
            width: "10rem",
            height: "10rem",
            objectFit: "cover",
            flexShrink: 1,
          }}
          alt={artist.name}
        />
        <div
          className="info"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 7.5,
            flexGrow: 1,
          }}
        >
          <h2 className={`name ${isPlaying ? " playing" : ""}`}>
            {artist.name}
          </h2>
          {artist.genres.length ? (
            <span>
              Genres: {artist.genres.map((genre) => genre).join(", ")}
            </span>
          ) : (
            <span>
              <em>- No genres were specified by Spofity -</em>
            </span>
          )}
          <div style={{ display: "block", margin: "1rem 0" }}>
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://open.spotify.com/artist/${artist.id}`}
              className="button"
            >
              More details on Spotify
            </a>
          </div>
        </div>
      </div>
    );
  }

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
