import React from "react";
import { ReactDOM } from "react-dom";
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import './index.css';
import Menu from "./Menu";
import GI from "./Sign_in";
import HJ from "./Home";
import HI from "./Rate";
import Fui from "./Card";
import { GH } from "./Card";
import r1 from "./Api";
import { useParams } from "react-router-dom";
import JOP1 from "./Foot";
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

function JK()
{
  let {r} = useParams();
return(
  <>
    {r1.map((value,index)=>{
      if(value.cat==r)
      {
      	return <GH v={value}></GH>;
      }
    })}
  </>
)
}

function JK1()
{
  let {r} = useParams();
return(
  <>
    {r1.map((value,index)=>{
      if(value.cho=="f")
      {
      	return <GH v={value}></GH>;
      }
    })}
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
            <Route exact path='/shop/:r' element={<JK></JK>}></Route>
            <Route exact path="/favourite" element={<JK1></JK1>}></Route>
            <Route path='*' element={<ERR></ERR>}></Route>
            </Routes>
            <JOP1></JOP1>
            </BrowserRouter>
        </>
    )
}

export {KI};