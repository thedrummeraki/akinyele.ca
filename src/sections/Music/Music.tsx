import { useArtists, useTracks } from "../../App/providers/MusicProvider";
import { Header } from "../../components";
import { SpotifyResourceList, ListeningLive } from "./components";

import "./Music.css";

export default function Music() {
  const {
    artists,
    loading: artistsLoading,
    error: artistsError,
  } = useArtists();

  const {
    tracks: latestTracks,
    loading: latestTracksLoading,
    error: latestTracksError,
  } = useTracks({
    top: 5,
    timeRange: "short",
  });

  const {
    tracks: allTimeFavTracks,
    loading: allTimeFavTracksLoading,
    error: allTimeFavTracksError,
  } = useTracks({
    top: 15,
    timeRange: "long",
  });

  return (
    <>
      <Header />
      <ListeningLive />
      <section className="container spotify">
        <SpotifyResourceList
          title="My top 5 artists"
          loading={artistsLoading}
          top={5}
          data={artists}
          error={artistsError}
        />
        <SpotifyResourceList
          title="My personal trending songs"
          loading={latestTracksLoading}
          top={5}
          data={latestTracks}
          error={latestTracksError}
        />
        <SpotifyResourceList
          title="My favourites last year"
          loading={allTimeFavTracksLoading}
          top={5}
          data={allTimeFavTracks}
          error={allTimeFavTracksError}
        />
      </section>
    </>
  );
}
