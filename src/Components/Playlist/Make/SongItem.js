import React  from "react";

const SongItem = (props) =>{
    const UpdateItem = () =>{
        const addData = {
            title:props.item.title,
            artist:props.item.artist,
            imgurl:props.item.imgurl
        }
        props.update(addData);
    }
    return(
        <div className="M-Song-Item">
            <img src={props.item.imgurl}></img>
            <div className="M-Song-Text">
                <b>{props.item.title}</b><br></br>
                <b>{props.item.artist}</b>
            </div>
            <button onClick={UpdateItem}>추가</button>
        </div>
    )
}

export default SongItem;