import { ReactNode } from "react";
import { isArtist } from "../../../../App/providers/MusicProvider";
import { SpotifyResource } from "../../types";
import { ArtistCard } from "../SpotifyResourceList/components";
import NoDataCard from "../SpotifyResourceList/components/NoDataCard";
import SkeletonCard from "../SpotifyResourceList/components/SkeletonCard";

interface Props {
  title: ReactNode;
  data: SpotifyResource;
  loading: boolean;
  error?: boolean;
}

export default function SpotifyTopResource({
  title,
  data,
  loading,
  error,
}: Props) {
  if (loading) {
    return (
      <div className="resource-list-container">
        {title}
        <div className="resource-list half">
          {Array.from({ length: 1 }).map((_, i) => (
            <SkeletonCard key={`skeleton-item-${i}`} />
          ))}
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="resource-list-container">
        {title}
        <div className="resource-list half">
          {Array.from({ length: 1 }).map((_, i) => (
            <NoDataCard key={`skeleton-item-${i}`} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="resource-list-container">
      {title}
      <div className="resource-list">
        {isArtist(data) ? <ArtistCard detailed artist={data} /> : null}
      </div>
    </div>
  );
}
