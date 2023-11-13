import React ,{useEffect,useState}from "react"
import axios from "axios";
import TrackItem from "./TrackItem";
import {useDispatch} from "react-redux";
import { addItem } from "../../store/Actions.js";
const TrackList = (props) =>{
    const Dispatch = useDispatch();
    const user = JSON.parse(sessionStorage.getItem("userData"));
    const [Data , setData] = useState([])
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
           setData(JSON.parse(parsedData.rows[0].info));
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
        <div className="Track-list">
                <h5>수록곡 정보</h5>
            <ul>
                {props.item.map((item,idx)=>{
                    return <TrackItem item={item} key={idx} idx={idx} artist={props.artist} imgurl={props.imgurl} cdata={Data}></TrackItem>
                })}
            </ul>   
        </div>
    )
}

export default TrackList;