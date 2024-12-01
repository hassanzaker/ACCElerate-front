import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { processVideo } from '../api';
import 'bootstrap/dist/css/bootstrap.min.css';

const SAMPLE_VIDEOS = [
  'https://movie-lads-statics.s3.us-east-2.amazonaws.com/Hockey_videos/clip1.mp4',
  'https://movie-lads-statics.s3.us-east-2.amazonaws.com/Hockey_videos/clip2.mp4',
  'https://movie-lads-statics.s3.us-east-2.amazonaws.com/Hockey_videos/clip3.mp4',
  'https://movie-lads-statics.s3.us-east-2.amazonaws.com/Hockey_videos/clip4.mp4',
  'https://movie-lads-statics.s3.us-east-2.amazonaws.com/Hockey_videos/clip5.mp4',
];

const UploadPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [uploadedVideo, setUploadedVideo] = useState(null);
  const navigate = useNavigate();
  const videoRefs = useRef({});

  const handleUpload = (event) => {
    setUploadedVideo(event.target.files[0]);
  };

  const handleHover = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].play();
    }
  };

  const handleMouseLeave = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
      videoRefs.current[index].currentTime = 0; // Reset video to the start
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    if (uploadedVideo) {
      formData.append('file', uploadedVideo);
    } else if (selectedVideo) {
      formData.append('url', selectedVideo);
    }

    navigate('/loading');
    try {
      const response = await processVideo(formData);
      navigate('/response', { state: { videoUrl: response.videoUrl } });
    } catch (error) {
      console.error('Error processing video:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1 className="display-4">Hockey Video Analyzer</h1>
        <p className="lead">Upload your own video or choose from the sample videos below</p>
      </div>

      <div className="mb-4">
        <label htmlFor="file-upload" className="form-label">
          <strong>Upload Your Video:</strong>
        </label>
        <input
          type="file"
          className="form-control"
          id="file-upload"
          accept="video/*"
          onChange={handleUpload}
        />
      </div>

      <h2 className="mb-3">Or Choose a Sample Video:</h2>
      <div className="row g-3">
        {SAMPLE_VIDEOS.map((videoUrl, index) => (
          <div key={index} className="col-md-4">
            <div
              className={`card shadow ${selectedVideo === videoUrl ? 'border-primary selected-card' : ''}`}
              onClick={() => setSelectedVideo(videoUrl)}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              style={{ cursor: 'pointer' }}
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                className="card-img-top"
                src={videoUrl}
                style={{ height: '180px', objectFit: 'cover' }}
                muted
              />
              <div className="card-body">
                <p className="card-text text-center">Sample Video {index + 1}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <button
          className="btn btn-primary btn-lg"
          onClick={handleSubmit}
          disabled={!selectedVideo && !uploadedVideo}
        >
          Analyze Video
        </button>
      </div>
    </div>
  );
};

export default UploadPage;