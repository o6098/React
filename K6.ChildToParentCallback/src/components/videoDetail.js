import React from 'react';

const VideoDetail = (props)=>{
  if(!(props.video)){
    return <div></div>;
  }
  const ID = props.video.id.videoId;
  const url = `https://www.youtube.com/embed/${ID}`;
  const Title = props.video.snippet.title;
  const Desc = props.video.snippet.description;

  return(
    <div className="video-detail col-md-8">
      <div className='embed-responsive embed-responsive-16by9'>
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="detail">
        <div><h1>{Title}</h1></div>
        <div>{Desc}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
