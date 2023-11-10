import React  , {useState}from "react";
import Playlist from "./Playlist";
import PlayListItem from "./PlayListItem";
import { Link } from "react-router-dom";
const PlayListCon = (props)=>{
    const user = JSON.parse(sessionStorage.getItem("userData"));
    const [pageNo,setPage] = useState(1);

const getPageButtons = () =>{
    const buttons = [];
    const totalpage = Math.ceil(props.item.length / 4);
    let pageCount = 5;
    if (totalpage < 5) pageCount = totalpage;
    const currentPageGroup = Math.ceil(pageNo / pageCount);         
    const startPage = (currentPageGroup - 1) * pageCount + 1;
    const endPage = Math.min(currentPageGroup * pageCount, totalpage);
    const renderButton = (page) =>{
        return <button
            onClick={()=>setPage(page)}
            className={page==pageNo ?`active` : ''}
            key={page}
            >
            {page}
            </button>
    }
    if(pageNo>1){
        const minusBtn = (
            <button onClick={()=>setPage(pageNo-1)} key='DownBtn'>
                 <i className="fa-solid fa-angle-left"></i>
            </button>
        )
        buttons.push(minusBtn);
    }
    for(let i=1; i<=totalpage; i++){
      buttons.push(renderButton(i));
    }
    if(pageNo<totalpage){
        const plusBtn = (
            <button onClick={()=>setPage(pageNo+1)} key='UpBtn'>
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
    return props.item.slice(startIndex, endIndex);
  };
    return(
       <div className="play-list-container">
            <h2>플레이리스트 목록</h2>
            <ul className="play-list-box">
                {getCurrentPageData().map((item,idx) => {
                    return <PlayListItem item={item} key={idx}/>
                })}

            </ul>
            {user && <Link className="make-btn" to={`/PlayList/MakePlayList`}>만들기</Link>}
            <div className="pagination">{getPageButtons()}</div>
       </div>
    )

}

export default PlayListCon;