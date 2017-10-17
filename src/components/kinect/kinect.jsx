import React from 'react';

const Kinect = () => (
  <iframe src={process.env.KINECT_MJPEG_STREAMER} id="kinect_frame" scrolling="no" />
);

export default Kinect;