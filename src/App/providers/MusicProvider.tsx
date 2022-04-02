import React, {
  useState,
  useEffect,
  useRef,
  PropsWithChildren,
  useContext,
} from "react";
import {
  Artist,
  CurrentTrack,
  SpotifyResource,
  Track,
  TracksProps,
} from "../../sections/Music/types";

export const MusicContext = React.createContext<{
  track: CurrentTrack | undefined;
  loading: boolean;
}>({ track: undefined, loading: false });

export default function MusicProvider({ children }: PropsWithChildren<{}>) {
  const { track, loading } = useCurrentTrack();

  return (
    <MusicContext.Provider value={{ track, loading }}>
      {children}
    </MusicContext.Provider>
  );
}

export async function fetchSpotifyInfo<T>(path: string) {
  const host =
    process.env.REACT_APP_MUSIC_SERVICE_HOST ||
    "https://music-akinyele-api.herokuapp.com";

  const urlPath = path.startsWith("/") ? path : "/".concat(path);
  const url = host.concat(urlPath);

  try {
    const result = await fetch(url).then((response) => response.json());
    if (result.success !== false) {
      return result as T;
    } else {
      console.error(
        "fetchSpotifyInfo:",
        result.error?.message || "Unknown error"
      );
      return;
    }
  } catch (error) {
    return;
  }
}

export function useResourcePlaying(resource: SpotifyResource) {
  const { track } = useContext(MusicContext);

  if (!track) {
    return false;
  }

  if (isTrack(resource)) {
    return track.id === resource.id;
  }

  if (isArtist(resource) && track.artists) {
    return Boolean(track.artists.find((artist) => artist.id === resource.id));
  }

  return false;
}

export function useArtists() {
  const [loading, setLoading] = useState(false);
  const [artists, setArtists] = useState<Artist[]>([]);

  const fetchArtists = () => {
    if (loading) return;

    setLoading(true);

    fetchSpotifyInfo<Artist[]>("/top/artists")
      .then((artists) => {
        setArtists(artists || []);
      })
      .catch((e) => console.error("error", e))
      .finally(() => setLoading(false));
  };

  useEffect(fetchArtists, []);

  return { loading, artists };
}

export function useTracks({ top, timeRange }: TracksProps) {
  const [loading, setLoading] = useState(false);
  const [tracks, setTracks] = useState<Track[]>([]);

  const fetchTracks = () => {
    if (loading) return;

    setLoading(true);

    fetchSpotifyInfo<Track[]>(
      `/top/tracks?top_tracks=${top}&time_range=${timeRange}`
    )
      .then((tracks) => {
        setTracks(tracks || []);
      })
      .catch((e) => console.error("error", e))
      .finally(() => setLoading(false));
  };

  useEffect(fetchTracks, []);

  return { loading, tracks };
}

function useCurrentTrack() {
  const [track, setTrack] = useState<CurrentTrack>();
  const [loading, setLoading] = useState(false);

  const checkCurrentTrack = () => {
    if (loading) return;

    setLoading(true);

    fetchSpotifyInfo<CurrentTrack>("playing/now")
      .then((track) => {
        if (track) {
          setTrack(track);
        }
      })
      .finally(() => setLoading(false));
  };

  useEffect(checkCurrentTrack, []);
  useInterval(checkCurrentTrack, 1000);

  return { loading, track };
}

// todo: move this utils file
function useInterval(callback: () => any, delay: number) {
  const savedCallback = useRef(callback);
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  });
}

export function isArtist(resource: SpotifyResource): resource is Artist {
  return (resource as Artist).genres !== undefined;
}

export function isTrack(resource: SpotifyResource): resource is Track {
  return (resource as Track).artists !== undefined;
}
