import React,{Component} from 'react';

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {term:''};
  }
  render(){
    return (
      <div>
        <input
          value = {this.state.term}
          onChange={(event) => this.setState({term: event.target.value})} />
        <p>state now: {this.state.term}</p>
      </div>
    );
    
  }
}

export default Search;
