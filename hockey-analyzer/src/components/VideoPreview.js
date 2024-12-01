import React from 'react';

const VideoPreview = ({ url, onSelect }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <video src={url} controls width="300" />
      <button onClick={() => onSelect(url)}>Select</button>
    </div>
  );
};

export default VideoPreview;