import React ,{useEffect,useState} from "react";
import TopArtistItem from "./TopArtistItem";
import YoutubeList from "../keyword/YoutubeList";
const TopArtist = (props) =>{
    const [Data,setData] = useState(null);
    const getData = ()=>{
        fetch(`https://port-0-melodifyserver-1drvf2llollu2op.sel5.cloudtype.app/music/top-artist?cat=${props.cat}`)
        .then((response) => response.json())
        .then((data) => {
            setData(data.topartists.artist);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    }
    useEffect(() => {
        getData();
    }, []);
if(Data != null){
        return(
            <div className="Top-Artist-Chart">
                <ul>
                <li><h4>아티스트 순위</h4></li>
                {Data.map((item,idx)=>{
                    return <TopArtistItem item={item} idx={idx} key={idx}/>
                })}
                </ul>
                <div className="Top-Video-container">
                    <h4>탑 아티스트 비디오</h4>
                    <div>
                        <YoutubeList artist={Data[0].name} keyword={""} idx={0}/>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default TopArtist;