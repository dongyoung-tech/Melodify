import React ,{useEffect,useState} from "react";
import axios from "axios";
import CartList from "./CartList";
import "./User.css";
import UserInfo from "./UserInfo";
import UserPlaylist from "./User-Playlist";
const User = () =>{
  const [cartData , setcartData] = useState([]);
    const user = JSON.parse(sessionStorage.getItem("userData"));
    const cartList = async () => {
       try {
         const response = await axios.post(
           "https://port-0-melodifyserver-1drvf2llollu2op.sel5.cloudtype.app/cart/cart-list",
           {
             id: user.id,
           }
         );
         if (response.data.message != "no data") {
           const parsedData = response.data;
           setcartData(JSON.parse(parsedData.rows[0].info));
         }
       } catch (error) {
         console.error("Failed:", error);
       }
     };
     useEffect(()=>{
      if (!user) {
        alert("로그인 후 이용하실 수 있습니다.");
        window.location.href = "/Member/login";
        return;
      }
      else cartList();
     },[])

  if(user){
      return(
        <>
           <UserInfo item={user}/>
           <div className="user-page">
           <h3>찜한 노래</h3>
           <CartList item={cartData} id={user.id} update={cartList}/>
           <h3>만든 플레이리스트</h3>
           <UserPlaylist name ={user.name} key="userPlayList"/>
           </div>
         </>
      )
     }
}

export default User;