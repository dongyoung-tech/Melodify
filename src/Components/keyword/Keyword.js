import React ,{useState,useEffect}from 'react'
import Card from "../UI/Card";
import { useLocation } from "react-router-dom";
import KeywordInput from './KeywordInput';
import "./keyword.css";
import "../UI/Card.css";
import Header from '../UI/Header';
import Loading from '../UI/Loading';
import CardPagination from '../UI/CardPagination';

const Keyword =()=>{
    const [Data,setData] = useState(null);
    const [page , setPage] = useState(1);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const keyword = searchParams.get('Keyword')?searchParams.get('Keyword'):'';
    const cat = searchParams.get('cat')?searchParams.get('cat'):'artist';
    useEffect(() => {
        fetch(`https://port-0-melodifyserver-1drvf2llollu2op.sel5.cloudtype.app/Keyword/key?key=${keyword}&cat=${cat}`)
            .then((response) => response.json())
            .then((data) => {
                setData(data.results);
                console.log(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [keyword, cat]);
if(Data == null) {
  return (
    <Loading/>
  )
}
else{
  return(
    <>
    <Header/>
    <div className='keyword-container'>
      <h2>{keyword} 검색결과</h2>
          <KeywordInput cat={cat} keyword={keyword}/>
          <CardPagination item={Data} cat={cat} key={'card-page'}/>
          {Data.length ==0 && <h4>검색 결과가 없습니다. 다른 키워드를 입력해주세요</h4>}
    </div>
    </>
  )
}
}

export default Keyword;