import React from "react";

const LogOutButton = () =>{
    const logoutHandler = () =>{
        sessionStorage.removeItem('userData');
        sessionStorage.removeItem('isLoggedIn');
        window.location.href='/';
    }
    return(
            <button className='logout-btn'onClick={logoutHandler}>로그아웃</button>
    )
}

export default LogOutButton;