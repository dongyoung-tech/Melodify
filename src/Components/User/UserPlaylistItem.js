import React from "react";

const UserPlayListItem = (props) =>{

const Data = JSON.parse(props.item.info);
return(
    <a href={`/PlayList/Detail?key=${props.item.name}&cat=playlist`}>
        <div className="cart-item">
        <img src={Data[0].imgurl}></img>
        <div className="cart-text">{props.item.name}</div>
      </div>
    </a>
)
}

export default UserPlayListItem;