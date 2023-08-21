import React from "react";
import { ReactDOM } from "react-dom";
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import './index.css';

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
            <Routes>
            <Route exact path='/home'></Route>
            <Route path='*' element={<ERR></ERR>}></Route>
            </Routes>
            </BrowserRouter>
        </>
    )
}

export {KI};