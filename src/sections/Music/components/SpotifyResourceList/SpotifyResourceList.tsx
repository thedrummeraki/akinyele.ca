import { SpotifyResource } from "../../types";

import "./SpotifyResourceList.css";
import { ArtistCard } from "./components";
import TrackCard from "./components/TrackOrTopSongCard/TrackOrTopSongCard";
import {
  isArtist,
  isTopSong,
  isTrack,
  trackTopSongId,
} from "../../../../App/providers/MusicProvider";
import SkeletonCard from "./components/SkeletonCard";
import NoDataCard from "./components/NoDataCard";
import { ReactNode } from "react";

interface Props {
  data: SpotifyResource[];
  loading: boolean;
  title?: ReactNode;
  header?: ReactNode;
  error?: boolean;
  top?: number;
  hideIfEmpty?: boolean;
}

export default function SpotifyResourceList({
  data,
  loading,
  title,
  header,
  error,
  top,
  hideIfEmpty,
}: Props) {
  if (loading) {
    return (
      <div className="resource-list-container">
        {title}
        <div className="resource-list grid">
          {Array.from({ length: top || 10 }).map((_, i) => (
            <SkeletonCard key={`skeleton-item-${i}`} />
          ))}
        </div>
      </div>
    );
  }

  if (error || !data || data.length === 0) {
    if (!error && hideIfEmpty) {
      return null;
    }

    return (
      <div className="resource-list-container">
        {title}
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
      {title}
      {header}
      <div className="resource-list grid">
        {data.slice(0, top).map((resource) => {
          if (isArtist(resource)) {
            return <ArtistCard key={resource.id} artist={resource} />;
          }
          if (isTrack(resource) || isTopSong(resource)) {
            return (
              <TrackCard key={trackTopSongId(resource)} resource={resource} />
            );
          }

          return null;
        })}
      </div>
    </div>
  );
}
