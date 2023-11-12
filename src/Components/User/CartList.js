import React  , {useState,useEffect} from "react";
import CartItem from "./CartItem";
import axios from "axios";
const CartList = (props) =>{
    const [pageNo,setPage] = useState(1);
    const [totalpage,setTotal] = useState(1);
    const updateData = async (title) =>{
        const updatedItems = props.item.filter(item => item.title !== title);
        const url = "https://port-0-melodifyserver-1drvf2llollu2op.sel5.cloudtype.app/cart/cart-update";
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
      useEffect(() => {
        let selectedPageNo = Math.ceil(props.item.length / 4);
        setTotal(selectedPageNo);
      }, [props.item]);
      

      useEffect(() => {
        setPage(() => {
          if (totalpage < pageNo) {
            return totalpage;
          }
          return 1;
        });
      }, [totalpage]);
      

      const getPageButtons = () =>{
        const buttons = [];
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