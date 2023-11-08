// App.js

import React, { useEffect, useState } from 'react';
import './App.css';
import { getRecentPhotos, searchPhotos } from './FlickrService';
import PhotoGallery from './PhotoGallery';
import SearchBar from './SearchBar';
import useInfiniteScroll from './useInfiniteScroll';

function App() {
  const [photos, setPhotos] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);
  const [page, setPage] = useState(1); // Track the current page for infinite scroll

  // Load more photos when the user reaches the bottom
  const loadMorePhotos = async () => {
    setPage(page + 1);
    const response = await getRecentPhotos(page + 1);
    setPhotos([...photos, ...response.photos.photo]);
  };

  useInfiniteScroll(loadMorePhotos);

  useEffect(() => {
    getRecentPhotos().then((data) => setPhotos(data.photos.photo));
  }, []);

  const handleSearch = (text) => {
    searchPhotos(text).then((data) => {
      setPhotos(data.photos.photo);
      setSearchHistory((history) => [...history, text]);
    });
  };

  const handlePhotoClick = (photo) => {
    // Handle displaying the photo in a modal
  };

  return (
    <div className="App">
      <header>
        <SearchBar onSearch={handleSearch} />
      </header>
      <PhotoGallery photos={photos} onPhotoClick={handlePhotoClick} />
      {/* Add Search Suggestions here */}
    </div>
  );
}

export default App;
  