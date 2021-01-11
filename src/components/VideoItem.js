import React from "react";
import "./VideoItem.css";

function VideoItem({ title, channel, img, onClickDetails,videoJson }) {
  return (
    <div className="videoitem" onClick={() =>onClickDetails(videoJson)}>
      <div className="videoitem-imgcon">
        <img className="videoitem-img" src={img.url}></img>
      </div>
      <div className="videoitem-desc">
        <h5 className="videoitem-title">{title}</h5>
        <span>{channel}</span>
      </div>
    </div>
  );
}

export default VideoItem;
