import React from "react";
import imgurl from "../../asset/record.png";
import LogOutButton from "./LogoutButton";
const UserInfo = (props) =>{
    let profile;
    if(props.item.profile != "null") profile = `https://port-0-melodifyserver-1drvf2llollu2op.sel5.cloudtype.app/${props.item.profile}`;
    else profile = imgurl;
    return(
        <div className="user-info">
            <div>
                <img className='u-profile-img'src={profile}></img>
                <p>{props.item.name} 님 어서오세요!</p>
                <LogOutButton/>
            </div>
        </div>
    )
}

export default UserInfo;