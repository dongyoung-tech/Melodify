import React from "react";

const SelectedItem = (props) =>{

    const deleteHandler = () =>{
        const Data = {
            title:props.item.title,
            artist:props.item.artist,
            imgurl:props.item.imgurl
        }
        props.Delete(Data);
    }

    return(
        <div className="selected-Item">
            <img src={props.item.imgurl}></img>
            <p className="selected-title">{props.item.title}</p>
            <p className="selected-artist">{props.item.artist}</p>
            <button onClick={deleteHandler}><i className="fa-solid fa-trash"></i></button>
        </div>
    )

}

export default SelectedItem;