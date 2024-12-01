import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoadingPage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <div className="text-center">
        <h1 className="display-5 text-primary mb-3">Processing Your Video</h1>
        <p className="lead text-secondary mb-4">
          Sit tight! We're analyzing your video. This might take a few moments.
        </p>
      </div>
      <div className="spinner-border text-primary" style={{ width: '4rem', height: '4rem' }} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="mt-4">
        <div className="progress" style={{ width: '20rem' }}>
          <div
            className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
            role="progressbar"
            style={{ width: '75%' }}
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;