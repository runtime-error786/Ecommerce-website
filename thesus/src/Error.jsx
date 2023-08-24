import React from "react";
import { ReactDOM } from "react-dom";
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import './index.css';
import Menu from "./Menu";
import GI from "./Sign_in";
import HJ from "./Home";
import HI from "./Rate";
function ERR()
{
  return(
    <>
     <div className="P404">
        Oops! This page not exist ⚠️
     </div>
    </>
  )
}

function KI()
{
    return(
        <>
            <BrowserRouter>
            <Menu></Menu>
            <Routes>
            <Route exact path='/home' element={<HJ></HJ>}></Route>
            <Route exact path='/Signin' element={<GI></GI>}></Route>
            <Route exact path='/rateus' element={<HI></HI>}></Route>
            <Route path='*' element={<ERR></ERR>}></Route>
            </Routes>
            </BrowserRouter>
        </>
    )
}

export {KI};