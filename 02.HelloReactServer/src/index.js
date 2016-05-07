import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';

class NIHOW extends Component{
  render(){
    return(
      <h1>你好</h1>
    );
  }
}

ReactDOM.render(
  <NIHOW />,
  document.querySelector('.container'));
