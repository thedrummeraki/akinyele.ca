import { SpotifyResource } from "../../types";

import "./SpotifyResourceList.css";
import { ArtistCard } from "./components";
import TrackCard from "./components/TrackCard/TrackCard";
import { isArtist, isTrack } from "../../../../App/providers/MusicProvider";
import SkeletonCard from "./components/SkeletonCard";
import NoDataCard from "./components/NoDataCard";

interface Props {
  title: string;
  data: SpotifyResource[];
  loading: boolean;
  error?: boolean;
  top?: number;
}

export default function SpotifyResourceList({
  title,
  data,
  loading,
  error,
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

  if (error || !data || data.length === 0) {
    return (
      <div className="resource-list-container">
        <h2 className="title">{title}</h2>
        <div className="resource-list grid">
          {Array.from({ length: top || 10 }).map((_, i) => (
            <NoDataCard key={`skeleton-item-${i}`} />
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
            return <ArtistCard key={resource.id} artist={resource} />;
          }
          if (isTrack(resource)) {
            return <TrackCard key={resource.id} track={resource} />;
          }

          return null;
        })}
      </div>
    </div>
  );
}
