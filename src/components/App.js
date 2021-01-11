import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import VideoDetails from "./VideoDetails";
import VideoList from "./VideoList";
import youtube from '../api/youtube';
import axios from 'axios';
class App extends React.Component {

  constructor(props){
    super(props);
    const KEY = "AIzaSyAwqL3qFSo4K_3W0dve7dvvIdAjpAkUSQA";

    axios.get('https://www.googleapis.com/youtube/v3/playlists',{
      params:{
        part: "snippet",
        maxResults: 5,
        key: KEY,
      }
    }).then(res =>{
      console.log(res)
    })
  }
  state = {videos: [], selectedVid: null,playlist: []}

  onSubmitSearch = async(input) => {
    try{
      const res = await youtube.get('/search/',{
        params:{
          q:input,
          maxResults: 10,
        }
      })

      this.setState({videos: res.data.items, selectedVid:res.data.items[0]});
    }catch (err){
      console.log(err)
    }
    console.log(this.state.videos);
  
  };


   selectedVideo = (video) =>{
    console.log(this.state.selectedVid);
     this.setState({selectedVid: video});
    
  }

  render() {
    return (
      <div className="App">
        <div className="app-navbar">
          <Navbar onSubmit={this.onSubmitSearch} />
        </div>

        <div className="app-videocon">
          <div className="app-video">
            <VideoDetails video={this.state.selectedVid}/>
          </div>
          <div className="app-list">
            <VideoList videos={this.state.videos} selectedVideo ={this.selectedVideo}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
