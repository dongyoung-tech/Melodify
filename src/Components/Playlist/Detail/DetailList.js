import React from "react";
import DetailListItem from "./DetailListItem";
import axios from "axios";
const user = JSON.parse(sessionStorage.getItem("userData"));
const DetailList = (props) =>{
    const deleteHandler = async() =>{
            try {
              const response = await axios.post(
                "https://port-0-melodifyserver-1drvf2llollu2op.sel5.cloudtype.app/play-list/playList-Delete",
                {
                  name: props.info[0],
                }
              );
              if (response.data.message == "successful") {
                    alert("플레이 리스트를 지웠습니다");
                    window.location.href='/PlayList';
              }
            } catch (error) {
              console.error("Failed:", error);
            }
    }
    return(
        <div className="p-item-list">
            <div className="p-i-title">
                <span className="p-i-t-title">{props.info[0]}</span>
                <span className="p-i-t-user">{props.info[1]}</span>
                {user && user.name == props.info[1] && <button onClick={deleteHandler}>삭제하기</button>}
            </div>
            <ul className="p-s-list">
                {props.item.map((item,idx)=>{
                    return <DetailListItem item={item} key={idx} idx={idx} update={props.update}/>
                })}
            </ul>
        </div>
    )
    
}

export default DetailList;