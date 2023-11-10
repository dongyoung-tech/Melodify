import React ,{useState,useEffect}from 'react'
import Header from './UI/Header';
import Imgurl from  "../asset/letter-logo.png";
import TopAlbum from './Main/TopAlbum';
import TopArtist from './Main/TopArtist';
import axios from 'axios';
import {useDispatch} from "react-redux";
import { addItem } from "./store/Actions";
const Main = () =>{
    const user = JSON.parse(sessionStorage.getItem("userData"));
    const Dispatch = useDispatch();
    const cartList = async () => {
        if(!user) return;
        try {
          const response = await axios.post(
            "https://port-0-melodifyserver-1drvf2llollu2op.sel5.cloudtype.app/cart/cart-list",
            {
              id: user.id,
            }
          );
          if (response.data.message != "no data") {
            const parsedData = response.data;
            Dispatch(addItem(JSON.parse(parsedData.rows[0].info))); 
          }
          else{
             Dispatch(addItem([])); 
          }
        } catch (error) {
          console.error("Failed:", error);
        }
      };
      useEffect(()=>{
         cartList();
      },[])
return(
    
    <>
    <Header></Header>
        <div className='Main'>
                <TopAlbum cat={"kpop"}/>
                <TopAlbum cat={"ballad"}/>
                <div className='banner-image'>자신만의 플레이리스트를 만들어보세요!</div>
                <TopArtist cat={"kpop"}/>
        </div>
    </>
)
}

export default Main;