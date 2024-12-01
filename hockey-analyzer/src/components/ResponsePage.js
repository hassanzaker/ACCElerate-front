import React from "react";
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

const ResponsePage = () => {
  const location = useLocation();
  const videoUrl = location.state?.videoUrl;

  if (!videoUrl) {
    return (
      <div className="container text-center mt-5">
        <h3 className="text-danger">No video response available.</h3>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-sm-12">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white text-center">
              <h2>Processed Video</h2>
            </div>
            <div className="card-body text-center">
              <video
                src={videoUrl}
                controls
                className="img-fluid rounded"
                style={{ maxHeight: "500px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsePage;