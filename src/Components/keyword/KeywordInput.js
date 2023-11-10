import React from "react";

const KeywordInput = () =>{

    return(
        <div className="keyword-frm">
            <form action="/Search">
                <input name='Keyword' placeholder="키워드를 입력해주세요"></input>
                <select name='cat'>
                    <option value='artist'>아티스트</option>
                    <option value='release'>앨범</option>
                </select>
                <button>검색하기</button>
            </form>
        </div>
    )
}
export default KeywordInput;