import React from "react";
import recordUrl from "../../../asset/record.png";
const AlbumItem = (props) =>{
    const release = props.item.main_release?props.item.main_release:props.item.id;
    return(
            <div className="Album-Item">
                 <a href={`/Detail/release/key?key=${release}&cat=release`}>
                    <img src={props.item.thumb || recordUrl}></img>
                    <div className="Album-text">
                        <strong className="A-title">{props.item.title}</strong>
                        <strong className="A-year">{props.item.year}</strong>
                    </div>
                </a>
            </div>
    )
    

}

export default AlbumItem;