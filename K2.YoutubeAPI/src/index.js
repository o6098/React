import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Search from './components/searchBar.js';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyD4bd6KQMFcJ-hOFOSJqqGiUuFRSgnPO-Y';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {videos: []};
    YTSearch({key: API_KEY,term: 'miku'}, videos =>this.setState({videos}));
  }
  render(){
    return (
      <div>
        <Search />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
);
