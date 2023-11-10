import React from "react";

const CartItem = (props)=>{
    const deleteHandler = () =>{
        props.updateData(props.item.title);
    }
    return(
        <div className="cart-item">
            <button onClick={deleteHandler}>삭제</button>
            <img src={props.item.imgurl}></img>
            <div className="cart-text">{props.item.title}</div>
        </div>
    )
}

export default CartItem;