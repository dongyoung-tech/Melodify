import React  , {useState} from "react";
import CartItem from "./CartItem";
import axios from "axios";
const CartList = (props) =>{
    const [Data , setData] = useState([]);
    const user = JSON.parse(sessionStorage.getItem("userData"));
    const [pageNo,setPage] = useState(1);
    const updateData = async (title) =>{
        const updatedItems = props.item.filter(item => item.title !== title);
        const url = "http://localhost:3001/cart/cart-update";
        try {
          const response = await axios.post(url, {
            userid: props.id,
            info: updatedItems
          });
    
          if (response.data.message=='successful') {
            alert("수정하였습니다.");
            props.update();
          } else {
            alert("수정 실패하였습니다.");
          }
        } catch (error) {
          console.error("Failed:", error);
        }
      }
      const getPageButtons = () =>{
        const buttons = [];
        const totalpage = Math.ceil(props.item.length / 4);
        let pageCount = 5;
        if (totalpage < 5) pageCount = totalpage;
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
                <button onClick={()=>setPage(pageNo-1)} key="DownBtn">
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
        const startIndex = (pageNo - 1) * 4;
        const endIndex = (props.item.length==4)?4:startIndex + 4;
        if(props.item.length==4 && pageNo >1){
            setPage(1);
        }
        return props.item.slice(startIndex, endIndex);
      };
    return(
        <>
          <div className="Cart-Container">
            {props.item.length !=0 && getCurrentPageData().map((item,idx)=>{
                return <CartItem item={item} updateData={updateData} key={idx}/>
            })}
            {props.item.length ==0 &&  <h3>찜한 노래가 없습니다.</h3>}
           </div>
             <div className="pagination">{getPageButtons()}</div>
        </>
    )



}

export default CartList