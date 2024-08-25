import {
  useArtists,
  useCurrentTrack,
  useTracks,
} from "../../App/providers/MusicProvider";
import { Header } from "../../components";
import { useDocumentTitle } from "../../components/DocumentTitle";
import { SpotifyResourceList, ListeningLive, Insights } from "./components";
import SpotifyTopResource from "./components/SpotifyTopResource";

import "./Music.css";

export default function Music() {
  const {
    topArtist,
    otherArtists,
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

  const { track } = useCurrentTrack();

  useDocumentTitle({
    title: track?.name ? `Playing ${track.name}` : "Spotify Corner",
  });

  return (
    <>
      <Header />
      <ListeningLive />
      <section className="container spotify">
        <Insights />
        <SpotifyTopResource
          title={<h2 className="title">My favorite artists</h2>}
          loading={artistsLoading}
          data={topArtist}
          error={artistsError}
        />
        <SpotifyResourceList
          loading={artistsLoading}
          top={5}
          data={otherArtists}
          error={artistsError}
        />
        <SpotifyResourceList
          title={<h2 className="title">My personal trending songs</h2>}
          loading={latestTracksLoading}
          top={5}
          data={latestTracks}
          error={latestTracksError}
        />
        <SpotifyResourceList
          title={<h2 className="title">My favourites last year</h2>}
          loading={allTimeFavTracksLoading}
          top={5}
          data={allTimeFavTracks}
          error={allTimeFavTracksError}
        />
      </section>
    </>
  );
}
