import React from "react";
import YoutubeList from "./YoutubeList";
import TrackList from "./TrackList";
const SongInfo = (props) =>{
return(
    <div className="SongInfo">
        <img src={props.item.imgurl}></img>
        <h4 class='song-title'>{props.item.title}</h4>
        <h5 class='song-artist'>{props.item.artist}</h5>
        <p>{props.item.description}</p>
        <div className="youtube-container">
            {props.cat !='album' && <YoutubeList keyword={props.item.title} artist ={props.item.artist}/>}
            {props.cat =='album' && <TrackList item={props.item.album}/>}
        </div>
    </div>
)
}

export default SongInfo;