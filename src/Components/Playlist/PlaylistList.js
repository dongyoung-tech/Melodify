import React,{useEffect,useState} from "react";
import axios from "axios";
import PlayListCon from "./PlayList-Con";
import Loading from "../UI/Loading";
const PlaylistList = () =>{
    const [Data ,setData] = useState(null);
    const getData = async() =>{
        try {
            const response = await axios.post("https://port-0-melodifyserver-1drvf2llollu2op.sel5.cloudtype.app/play-list/playList-List")
            if (response.data.message == "success"){
              setData(response.data.rows)
            } 
          } catch (error) {
            console.error("Failed:", error);
          }

    }
    useEffect(()=>{
        getData();
    },[])

    if(Data == null){
        return <Loading/>
    }
    else{
        return(
            <>
            <PlayListCon item={Data} key='play-list-con'/>
            </>
        )
    }

} 

export default PlaylistList;