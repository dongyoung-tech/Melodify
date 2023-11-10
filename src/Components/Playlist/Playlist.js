import React from "react";
import { Routes, Route } from 'react-router-dom';
import MakePlayList from "./Make/MakePlaylist";
import PlaylistList from "./PlaylistList";
import PlayListDetail from "./Detail/PlayListDetail";
const Playlist = () =>{

    return(
        <Routes>
            <Route path="/MakePlayList/*" element={<MakePlayList/>}/>
            <Route path="/" element={<PlaylistList/>}/>
            <Route path="/Detail/*" element={<PlayListDetail/>}/>
        </Routes>
    )
}

export default Playlist;