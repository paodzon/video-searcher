import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import VideoDetails from "./VideoDetails";
import VideoList from "./VideoList";
import youtube from '../api/youtube';

class App extends React.Component {
  onSubmitSearch = async(input) => {
    try{
      const res = await youtube.get('/search',{
        params:{
          q:input
        }
      })
      console.log(res)
    }catch (err){
      console.log(err)
    }


  };
  render() {
    return (
      <div className="App">
        <div className="app-navbar">
          <Navbar onSubmit={this.onSubmitSearch} />
        </div>

        <div className="app-videocon">
          <div className="app-video">
            <VideoDetails />
          </div>
          <div className="app-list">
            <VideoList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
