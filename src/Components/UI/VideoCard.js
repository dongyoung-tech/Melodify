import React, { useRef, useEffect } from 'react';

const VideoCard = (props)=>{
    const playerRef = useRef(null);
    const youtubeLink = props.item.url;
    const url = new URL(youtubeLink);
    const videoId = url.searchParams.get('v');
    useEffect(() => {
      if (window.YT && window.YT.Player) {
        playerRef.current = new window.YT.Player(`player-${videoId}`, {
          origin: 'https://m-elody.netlify.app',
          videoId: videoId
        });
      }
    }, [videoId]);
  
    return <div id={`player-${videoId}`}></div>;
}
export default VideoCard;