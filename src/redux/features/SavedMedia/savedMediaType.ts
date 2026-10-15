export type SavedMediaType = 'movie' | 'tv';

export interface SavedMedia {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
  mediaType: SavedMediaType;
}

export interface SavedMediaState {
  items: SavedMedia[];
  hydrated: boolean;
}