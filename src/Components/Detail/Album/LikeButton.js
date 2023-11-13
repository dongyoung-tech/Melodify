import React ,{useState,useEffect}from "react";
import { useSelector } from "react-redux";
import {useDispatch} from "react-redux";
import { addItem } from "../../store/Actions.js";
import axios from 'axios'
const LikeButton = (props) =>{
    const cartData = useSelector((state) => state);
    const user = JSON.parse(sessionStorage.getItem("userData"));
    const [isItemInCart, setIsItemInCart] = useState(false); 
    const Dispatch = useDispatch();
    const placeObject = {
      title: props.title,
      artist:props.artist,
      cat:"song",
      imgurl: props.imgurl,
    };
    const cartInsert = async () => {
        if(!user) {
            alert('로그인 후 이용해주세요');
            return;
      }  
      const info = [...cartData, placeObject];
      let url = "";
      if(isItemInCart) {
        alert('이미 찜한 노래 입니다.');
        return
      }
      if (cartData == 0) url = "https://port-0-melodifyserver-1drvf2llollu2op.sel5.cloudtype.app/cart/cart-insert";
      else url = "https://port-0-melodifyserver-1drvf2llollu2op.sel5.cloudtype.app/cart/cart-update";
  
      try {
        const response = await axios.post(url, {
          userid: user.id,
          info: info
        });
        if (response.data.message == "successful") {
          alert("장바구니에 저장하였습니다.");
          setIsItemInCart(true); 
          Dispatch(addItem(info)); 
        } else {
          alert("장바구니에 저장 실패하였습니다.");
        }
      } catch (error) {
        console.error("Failed:", error);
      }
    };
  
    useEffect(() => {
      if(cartData) setIsItemInCart(cartData.some((item) => item.title === placeObject.title));
    }, [cartData, placeObject]);
  
    return (
      <>
          <button className="cart-button" onClick={cartInsert}>
            {isItemInCart ? (
              <i className="fa-solid fa-heart"></i>
            ) : (
              <i className="fa-regular fa-heart"></i>
            )}
          </button>
        
      </>
    );
}

export default LikeButton;