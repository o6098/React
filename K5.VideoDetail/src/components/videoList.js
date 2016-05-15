import React from 'react';
import VideoListItem from './videoListItem';

const List = (props) =>{
  const listItem = props.video.map(video =>
  <VideoListItem video = {video} key = {video.etag}/>)
  return(
    <ul className = "col-md-4 list-group">{listItem}</ul>
  );
}

export default List;
