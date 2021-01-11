import React from 'react';
import './VideoList.css';
import VideoItem from './VideoItem';

function VideoList({videos, selectedVideo}) {

    return (
      <div className="videolist">
        {videos.map((video) => {
          return (
            <VideoItem
              videoJson={video}
              onClickDetails={selectedVideo}
              title={video.snippet.title}
              channel={video.snippet.channelTitle}
              img={video.snippet.thumbnails.default}
            />
          );
        })}
      </div>
    );
}

export default VideoList
