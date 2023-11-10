import React ,{useState , useEffect} from "react";
import axios from "axios";
import UserPlayListItem from "./UserPlaylistItem";

const UserPlaylist = (props) =>{
    const [Data ,setData] = useState(null);
    const [pageNo,setPage] = useState(1);
    const getData = async() =>{
        try {
            const response = await axios.post("https://port-0-melodifyserver-1drvf2llollu2op.sel5.cloudtype.app/play-list/playList-List",{
                user:props.name
            })
            if (response.data.message == "success") {
              console.log("내가만든 플리",response.data.rows);
              setData(response.data.rows);
            } 
            else{
                setData([]);
            }
          } catch (error) {
            console.error("Failed:", error);
          }

    }
    useEffect(()=>{
        getData();
    },[]);
    const getPageButtons = () =>{
        const buttons = [];
        const totalpage = Math.ceil(Data.length / 4);
        let pageCount = 5;
        if (totalpage < 5) pageCount = totalpage;
        const currentPageGroup = Math.ceil(pageNo / pageCount);         
        const startPage = (currentPageGroup - 1) * pageCount + 1;
        const endPage = Math.min(currentPageGroup * pageCount, totalpage);
        const renderButton = (page) =>{
            return <button
                onClick={()=>setPage(page)}
                className={page==pageNo ?`active` : ''}
                key={page}>
                {page}
                </button>
        }
        if(pageNo>1){
            const minusBtn = (
                <button onClick={()=>setPage(pageNo-1)} key="DonwBtn">
                     <i className="fa-solid fa-angle-left   "></i>
                </button>
            )
            buttons.push(minusBtn);
        }
        for(let i=1; i<=totalpage; i++){
          buttons.push(renderButton(i));
        }
        if(pageNo<totalpage){
            const plusBtn = (
                <button onClick={()=>setPage(pageNo+1)} key="UpBtn">
                    <i className="fa-solid fa-angle-right"></i>
                </button>
            )
            buttons.push(plusBtn);
        }
        return buttons;
    
    }
    const getCurrentPageData = () => {
        const startIndex = (pageNo - 1) * 4;
        const endIndex = startIndex + 4;
        return Data.slice(startIndex, endIndex);
      };
    if(Data == null){
        return(
            <div>Loading ....</div>
        )
    }
    else{
        console.log(Data);
        return(
            <>
             <div className="Cart-Container">
                {Data.length != 0 && getCurrentPageData().map((item,idx)=>{
                    return <UserPlayListItem item={item} key={idx}/>
                })}
               {Data.length ==0 && <h3>찜한 노래가 없습니다.</h3>}
            </div>
            <div className="pagination">{getPageButtons()}</div>
            </>
        )
    }
}

export default UserPlaylist;