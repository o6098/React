import React,{Component} from 'react';

class Search extends Component {
  render(){
    return <input onChange={(event) => console.log(event.target.value)} />
  }
}

export default Search;