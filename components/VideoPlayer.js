import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  return (
    <div
      className='container-fluid p-3 col-lg-12 col-md-12 col-sm-12 d-flex align-content-center justify-content-center'>
      <ReactPlayer url={'/futureDentists.mp4'} controls />
    </div>
  );
};

export default VideoPlayer;