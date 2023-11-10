import React from "react";

const PlayListItem =(props)=>{

    return(
        <a href = {`/PlayList/Detail?key=${props.item.name}&cat=playlist`}>
            <li className="play-list-item">
                <img src={JSON.parse(props.item.info)[0].imgurl}></img>    
                <div className="play-list-info">
                    <p className="play-list-title">{props.item.name}</p>
                    <p className="play-list-intro">{props.item.intro}</p>   
                    <p className="play-list-user">{props.item.user} | {props.item.registDay}</p>
                </div>
            </li>
        </a>
    )
}

export default PlayListItem;