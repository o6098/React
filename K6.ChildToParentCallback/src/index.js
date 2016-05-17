import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Search from './components/searchBar.js';
import VideoList from './components/videoList.js';
import VideoDetail from './components/videoDetail.js';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyD4bd6KQMFcJ-hOFOSJqqGiUuFRSgnPO-Y';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('初音ミク');
  }

  videoSearch(miku){
    YTSearch({key: API_KEY,term: miku}, videos =>{
      this.setState({videos:videos,selectedVideo: videos[0]});}
    );
  }
  render(){
    return (
      <div>
        <Search onSearch = {term =>this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList video={this.state.videos} onSelect={
          selectedVideo=> this.setState({selectedVideo})}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
);
