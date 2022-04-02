import { SpotifyResource } from "../../types";

import "./SpotifyResourceList.css";
import { ArtistCard } from "./components";
import TrackCard from "./components/TrackCard/TrackCard";
import { isArtist, isTrack } from "../../../../App/providers/MusicProvider";
import SkeletonCard from "./components/SkeletonCard";

interface Props {
  title: string;
  data: SpotifyResource[];
  loading: boolean;
  top?: number;
}

export default function SpotifyResourceList({
  title,
  data,
  loading,
  top,
}: Props) {
  if (loading) {
    return (
      <div className="resource-list-container">
        <h2 className="title">{title}</h2>
        <div className="resource-list grid">
          {Array.from({ length: top || 10 }).map((_, i) => (
            <SkeletonCard key={`skeleton-item-${i}`} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="resource-list-container">
      <h2 className="title">{title}</h2>
      <div className="resource-list grid">
        {data.slice(0, top).map((resource) => {
          if (isArtist(resource)) {
            return <ArtistCard artist={resource} />;
          }
          if (isTrack(resource)) {
            return <TrackCard track={resource} />;
          }

          return null;
        })}
      </div>
    </div>
  );
}
