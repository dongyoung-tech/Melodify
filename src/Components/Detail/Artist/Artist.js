import React ,{useState,useEffect}from "react";
import recordUrl from "../../../asset/record.png";
import Loading from "../../UI/Loading";
import AlbumRepl from "../../Repl/AlbumRepl";
import ArtistDetailInfo from "./ArtistDetailInfo";
import AlbumContainer from "./AlbumContainer";
const Artist = () =>{
    const [Data , setData] = useState(null);
    const [Album , setAlbum] = useState(null);
    const currentURL = window.location.href;
    const urlParams = new URLSearchParams(new URL(currentURL).search);
    const key = urlParams.get('key');
    const type = urlParams.get('cat');
    const getData = ()=>{
        fetch(`https://port-0-melodifyserver-1drvf2llollu2op.sel5.cloudtype.app/Detail/key?key=${key}&cat=${type}`)
        .then((response) => response.json())
        .then((data) => {
            setData(data.info);
            setAlbum(data.album.releases);
            console.log(data);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    }
    useEffect(() => {
        getData();
    }, [key]);
    
 if(Data == null && Album == null){
    return(
        <Loading/>
    )
 }   
else  {
    const imgurl = Data.images?Data.images[0].resource_url:recordUrl;
    return(
        <div className="SongInfo">
            <ArtistDetailInfo item={Data} imgurl={imgurl}/>
            <AlbumContainer item={Album}/>
            <AlbumRepl/>
        </div>
    )
        }
}

export default Artist;