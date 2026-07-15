export type UnsplashImage = {
  id: string;
  alt_description: string | null;
  description: string | null;
  width: number;
  height: number;
  color: string | null;
  urls: {
    small: string;
    regular: string;
    full: string;
    raw: string;
  };
  user: {
    name: string;
    username: string;
  };
};

export type UnsplashSearchResponse = {
  total: number;
  total_pages: number;
  results: UnsplashImage[];
};

export type SearchImageArgs = {
  page?: number;
  query: string;
};

export type SearchBarProps = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};
