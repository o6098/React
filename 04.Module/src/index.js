import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app.js';
import App1 from './component/app1.js';

class APPP extends React.Component {
  render(){
    return(
      <div>
        <App />
        <App1 />
      </div>
    );
  }
}

ReactDOM.render(
  <APPP />,
  document.querySelector('.container')
);
