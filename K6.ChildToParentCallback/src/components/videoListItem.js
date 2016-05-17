import React from 'react';

const videoListItem = ({video,onSelect})=>{
  const imgUrl = video.snippet.thumbnails.default.url;
  const Title = video.snippet.title;
  return (
    <li onClick={()=>onSelect(video)} className='list-group-item'>
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
