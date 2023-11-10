import React ,{useState}from "react";
import SongItem from "./SongItem";
import SelectedItem from "./SelectedItem";
import MakeCartList from "./MakeCartList";
import MakeSongList from "./MakeSongList";

const SongList = (props) =>{
    const [Data , setData] = useState([]);
    const DataFilter = (item) =>{
        const isInData = Data.filter(elem=>{return elem.title == item.title});
        if(isInData.length>0){
            alert("이미 추가한 노래입니다");
            return;
        }
        setData([...Data, item]);
        props.update(item);
    }
    const DeleteItem = (item) =>{
        const FilterdData = Data.filter(elem=>{return elem.title != item.title})
        setData(FilterdData);
        props.delete(FilterdData);
    }
    return(
        <div className="M-Song-list">

            <MakeCartList item={props.item} update={DataFilter}/>
            <MakeSongList item={Data} Delete={DeleteItem}/>
        </div>
    )
}

export default SongList;