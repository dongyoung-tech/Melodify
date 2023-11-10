import React ,{useEffect, useState}from "react";
import YoutubeList from "../../keyword/YoutubeList";
import LikeButton from "./LikeButton";
const TrackItem= (props)=>{
    const [selected,setSelect] = useState(false);
    const [Data , setData] = useState([])
    const ClickHandler = () =>{
        setSelect(!selected);
    }
    const artistname = props.item.artists?props.item.artists[0].name:props.artist;
    const extractedString = artistname.replace(/\(\d+\)/, '').trim();
    const returnYoutube = () =>{
        if(selected){
            return(
                <div className="video-container">
                       <YoutubeList keyword={decodedString} artist ={extractedString}/>
                 </div>
            )
        }
    }
    const parser = new DOMParser();
    const decodedString = parser.parseFromString(`<!doctype html><body>${props.item.title}`,'text/html').body.textContent;

    return(
            <li>
                <div className="t-num">{props.idx+1}</div>
               <div className="t-title"> {decodedString}</div>
                <div className="t-d-info">
                <LikeButton data={Data} title={decodedString} artist={artistname} imgurl={props.imgurl}/>
                <span className="youtube_Btn" onClick={ClickHandler}><i className="fa-brands fa-youtube"></i></span>
                <span className="t-r-a">{extractedString}</span>
                <span className="t-r-t">{props.item.duration}</span>
                </div>
                {returnYoutube()}
            </li>
    )
}

export default TrackItem;