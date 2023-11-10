import React ,{useState,useEffect}from "react";
import recordUrl from "../../asset/record.png";
const Card = (props) =>{
    let imgurl =props.item.cover_image;
    if(props.item.thumb == "") imgurl = recordUrl;
    let artist=props.item.title;
    let type = props.item.type;
    if(props.item.type =="artist") type = 'artists';
    let DetailUrl= `/Detail/${props.item.type}/key?key=${props.item.id}&cat=${type}`;
    return(
        <a href={DetailUrl}>
            <div className="card-box">
                <div className="image-box">
                    <img src={imgurl}/>
                </div>
                <div className="card-text">
                    <p>{artist}</p>
                </div>
            </div>
        </a>
    )
}

export default Card;