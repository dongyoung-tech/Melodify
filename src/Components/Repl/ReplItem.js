import React  , {useState}from "react";
import axios from "axios";
import  imgurl  from "../../asset/profile.png";

const ReplItem = (props)=>{
    const profileUrl = (props.item.profile!="null")?`https://port-0-melodifyserver-1drvf2llollu2op.sel5.cloudtype.app/${props.item.profile}`:imgurl;
    const [isupdated , setIsUpdated] = useState(false);
    const user = JSON.parse(sessionStorage.getItem("userData"));
    const deleteHandler = async() =>{
        try {
            const response = await axios.post(
                "https://port-0-melodifyserver-1drvf2llollu2op.sel5.cloudtype.app/repl/repl-delete",
                {
                    num: props.item.num,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.data.message !== "Failed") {
                props.replLoad();
            }
        } catch (error) {
            console.error("Fetch failed:", error);
        }
    }
    return(
        <div className="repl-Item">
            {user && user.name == props.item.name && <button className="r_delete_btn" onClick={deleteHandler}>삭제</button>}
            <div className="repl-info">
                <img src={profileUrl}/>
                <span className="r-n">{props.item.name}</span>
                <span className="r-d">{props.item.date}</span>
                </div>
            <p className="repl-content">{props.item.content}</p>
        </div>
    )
}

export default ReplItem;