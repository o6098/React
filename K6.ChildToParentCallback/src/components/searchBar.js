import React,{Component} from 'react';

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {term:''};
  }
  render(){
    return (
      <div className='search-bar'>
        <input
          value = {this.state.term}
          onChange={(event) => {
            this.setState({term: event.target.value});
            this.props.onSearch(event.target.value);
          }
        } />

      </div>
    );

  }
}

export default Search;
