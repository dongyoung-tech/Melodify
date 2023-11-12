import React ,{useState} from "react";

const KeywordInput = (props) =>{
    const [selected,setSelect] = useState(props.cat);
    const [keyword,setKeyword] = useState(props.keyword);
    const selectHandler = (event) =>{
        setSelect(event.target.value);

    }
    const keywordHandler = (event) =>{
        setKeyword(event.target.value);
    }
    return(
        <div className="keyword-frm">
            <form action="/Search">
                <input name='Keyword' placeholder="키워드를 입력해주세요" value={keyword} onChange={keywordHandler}></input>
                <select name='cat' onChange={selectHandler} value={selected}>
                    <option value='artist'>아티스트</option>
                    <option value='release'>앨범</option>
                </select>
                <button>검색하기</button>
            </form>
        </div>
    )
}
export default KeywordInput;