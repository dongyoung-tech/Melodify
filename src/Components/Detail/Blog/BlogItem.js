import React from "react";
import imgurl from "../../../asset/record.png";
const BlogItem =(props)=>{
    const image = props.item.thumbnail;
    const thumbnail = image?image:imgurl;
    const contentHTML = { __html: props.item.contents };
    const titleHTML = { __html: props.item.title };
    return(
        <a href={props.item.url} target='blank'> 
        <div className="Blog-Item">
             <img className="b_thumbnail" src={thumbnail}></img>
            <div className="b_user_info">
                <div className="b_title"><b dangerouslySetInnerHTML={titleHTML}></b></div>
                <span className="b_user">블로그명 : {props.item.blogname}</span>
                <div className="b_content"><p dangerouslySetInnerHTML={contentHTML}></p></div>
            </div>
        </div>
        </a>
    )
}

export default BlogItem;