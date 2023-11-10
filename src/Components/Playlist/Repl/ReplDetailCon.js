import React from "react";

const ReplDetailCon = () =>{

    return(
        <>
        <h4>댓글</h4>
         <div className="repl-container">
             <form onSubmit={InputHandler}>
                 <textarea className ='repl-text'placeholder="의견을 남겨주세요!"></textarea>
                 <button>등록</button>
             </form>
         </div>
         <div className="repl-list">
             <ReplList parent={key} cat={category} isUpdated={isUpdated}/>
         </div>
        </>
    )

}

export default ReplDetailCon;