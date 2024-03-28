// ImageDisplay.js
import React from 'react';

function ImageDisplay({ imageUrl }) {
  return (
    <div>
      <h1>รูปภาพที่อัปโหลด</h1>
      <img src={imageUrl} alt="Uploaded" />
    </div>
  );
}

export default ImageDisplay;
