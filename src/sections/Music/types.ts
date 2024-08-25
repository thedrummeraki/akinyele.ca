import { TopSong } from "./components/Insights/Insights";

export type ID = string;
export type Genre = string;

export interface Artist {
  id: ID;
  name: string;
  img: string;
  genres: Genre[];
}

export interface AlbumImage {
  height: number;
  width: number;
  url: string;
}

export interface Album {
  id: ID;
  name: string;
  img: string;
}

export interface TopSongAlbum {
  id: ID;
  name: string;
  image: { url: string };
}

export interface CurrentTrackAlbum {
  id: ID;
  name: string;
  image: AlbumImage;
}

export interface TrackArtist {
  id: ID;
  name: string;
}

export interface Track {
  id: ID;
  album: Album;
  artists: TrackArtist[];
  name: string;
}

export interface TopSongTrack extends Omit<Track, "album"> {
  album: TopSongAlbum;
}

export type CurrentTrack = Partial<Track> & {
  album?: CurrentTrackAlbum;
  playing: boolean;
  preview_url?: string;
  progress?: number;
};

export type TrackTimeRange = "short" | "medium" | "long";

export interface TracksProps {
  top: number;
  timeRange: TrackTimeRange;
}

export type SpotifyResource = Artist | Track | TopSong;
