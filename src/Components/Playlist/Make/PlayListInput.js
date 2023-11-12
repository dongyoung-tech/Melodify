import React ,{useState}from "react";
import axios from "axios";
const PlayListInput = (props) =>{
    
    const user = JSON.parse(sessionStorage.getItem("userData"));
    const [formData, setFormData] = useState({
      user: "",
      name:"",
      info: "",
      intro: "",
    });
  
    const chageHandler = (event) => {
      const { name, value, type, files } = event.target;
  
      // 파일 업로드 필드인 경우 파일 정보를 설정
      if (type === 'file') {
        setFormData({
          ...formData,
          [name]: files[0],
        });
      } else {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    }

    const checkList = async(e)=>{
      e.preventDefault();
      if(formData.intro.length == 0 || formData.name.length ==0){
        alert("제목과 소개글은 반드시 작성해주세요!");
        return
      }
      if(props.item.length<2){
        alert("두 곡 이상 선택 해주세요!");
        return
      }
      try {
        const response = await axios.post("https://port-0-melodifyserver-1drvf2llollu2op.sel5.cloudtype.app/play-list/playList-Check", {
          user: user.name,
          intro:formData.intro,
          info: props.item,
          name:formData.name,
          headers: {
            "Content-Type": `application/json`, // application/json 타입 선언
          }
        }, 
        );
        if (response.data.message == "success") {
          console.log(response.data)
          alert("이미 존재하는 플레이리스트 이름입니다");
          return;
        } 
        else{
          submitHandler();
        }
      } catch (error) {
        console.error("Failed:", error);
      }
    }

    const submitHandler = async() =>{
        console.log("제출할 데이터",props.item);
        if(!user) {
            alert('로그인 후 이용해주세요');
            return;
      }  
      try {
        const response = await axios.post("https://port-0-melodifyserver-1drvf2llollu2op.sel5.cloudtype.app/play-list/playList-input", {
          user: user.name,
          intro:formData.intro,
          info: props.item,
          name:formData.name,
          headers: {
            "Content-Type": `application/json`, // application/json 타입 선언
          }
        }, 
        );
        if (response.data.message == "successful") {
          alert("플레이스트 를 저장하였습니다.");
          window.location.href='/PlayList';
        } else {
          alert("플레이스트 저장에 실패하였습니다.");
        }
      } catch (error) {
        console.error("Failed:", error);
      }
    }

    return(
        <div className="Make-Playlist-Input">
            <form onSubmit={checkList}>
                <input placeholder="플레이리스트 제목" onChange={chageHandler} name="name"></input>
                <textarea placeholder="플레이리스트 설명" name="intro" onChange={chageHandler}></textarea>
                <button>저장하기</button>
            </form>
        </div>
    )
}

export default PlayListInput;