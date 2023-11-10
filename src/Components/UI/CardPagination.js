import React ,{useState}from "react";
import Card from "./Card";
const CardPagination = (props) =>{
const [pageNo,setPage] = useState(1);

const getPageButtons = () =>{
    const buttons = [];
    const totalpage = Math.ceil(props.item.length / 12);
    let pageCount = 5;
    if (totalpage < 5) pageCount = totalpage;
    const currentPageGroup = Math.ceil(pageNo / pageCount);         
    const startPage = (currentPageGroup - 1) * pageCount + 1;
    const endPage = Math.min(currentPageGroup * pageCount, totalpage);
    const renderButton = (page) =>{
        return <button key={page}
            onClick={()=>setPage(page)}
            className={page==pageNo ?`active` : ''}
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
            <button onClick={()=>setPage(pageNo+1)} key="UpBtn">
                <i className="fa-solid fa-angle-right"></i>
            </button>
        )
        buttons.push(plusBtn);
    }
    return buttons;

}
const getCurrentPageData = () => {
    const startIndex = (pageNo - 1) * 12;
    const endIndex = startIndex + 12;
    return props.item.slice(startIndex, endIndex);
  };
return(
    <>
        <div className="card-container">
            {getCurrentPageData().map((item,idx)=>{
            return <Card item={item} key={idx} cat={props.cat}/>
            })}
         </div>
         <div className="pagination">{getPageButtons()}</div>
    </>
)
}

export default CardPagination;