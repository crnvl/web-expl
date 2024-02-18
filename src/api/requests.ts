import axios from "axios";

export const api = axios.create();

export const endpoints = {
  webContent: {
    getSiteUrls: (url: string) =>
      api.get(`/api/web-content/site-urls?url=${url}`),
  },
  external: {
    getSiteContent: (url: string) => api.get(url),
  },
};
