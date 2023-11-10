import React from "react";
import { Routes, Route } from 'react-router-dom';
import Register from "./Register";
import Login from "./Login";
const Member = () =>{

    return(
        <Routes>
            <Route path="/register/*" element={<Register/>}/>
            <Route path="/Login/*" element={<Login/>}/>
        </Routes>
    )
}

export default Member;