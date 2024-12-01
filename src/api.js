import axios from 'axios';

const BASE_URL = 'http://localhost:5001'; // Replace with your backend URL

export const processVideo = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/upload`, formData, {
      responseType: 'blob', // Treat the response as binary data
    });
    // Create a temporary URL for the video
    console.log(response.data);
    const videoUrl = URL.createObjectURL(response.data);
    return { videoUrl };
  } catch (error) {
    console.error('Error processing video:', error);
    throw error;
  }
};
