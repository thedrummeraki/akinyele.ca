import React, {
  useState,
  useEffect,
  useRef,
  PropsWithChildren,
  useContext,
} from "react";
import { useMemo } from "react";
import { TopSong } from "../../sections/Music/components/Insights/Insights";
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
  setTrack: (track: CurrentTrack | undefined) => void;
  setLoading: (loading: boolean) => void;
}>({
  track: undefined,
  loading: false,
  setTrack: () => {},
  setLoading: () => {},
});

export default function MusicProvider({ children }: PropsWithChildren<{}>) {
  const [track, setTrack] = useState<CurrentTrack | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  return (
    <MusicContext.Provider value={{ track, loading, setTrack, setLoading }}>
      {children}
    </MusicContext.Provider>
  );
}

export function useMusicContext() {
  const context = useContext(MusicContext);
  return {
    track: context.track,
    loading: context.loading,
  };
}

export async function fetchSpotifyInfo<T>(path: string) {
  const host =
    process.env.REACT_APP_MUSIC_SERVICE_HOST ||
    "https://music-akinyele-api.fly.dev";

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

  if (isTopSong(resource)) {
    return track.id === resource._id;
  }

  if (isArtist(resource) && track.artists) {
    return Boolean(track.artists.find((artist) => artist.id === resource.id));
  }

  return false;
}

export function useArtistPlayedOnOtherTrack(track: Track) {
  const { track: liveTrack } = useContext(MusicContext);

  if (!liveTrack) {
    return false;
  }

  const liveTrackArtists = liveTrack.artists?.map((artist) => artist.id) || [];
  const trackArtists = track.artists.map((artist) => artist.id);

  const hasArtistInCommon = liveTrackArtists.filter((liveArtistId) =>
    trackArtists.includes(liveArtistId)
  );

  return track.id === liveTrack.id || hasArtistInCommon.length > 0;
}

export function useArtists() {
  const [loading, setLoading] = useState(false);
  const [artists, setArtists] = useState<Artist[]>([]);
  const [error, setError] = useState<any>(null);

  const topArtist = useMemo(() => artists[0], [artists]);
  const otherArtists = useMemo(() => {
    return artists.slice(1);
  }, [artists]);

  const fetchArtists = () => {
    if (loading) return;

    setLoading(true);

    fetchSpotifyInfo<Artist[]>("/top/artists")
      .then((artists) => {
        setArtists(artists || []);
      })
      .catch((e) => {
        console.error("error", e);
        setError(e);
      })
      .finally(() => setLoading(false));
  };

  // eslint-disable-next-line
  useEffect(fetchArtists, []);

  return { loading, topArtist, otherArtists, error };
}

export function useTracks({ top, timeRange }: TracksProps) {
  const [loading, setLoading] = useState(false);
  const [tracks, setTracks] = useState<Track[]>([]);
  const [error, setError] = useState<any>(null);

  const fetchTracks = () => {
    if (loading) return;

    setLoading(true);

    fetchSpotifyInfo<Track[]>(
      `/top/tracks?top_tracks=${top}&time_range=${timeRange}`
    )
      .then((tracks) => {
        setTracks(tracks || []);
      })
      .catch((e) => {
        console.error("error", e);
        setError(e);
      })
      .finally(() => setLoading(false));
  };

  // eslint-disable-next-line
  useEffect(fetchTracks, []);

  return { loading, tracks, error };
}

export function useCurrentTrack(interval = 1000) {
  const { track, setTrack, loading, setLoading } = useContext(MusicContext);

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

  // eslint-disable-next-line
  useEffect(checkCurrentTrack, []);
  useInterval(checkCurrentTrack, interval);

  // useEffect(() => {
  //   setLoading(loading);
  //   setTrack(track);
  // }, [track, loading]);

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

export function isTopSong(resource: SpotifyResource): resource is TopSong {
  return (
    (resource as TopSong)._id !== undefined &&
    (resource as TopSong).details !== undefined
  );
}

export function trackTopSongId(resource: TopSong | Track) {
  if (isTrack(resource)) {
    return resource.id;
  }

  return resource._id;
}
