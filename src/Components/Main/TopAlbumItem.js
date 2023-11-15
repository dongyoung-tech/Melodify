import React from "react";

const TopAlbumItem = (props) => {

    return(
        <a href={`/Search?Keyword=${props.item.artist.name} ${props.item.name}&cat=release`}>
            <div className ='M-Album-Item' style={{backgroundImage:`url(${props.item.image[3]['#text']})`}}>
                <div className="A-text">
                      <div>
                        <strong>{props.item.name}</strong><br></br>
                        <strong className="t-artist">{props.item.artist.name}</strong>
                      </div>
                </div>
            </div>
        </a>
    )
}

export default TopAlbumItem;