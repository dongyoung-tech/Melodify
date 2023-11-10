import React ,{useEffect,useState} from "react";
import TrackList from "./TrackList";
const AlbumInfo = (props)=>{
const [Data , setData] = useState(null);
const getData = ()=>{
    console.log('asd',props.item)
    fetch(`https://port-0-melodifyserver-1drvf2llollu2op.sel5.cloudtype.app/album/id?id=${props.item}`)
    .then((response) => response.json())
    .then((data) => {
        console.log('앨범',data.rss.channel[0].item[0]);
        setData(data.rss.channel[0].item[0]);
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });
}
useEffect(() => {
    getData();
}, [props.item]);

if (Data === null) {
    return <div>Loading...</div>; // 데이터가 로드될 때까지 로딩 상태 표시
}
    console.log('dd',Data['maniadb:tracks'][0].disc[0].song);
    return(
        <div className="SongInfo">
            <div className="detail-Info">
                <img src={Data.image}></img>
                <div className="detail-text">
                    <h4 class='song-title'>{Data.title}</h4>
                    <h5 class='song-artist'>{Data['aniadb:albumartists']}</h5>
                    <strong>{Data.releasedate}</strong>
                    <p>{Data.description}</p>
                </div>
            </div>
            <div className="youtube-container">
                <TrackList item={Data['maniadb:tracks'][0].disc[0].song}/>
            </div>  
        </div>
    )

}

export default AlbumInfo;