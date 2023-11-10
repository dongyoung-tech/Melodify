import React from "react";
import AlbumItem from "./AlbumItem.js";

const AlbumContainer = (props) =>{
    return(
      <>
        <h4>앨범 목록</h4>
        <div className="Album-container">
        {props.item.map((item,idx)=>{
            return <AlbumItem item={item} key={idx}></AlbumItem>
        })}
       </div>  
      </>
    )
}

export default AlbumContainer;