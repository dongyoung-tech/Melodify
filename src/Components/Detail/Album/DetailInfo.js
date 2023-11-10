import React from "react";

const DetailInfo = (props) =>{
    
    return(
        <>
        <div className="detail-Info" style={{backgroundImage:`url(${props.imgurl})`}}>
            <img className="Album-thumbnail" src={props.imgurl}></img>
            <div className="detail-text">
            <h3 className='song-title'>{props.item.title}</h3>
                    <h5 className='song-artist'>{props.item.artists_sort}</h5>
                    <dl>
                        <dt>발매일</dt><dd>{props.item.released}</dd>
                        <dt>장르</dt><dd>{props.item.genres}</dd>
                        <dt>기획사</dt><dd>{props.item.labels[0].name}</dd>
                    </dl>
            </div>
        </div>
        </>
        
    )
}

export default DetailInfo;