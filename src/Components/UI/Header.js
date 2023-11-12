import React from "react";
import Imgurl from "../../asset/letter-logo.png";
const user = JSON.parse(sessionStorage.getItem("userData"));
const link = user?`/User?user=${user.id}`:"/Member/login";
const Header = () =>{

   return(
        <header>
            <div className="header-inner">
                <a href="/"><img className ='logo'src={Imgurl}></img></a>
                <form action={`/Search`} className='header-form'>
                    <input name="Keyword" placeholder="아티스트 및 앨범을 찾아 보세요!"></input>
                    <select name="cat">
                        <option value="artist">아티스트</option>
                        <option value="release">앨범</option>
                    </select>
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
                <ul>
                    <li><a href="/PlayList">플레이리스트</a></li>
                    <li><a href={link}>마이페이지</a></li>
                </ul>
            </div>
        </header>
   )
}

export default Header;