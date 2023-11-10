import React, { useEffect , useState} from "react";
import { useLocation } from "react-router-dom";
import DetailInfo from "./DetailInfo";
import axios from "axios";
import DetailList from "./DetailList";
import AlbumRepl from "../../Repl/AlbumRepl";

const PlayListDetail = () =>{
    const [Data,setData] = useState(null);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const keyword = searchParams.get('key')?searchParams.get('key'):'';
    const [Index , setIndex] = useState(0);
    const getData = async() =>{
        try {
            const response = await axios.post("https://port-0-melodifyserver-1drvf2llollu2op.sel5.cloudtype.app/play-list/playList-Check", {
              name:keyword
            }, 
            );
            if (response.data.message == "success") {
              setData(response.data.rows[0]);
            } 
          } catch (error) {
            console.error("Failed:", error);
          }
    }

    useEffect(()=>{
        getData();
    },[keyword]);

    const addIdx = (num) =>{
        setIndex(num);
    }
    if(Data == null){
        return <div>...Loading</div>
    }
    else{    
        const JSONData = JSON.parse(Data.info)
        const imgurl =JSONData[Index].imgurl;
        return(
            <div className="play-list-page">
            <div className="p-background">
                <div className="p-background-item" style={{backgroundImage:`url(${imgurl})`}}></div>
            </div>
            <div className="p-detail">    
                <DetailInfo item={JSONData[Index]} key={Index} intro={Data.intro}/>
                <DetailList item={JSONData} info={[Data.name,Data.user,Data.intro]} update={addIdx} key='DList'/>
            </div>
            <div className="p-repl-con">
                 <AlbumRepl/>
            </div>
            </div>
        )
    }
}

export default PlayListDetail;
