// FlickrService.js

import axios from 'axios';

const FLICKR_API_KEY = '7c6ee7c558467b67595be488d699a48d';

const flickrApi = axios.create({
  baseURL: 'https://www.flickr.com/services/rest/',
  params: {
    api_key: FLICKR_API_KEY,
    format: 'json',
    nojsoncallback: 1,
    safe_search: 1, // To avoid restricted images
  },
});

export const getRecentPhotos = async () => {
  const response = await flickrApi.get('', {
    params: {
      method: 'flickr.photos.getRecent',
    },
  });
  return response.data;
};

export const searchPhotos = async (text) => {
  const response = await flickrApi.get('', {
    params: {
      method: 'flickr.photos.search',
      text,
    },
  });
  return response.data;
};
