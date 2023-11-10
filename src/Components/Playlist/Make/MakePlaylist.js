import React ,{useEffect,useState}from "react";
import {useDispatch} from "react-redux";
import { addItem } from "../../store/Actions";
import axios from "axios";
import Loading from "../../UI/Loading";
import SongList from "./SongList";
import Header from "../../UI/Header";
import PlayListInput from "./PlayListInput";
import "../PlayList.css";
const MakePlayList = () =>{
    const [Data  , setData] = useState(null);
    const [submitData , setSubmit] = useState([])
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
            setData(JSON.parse(parsedData.rows[0].info));
          }
          else{
            setData([]);
             Dispatch(addItem([])); 
          }
        } catch (error) {
          console.error("Failed:", error);
        }
      };
      useEffect(()=>{
         cartList();
      },[])

      const UpdateData = (array) =>{
        setSubmit([...submitData , array]);
      }
      const DeleteData = (array) =>{
        setSubmit(array);
      }
     if(Data == null) return <Loading/>
     else {
        return(
            <>
          <div className='background-overlay'></div>
                <Header/>
               <div className="Make-Playlist-Page">
                    <div className="Make-Playlist-con">
                        <SongList item={Data} update={UpdateData} delete={DeleteData}/>
                        <PlayListInput item={submitData}/>
                    </div>
               </div>
            </>
          )
     }
}

export default MakePlayList;