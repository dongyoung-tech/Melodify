import React from "react";

const DetailListItem = (props) =>{
        const clickHander = () =>{
            props.update(props.idx);
        }
    return(
        <li onClick={clickHander}>
            <img src={props.item.imgurl}></img>
            <p className="p-d-i-title">{props.item.title}</p>
            <p className="p-d-i-artist">{props.item.artist}</p>
        </li>

    )
}

export default DetailListItem;