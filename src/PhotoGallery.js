// PhotoGallery.js

import React from 'react';

const PhotoGallery = ({ photos, onPhotoClick }) => {
  return (
    <div className="photo-gallery">
      {photos.map((photo) => (
        <div key={photo.id} className="photo">
          <img
            src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
            alt={photo.title}
            onClick={() => onPhotoClick(photo)}
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
