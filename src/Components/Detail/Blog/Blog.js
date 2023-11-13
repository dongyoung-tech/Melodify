import React , {useEffect,useState} from "react";
import BlogItem from "./BlogItem";

const Blog = (props)=>{
    const [Data,setData] = useState(null);
    const getData = ()=>{
        fetch(`https://port-0-melodifyserver-1drvf2llollu2op.sel5.cloudtype.app/blog/key?key=${props.item}`)
        .then((response) => response.json())
        .then((data) => {
            setData(data.documents);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    }
    useEffect(() => {
        getData();
    }, [props.item]);

    if(Data == null){
        return (
            <div>Loading...</div>
        )
    }
    return(
        <div className="Blog-con">
            <h4>블로그 포스팅</h4>
            <div className="Blog-inner">
                {Data.map((item,idx)=>{
                    return <BlogItem item={item} key={idx}/>
                })}
            </div>
        </div>
    )
}

export default Blog;