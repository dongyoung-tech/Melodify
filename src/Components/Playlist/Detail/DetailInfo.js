import React from "react";
import YoutubeList from "../../keyword/YoutubeList";

const DetailInfo = (props) =>{

    return(
        <div className="p-detail-info">
            <div className="p-detail-about">
                <img src={props.item.imgurl}></img>
                <div className="p-detail-topic">
                    <p className="p-d-t">{props.item.title}</p>
                    <p className="p-d-r">{props.item.artist}</p>
                </div>
                <div className="p-detail-intro">
                    <p>{props.intro}</p>
                </div>
            </div>
            <div className="p-youtube-box">
                <YoutubeList artist={props.item.artist} keyword={props.item.title}/>
            </div>
        </div>
    )
}

export default DetailInfo;