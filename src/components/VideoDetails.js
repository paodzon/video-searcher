import React from "react";
import './VideoDetails.css';
function VideoDetails() {
  return (
    <div className="videoDetails">
      <div className="videoDetails-box">
        <video className="videobox" controls>
          <source src="" type="video/mp4" />
        </video>
      </div>
      <div className="videoDetails-details">
        <h1>Video Description</h1>
      </div>
    </div>
  );
}

export default VideoDetails;
