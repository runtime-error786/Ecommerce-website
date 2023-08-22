import React from "react";
import { ReactDOM } from "react-dom";
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import './index.css';
import Menu from "./Menu";
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
            <Route exact path='/home'></Route>
            <Route path='*' element={<ERR></ERR>}></Route>
            </Routes>
            </BrowserRouter>
        </>
    )
}

export {KI};