import React from "react";

const TopArtistItem = (props) =>{

    return(
        <li>
            <a href ={`/Search?Keyword=${props.item.name}&cat=artist`}>
                <span className="t-a-n"><i>{props.idx + 1}</i></span>
                <span>{props.item.name}</span>
            </a>
        </li>
    )
}
export default TopArtistItem;