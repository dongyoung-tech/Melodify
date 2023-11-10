import React,{useState,useEffect} from "react";
import TopAlbumItem from "./TopAlbumItem";

const TopAlbum = (props) =>{
    const [Data,setData] = useState(null);

    const getData = ()=>{
        fetch(`https://port-0-melodifyserver-1drvf2llollu2op.sel5.cloudtype.app/music/top-album?cat=${props.cat}`)
        .then((response) => response.json())
        .then((data) => {
            setData(data.albums.album);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    }
    useEffect(() => {
        getData();
    }, []);
    if(Data== null) return(<div>Loading.....</div>)

    else{
        return(
           <div className="Album-container">
           <h2>{`Top ${props.cat} 앨범`}</h2>
            <div className='Top-Tracks'>
                {Data && 
                Data.map((item,idx)=>{
                    return <TopAlbumItem item={item} key ={idx}/>
                })}
             </div> 
           </div> 
        )  
    }

}
export default TopAlbum;