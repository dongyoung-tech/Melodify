import React from "react";
import SongItem from "./SongItem";
const MakeCartList = (props) =>{

    return(
        <div className="m-cart-list">
        {props.item.length != 0 && props.item.map((item,idx)=>{
            return <SongItem item={item} key ={idx} update={props.update}/>
        })}
        {props.item.length == 0 && <h4>찜한 노래가 없습니다</h4>}
    </div>
    )
}

export default MakeCartList;