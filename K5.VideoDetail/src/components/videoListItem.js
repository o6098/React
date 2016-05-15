import React from 'react';

const videoListItem = (props)=>{
  const imgUrl = props.video.snippet.thumbnails.default.url;
  const Title = props.video.snippet.title;
  return (
    <li className='list-group-item'>
      <div className='video-list media'>
        <div className='media-left'>
          <img className='media-object' src={imgUrl} />
        </div>
        <div className = 'media-body'>
          <div className='media-heading'>{Title}</div>
        </div>
      </div>
    </li>

  );
}
export default videoListItem;
