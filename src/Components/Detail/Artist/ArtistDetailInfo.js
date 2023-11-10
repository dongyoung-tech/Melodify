import React from "react";

const ArtistDetailInfo = (props)=>{

    return(
        <div className="detail-Info" style={{backgroundImage:`url(${props.imgurl}`}}>
        <img src={props.imgurl}></img>
        <div className="detail-text">
            <h3 className='song-title'>{props.item.name}</h3>
            <dl>
            {props.item.profile && <><dt>소개글</dt><p>{props.item.profile}</p></>}
            </dl>   
            <dl>
             {props.item.urls &&   
             <>
                <dt>웹사이트</dt>
                <p><dd>{props.item.urls[0]}</dd><dd>{props.item.urls[1]}</dd></p>
              </>
             }
            </dl> 
        </div>
    </div>
    )
}
export default ArtistDetailInfo;