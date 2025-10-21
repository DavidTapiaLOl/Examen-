export interface Giphy {
}
// Interfaces generadas rápidamente (puedes usar quicktype.io)
export interface GiphyResponse {
  data:       Gif[];
  pagination: Pagination;
  meta:       Meta;
}

export interface Gif {
  id:     string;
  title:  string;
  images: {
    original: {
      url: string;
    };
    downsized_medium: {
      url: string;
    };
  };
}

export interface Meta {
  status:      number;
  msg:         string;
  response_id: string;
}

export interface Pagination {
  total_count: number;
  count:       number;
  offset:      number;
}