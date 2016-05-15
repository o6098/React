import React from 'react';

const videoListItem = (props)=>{
  return (
    <li>{props.video.snippet.title}</li>
  );
}
export default videoListItem;
