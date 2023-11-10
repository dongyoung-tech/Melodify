import React ,{useState}from "react";
import axios from 'axios';
import {useLocation } from "react-router-dom";
import ReplList from "./ReplList";
const AlbumRepl = () =>{
    const [isUpdated, setIsUpdated] = useState(false); 
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const key = searchParams.get('key');
    const category = searchParams.get('cat');
    const InputHandler = async(event) =>{
        event.preventDefault();
        const user = JSON.parse(sessionStorage.getItem("userData"));
        if(!user) {
            alert('로그인 후 이용해주세요');
            return;
        }
        const username = user.name;
        const id = user.id;
        const profile = user.profile;
        try {
            const content = document.querySelector(".repl-text").value;
            if(content.trim().length ==0){
                alert('한글자 이상 작성해주세요');
                return;
            }
            // 서버로 요청을 보냅니다.
            const response = await axios.post(
              "https://port-0-melodifyserver-1drvf2llollu2op.sel5.cloudtype.app/repl/repl-insert",
              {
                id:id,
                name:username,
                content:content,
                parent:key,
                category:category,
                profile:profile
              },
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            if(response.data.message == "Comment inserted successfully"){
                console.log(response);
                setIsUpdated(!isUpdated);
                console.log("isupdated",isUpdated);
            }
          } catch (error) {
            console.error("Insert Failed:", error);
          }
    }
 

    return(
       <>
       <h4>댓글</h4>
        <div className="repl-container">
            <form onSubmit={InputHandler}>
                <textarea className ='repl-text'placeholder="의견을 남겨주세요!"></textarea>
                <button>등록</button>
            </form>
        </div>
        <div className="repl-list">
            <ReplList parent={key} cat={category} isUpdated={isUpdated}/>
        </div>
       </>
    )
}

export default AlbumRepl;