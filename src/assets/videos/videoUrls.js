// Video URLs for background videos
// Using working sample videos for demonstration

export const videoUrls = {
  // Homepage - General gym atmosphere
  home: '/gym.mp4',
  
  // Login/Signup - Modern gym interior
  auth: '/gym.mp4',
  
  // Diet page - Healthy food preparation
  diet: '/gym.mp4',
  
  // Exercise guide - People working out
  exercises: '/gym.mp4',
  
  // Join form - Gym equipment and training
  join: '/gym.mp4',
  
  // Dashboard - Fitness tracking and progress
  dashboard: '/gym.mp4',
  
  // About Us page
  about: '/gym.mp4'
};

// Alternative video sources (you can use these instead)
export const alternativeVideos = {
  home: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
  auth: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4',
  diet: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4',
  exercises: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_10mb.mp4',
  join: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_20mb.mp4',
  dashboard: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_30mb.mp4'
};

// Instructions for adding your own videos:
/*
1. Add your gym videos to the src/assets/videos/ directory
2. Update the URLs above to point to your local videos
3. For production, upload videos to a CDN and use those URLs
4. Recommended video specifications:
   - Format: MP4
   - Resolution: 1920x1080 or 1280x720
   - Duration: 10-30 seconds (will loop) 
   - File size: Under 10MB for web performance
   - Content: Should match the page theme
*/
