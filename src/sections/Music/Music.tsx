import { useArtists, useTracks } from "../../App/providers/MusicProvider";
import { Header } from "../../components";
import { SpotifyResourceList, ListeningLive } from "./components";

export default function Music() {
  const { artists, loading: artistsLoading } = useArtists();

  const { tracks, loading: tracksLoading } = useTracks({
    top: 5,
    timeRange: "short",
  });

  return (
    <>
      <Header />
      <section className="container spotify">
        <SpotifyResourceList
          title="My top 5 artists"
          loading={artistsLoading}
          top={5}
          data={artists}
        />
        <SpotifyResourceList
          title="My latest favourite songs"
          loading={tracksLoading}
          top={5}
          data={tracks}
        />
      </section>
    </>
  );
}
