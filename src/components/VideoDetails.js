import React from "react";
import './VideoDetails.css';
function VideoDetails({video}) {

  if(!video){
    return(<div>
      Loading
      <h1>HELLo</h1>
      </div>)
  }
  
  const videoID = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="videoDetails">
      <div className="videoDetails-box">
        <iframe
          className="videobox"
          src={videoID}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="allowfullscreen"
        ></iframe>
      </div>
      <div className="videoDetails-details">
        <h5>{video.snippet.title}</h5>
        <p>{video.snippet.description}</p>
        
      </div>
    </div>
  );
}

export default VideoDetails;
