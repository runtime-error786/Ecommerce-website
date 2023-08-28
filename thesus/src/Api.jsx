import React from "react";
import { ReactDOM } from "react-dom";

let r1=[
    {
        name:"Apple",
        price:1000,
        img:"../apple.jpg",
        kg:"1 kg",
        cat:"grossary",
        cho:"f",
    },
    {
        name:"Mango",
        price:2100,
        img:"../mango.jpg",
        kg:"1 kg",
        cat:"grossary",
        cho:"",

    }
    ,{
        name:"Mash dal",
        price:100,
        img:"../dal.jpg",
        kg:"1 kg",
        cat:"grossary",
        cho:"",
    },
    {
        name:"Eggs",
        price:600,
        img:"../egg.jpg",
        kg:"1 dozen",
        cat:"grossary",
        cho:"",
    },
    {
        name:"Apple",
        price:1000,
        img:"../apple.jpg",
        kg:"1 kg",
        cat:"grossary",
        cho:"",
    },
    {
        name:"Mango",
        price:2100,
        img:"../mango.jpg",
        kg:"1 kg",
        cat:"grossary",
        cho:"",
    }
    ,{
        name:"Mash dal",
        price:100,
        img:"../dal.jpg",
        kg:"1 kg",
        cat:"grossary",
        cho:"",
    },
    {
        name:"Eggs",
        price:600,
        img:"../egg.jpg",
        kg:"1 dozen",
        cat:"grossary",
        cho:"",
    },
    {
        name:"Apple",
        price:1000,
        img:"../apple.jpg",
        kg:"1 kg",
        cat:"grossary",
        cho:"",
    },
    {
        name:"Mango",
        price:2100,
        img:"../mango.jpg",
        kg:"1 kg",
        cat:"grossary",
        cho:"",
    }
    ,{
        name:"Mash dal",
        price:100,
        img:"../dal.jpg",
        kg:"1 kg",
        cat:"grossary",
        cho:"",
    },
    {
        name:"Eggs",
        price:600,
        img:"../egg.jpg",
        kg:"1 dozen",
        cat:"grossary",
        cho:"",
    }
    ,{
        name:"Eraser",
        price : "100",
        img:"../eraser.jpg",
        cat:"stationary",cho:"",
    }
    ,{
        name:"Geometry",
        price : "1000",
        img:"../ge1.jpg",
        cat:"stationary",cho:"",
    },
    ,{
        name:"Color pencil",
        price : "400",
        img:"../color.jpg",
        cat:"stationary",cho:"",
    }
    ,{
        name:"pens",
        price : "200",
        img:"../col1.jpg",
        cat:"stationary",cho:"f",
    }
    ,{
        name:"Eraser",
        price : "100",
        img:"../eraser.jpg",
        cat:"stationary",cho:"",
    }
    ,{
        name:"Geometry",
        price : "1000",
        img:"../ge1.jpg",
        cat:"stationary",cho:"",
    },
    ,{
        name:"Color pencil",
        price : "400",
        img:"../color.jpg",
        cat:"stationary",cho:"",
    }
    ,{
        name:"pens",
        price : "200",
        img:"../col1.jpg",
        cat:"stationary",cho:"",
    }
    ,{
        name:"Eraser",
        price : "100",
        img:"../eraser.jpg",
        cat:"stationary",cho:"",
    }
    ,{
        name:"Geometry",
        price : "1000",
        img:"../ge1.jpg",
        cat:"stationary",cho:"",
    },
    ,{
        name:"Color pencil",
        price : "400",
        img:"../color.jpg",
        cat:"stationary",cho:"",
    }
    ,{
        name:"pens",
        price : "200",
        img:"../col1.jpg",
        cat:"stationary",cho:"",
    },
    ,{
        name:"Eraser",
        price : "100",
        img:"../eraser.jpg",
        cat:"stationary",cho:"",
    }
    ,{
        name:"Geometry",
        price : "1000",
        img:"../ge1.jpg",
        cat:"stationary",cho:"",
    }
    ,{
        name:"Color pencil",
        price : "400",
        img:"../color.jpg",
        cat:"stationary",cho:"",
    }
    ,{
        name:"pens",
        price : "200",
        img:"../col1.jpg",
        cat:"stationary",cho:"",
    }
    ,{
        name:"Hood with Skirt",
        price : "2010",
        img:"../cloth1.jpg",
        cat:"cloth",cho:"",
    }
    ,{
        name:"Night Dress",
        price : "2010",
        img:"../cloth2.jpg",
        cat:"cloth",cho:"f",
    }
    ,{
        name:"Baby Dress",
        price : "2010",
        img:"../cloth3.jpeg",
        cat:"cloth",cho:"",
    }
    ,{
        name:"Girl Dress",
        price : "2010",
        img:"../cloth4.jpg",
        cat:"cloth",cho:"",
    }
    ,{
        name:"Hood with Skirt",
        price : "2010",
        img:"../cloth1.jpg",
        cat:"cloth",cho:"",
    }
    ,{
        name:"Night Dress",
        price : "2010",
        img:"../cloth2.jpg",
        cat:"cloth",cho:"",
    }
    ,{
        name:"Baby Dress",
        price : "2010",
        img:"../cloth3.jpeg",
        cat:"cloth",cho:"",
    }
    ,{
        name:"Girl Dress",
        price : "2010",
        img:"../cloth4.jpg",
        cat:"cloth",cho:"f",
    }
    ,{
        name:"Hood with Skirt",
        price : "2010",
        img:"../cloth1.jpg",
        cat:"cloth",cho:"",
    }
    ,{
        name:"Night Dress",
        price : "2010",
        img:"../cloth2.jpg",
        cat:"cloth",cho:"",
    }
    ,{
        name:"Night Dress",
        price : "2010",
        img:"../cloth3.jpeg",
        cat:"cloth",cho:"",
    }
    ,{
        name:"Girl Dress",
        price : "2010",
        img:"../cloth4.jpg",
        cat:"cloth",cho:"",
    }
    ,{
        name:"Hood with Skirt",
        price : "2010",
        img:"../cloth1.jpg",
        cat:"cloth",cho:"",
    }
    ,{
        name:"Night Dress",
        price : "2010",
        img:"../cloth2.jpg",
        cat:"cloth",cho:"",
    }
    ,{
        name:"Baby Dress",
        price : "2010",
        img:"../cloth3.jpeg",
        cat:"cloth",cho:"",
    }
    ,{
        name:"Girl Dress",
        price : "2010",
        img:"../cloth4.jpg",
        cat:"cloth",cho:"",
    }
    ,{
        name:"Coffe Machine",
        price : "2030",
        img:"../cof.jpeg",
        cat:"electric",cho:"",
    }
    ,{
        name:"Washing Machine",
        price : "2030",
        img:"../wash.jpg",
        cat:"electric",cho:"",
    }
    ,{
        name:"shaving Machine",
        price : "2030",
        img:"../shave.jpeg",
        cat:"electric",cho:"f",
    }
    ,{
        name:"water Machine",
        price : "2030",
        img:"../water.jpg",
        cat:"electric",cho:"",
    }
    ,{
        name:"Coffe Machine",
        price : "2030",
        img:"../cof.jpeg",
        cat:"electric",cho:"",
    }
    ,{
        name:"Washing Machine",
        price : "2030",
        img:"../wash.jpg",
        cat:"electric",cho:"",
    }
    ,{
        name:"shaving Machine",
        price : "2030",
        img:"../shave.jpeg",
        cat:"electric",cho:"",
    }
    ,{
        name:"water Machine",
        price : "2030",
        img:"../water.jpg",
        cat:"electric",cho:"",
    }
    ,{
        name:"Coffe Machine",
        price : "2030",
        img:"../cof.jpeg",
        cat:"electric",cho:"",
    }
    ,{
        name:"Washing Machine",
        price : "2030",
        img:"../wash.jpg",
        cat:"electric",cho:"",
    }
    ,{
        name:"shaving Machine",
        price : "2030",
        img:"../shave.jpeg",
        cat:"electric",cho:"",
    }
    ,{
        name:"water Machine",
        price : "2030",
        img:"../water.jpg",
        cat:"electric",cho:"",
    }
    ,{
        name:"Coffe Machine",
        price : "2030",
        img:"../cof.jpeg",
        cat:"electric",cho:"",
    }
    ,{
        name:"Washing Machine",
        price : "2030",
        img:"../wash.jpg",
        cat:"electric",cho:"",
    }
    ,{
        name:"shaving Machine",
        price : "2030",
        img:"../shave.jpeg",
        cat:"electric",cho:"f",
    }
    ,{
        name:"water Machine",
        price : "2030",
        img:"../water.jpg",
        cat:"electric",cho:"",
    }
    ,{
        name:"Glasses steel",
        price : "2030",
        img:"../gl1.jpg",
        cat:"glasses",cho:"",
    }
    ,{
        name:"Glasses plastic",
        price : "2030",
        img:"../gl2.jpg",
        cat:"glasses",cho:"",
    }
    ,{
        name:"Glasses plastic",
        price : "2030",
        img:"../gl3.jpg",
        cat:"glasses",cho:"",
    }
    ,{
        name:"Glasses plastic",
        price : "2030",
        img:"../gl4.jpg",
        cat:"glasses",cho:"",
    }
    ,{
        name:"Glasses steel",
        price : "2030",
        img:"../gl1.jpg",
        cat:"glasses",cho:"",
    }
    ,{
        name:"Glasses plastic",
        price : "2030",
        img:"../gl2.jpg",
        cat:"glasses",cho:"",
    }
    ,{
        name:"Glasses plastic",
        price : "2030",
        img:"../gl3.jpg",
        cat:"glasses",cho:"",
    }
    ,{
        name:"Glasses plastic",
        price : "2030",
        img:"../gl4.jpg",
        cat:"glasses",cho:"",
    }
    ,{
        name:"Glasses steel",
        price : "2030",
        img:"../gl1.jpg",
        cat:"glasses",cho:"f",
    }
    ,{
        name:"Glasses plastic",
        price : "2030",
        img:"../gl2.jpg",
        cat:"glasses",cho:"",
    }
    ,{
        name:"Glasses plastic",
        price : "2030",
        img:"../gl3.jpg",
        cat:"glasses",cho:"",
    }
    ,{
        name:"Glasses plastic",
        price : "2030",
        img:"../gl4.jpg",
        cat:"glasses",cho:"",
    }
    ,{
        name:"Glasses steel",
        price : "2030",
        img:"../gl1.jpg",
        cat:"glasses",cho:"f",
    }
    ,{
        name:"Glasses plastic",
        price : "2030",
        img:"../gl2.jpg",
        cat:"glasses",cho:"",
    }
    ,{
        name:"Glasses plastic",
        price : "2030",
        img:"../gl3.jpg",
        cat:"glasses",cho:"f",
    }
    ,{
        name:"Glasses plastic",
        price : "2030",
        img:"../gl4.jpg",
        cat:"glasses",cho:"f",
    }
]

export default r1;