import React from "react";
import SelectedItem from "./SelectedItem";
const MakeSongList = (props) =>{

    return(
        <div className="m-item-list">
        <h4>선택된 음악 {props.item.length>0 && `: ${props.item.length}개` }</h4>
            <div className="m-item-con">
            {props.item.map((item,idx)=>{
                return <SelectedItem item={item} Delete={props.Delete} key={idx}/>
            })}
           </div>
        </div>   
    )

}

export default MakeSongList;