import React ,{useState ,useEffect} from "react";
import {useLocation } from "react-router-dom";
import TrackList from "./TrackList";
import Blog from "./Blog/Blog";
import recordUrl from "../../asset/record.png";
import Loading from "../UI/Loading";
import AlbumRepl from "../Repl/AlbumRepl";
import DetailInfo from "./Album/DetailInfo";
const AlbumDetail = (props)=>{
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const albumId = searchParams.get('key');
    const [Data , setData] = useState(null);
    const getData = ()=>{
        fetch(`https://port-0-melodifyserver-1drvf2llollu2op.sel5.cloudtype.app/album/key?key=${`${albumId}`}`)
        .then((response) => response.json())
        .then((data) => {
            setData(data);  
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    }
    useEffect(() => {
        getData();
    }, [props.item]);
    
if(Data == null){
    return(
        <Loading/>
    )
}
 else {
    const imgurl = Data.images?Data.images[0].resource_url:recordUrl;
    return(
        <div className="SongInfo">
        <DetailInfo item={Data} imgurl={imgurl}/>
        <div className="youtube-container">
        <TrackList item={Data.tracklist} artist={Data.artists_sort} imgurl={imgurl}/>
        </div>  
        <div className="blog-container">
                <Blog item={`${Data.artists_sort} ${Data.title}`}/>
         </div>
         <AlbumRepl/>
    </div>
    )
 }

}

export default AlbumDetail;