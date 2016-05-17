import React from 'react';
import VideoListItem from './videoListItem';

const List = (props) =>{
  const listItem = props.video.map(video =>{
    return (<VideoListItem
      video = {video}
      key = {video.etag}
      onSelect={props.onSelect}/>
    );
  });

  return(
    <ul className = "col-md-4 list-group">{listItem}</ul>
  );
}

export default List;
