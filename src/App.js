import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UploadPage from './components/UploadPage';
import LoadingPage from './components/LoadingPage';
import ResponsePage from './components/ResponsePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UploadPage />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/response" element={<ResponsePage />} />
      </Routes>
    </Router>
  );
};

export default App;