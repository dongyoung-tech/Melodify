import React from "react";
import { Routes, Route } from 'react-router-dom';
import AlbumDetail from "./Album/AlbumDetail";
import Artist from "./Artist/Artist";
import "./Detail.css";
const Detail =()=>{

    return(
        <div>
            <Routes>
                <Route path="/release/*" element={<AlbumDetail/>}/>
                <Route path="/Artist/*" element={<Artist/>}/>
            </Routes>
        </div>

    )
}

export default Detail;