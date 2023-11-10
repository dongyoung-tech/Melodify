import React,{useEffect,useState} from "react";
import VideoCard from "../UI/VideoCard";
const YoutubeList = (props) =>{
    const keyword  = props.keyword?props.keyword:"";
    const [Data,setData] = useState();
    let apiEndpoint = `https://port-0-melodifyserver-1drvf2llollu2op.sel5.cloudtype.app/youtube/key?key=${props.artist} ${keyword}`;
    const getData = () =>{
        fetch(apiEndpoint)
        .then((response) => response.json())
        .then((data) => {
            setData(data.documents);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    }
    useEffect(() => {
        getData();
    },[props.keyword]); 
    
    return(
        <>
        {Data && Data.map((item,idx)=>{
            return <VideoCard item={item} key={idx}/>
        })}
        {typeof Data != "object" && <p>유튜브 검색결과가 존재하지 않습니다.</p>}
        </>
    )
}

export default YoutubeList;