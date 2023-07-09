import React, { useState } from "react";
import res1 from './images/res1.jpg';
import res2 from './images/res2.jpg';
import res3 from './images/res3.jpg';
import res4 from './images/res4.jpg';
import res5 from './images/res5.jpg';
import res6 from './images/res6.jpg';
import res7 from './images/res7.jpg';
import res8 from './images/res8.jpg';
import { foodItems } from "../second/fooditems";
import './gallery.css'
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { PreviewSharp } from "@mui/icons-material";

export default function Gallery(){

    const ambience = [res1,res2,res3,res4,res5,res6,res7,res8];

    const food = [];

    const drink = [];

    const dessert = [];

    foodItems.forEach((item)=>{
        if(item.type==="food"){
            food.push(item.url)
        }
        else if(item.type==="drink"){
            drink.push(item.url)
        }
        else{
            dessert.push(item.url)
        }
    })
    
    const arr = [ambience,food,drink,dessert]

    const [index,setIndex] = useState(0);

    const [show,setShow] = React.useState({
        currentObject : 0,
        objects : [
            0,1,2,3
        ]
    });

    function handleClick(index){
        setShow({
            ...show , currentObject : show.objects[index]
        })
    }

    function handleStyles(index){
        if(show.currentObject === show.objects[index]){
            return "visible"
        }
        else{
            return "hidden"
        }
    }

    const [image,setImage] = React.useState(false)
    
    function showImage(index){
        setIndex(index)
        setImage(!image)
    }

    function toggleShow(index){
        if(show.currentObject === show.objects[index]){
            return true
        }
        else{
            return false
        }
    }

    return (<div>
        <div className="Sacramento text-8xl mt-12 text-center mb-12">
            <h2>Gallery</h2>
        </div>
        <div className="flex justify-center space-x-4 mb-4">
            <button key={0} onClick={() => handleClick(0)} className={`border rounded-md  border-gray-800 py-1 px-2 font-normal text-lg text-black ${toggleShow(0)===true?"opacity-90":"opacity-30"}`}>Ambience</button>
            <button key={1} onClick={() => handleClick(1)} className={`border rounded-md  border-gray-800 py-1 px-2 font-normal text-lg text-black ${toggleShow(1)===true?"opacity-90":"opacity-30"}`}>Food</button>
            <button key={2} onClick={() => handleClick(2)} className={`border rounded-md  border-gray-800 py-1 px-2 font-normal text-lg text-black ${toggleShow(2)===true?"opacity-90":"opacity-30"}`}>Drinks</button>
            <button key={3} onClick={() => handleClick(3)} className={`border rounded-md  border-gray-800 py-1 px-2 font-normal text-lg text-black ${toggleShow(3)===true?"opacity-90":"opacity-30"}`}>Desserts</button>
        </div>
        <div key={0} className={`relative grid grid-rows-3 grid-cols-3 justify-items-center ml-48 mr-48 ${handleStyles(0)}`}>
            <img  src={res1} alt="" className="h-48 w-96" onClick={()=>showImage(0)}></img>
            <img src={res2} alt="" className="h-48 w-96" onClick={()=>showImage(1)}></img>
            <img src={res3} alt="" className="h-96 w-96 row-span-2" onClick={()=>showImage(2)}></img>
            <img src={res4} alt="" className="h-48 w-96" onClick={()=>showImage(3)}></img>
            <img src={res5} alt="" className="h-48 w-96" onClick={()=>showImage(4)}></img>
            <img src={res6} alt="" className="h-48 w-96" onClick={()=>showImage(5)}></img>
            <img src={res7} alt="" className="h-48 w-96" onClick={()=>showImage(6)}></img>
            <img src={res8} alt="" className="h-48 w-96" onClick={()=>showImage(7)}></img>
        </div>
        <div key={1} className={`grid grid-rows-4 grid-cols-3 justify-items-center ml-48 mr-48 ${handleStyles(1)}`}>
            <img src={food[0]} alt="" onClick={()=>showImage(0)} className="h-48 w-96"></img>
            <img src={food[1]} alt="" onClick={()=>showImage(1)} className="h-48 w-96"></img>
            <img src={food[2]} alt="" onClick={()=>showImage(2)} className="h-96 w-96 row-span-2"></img>
            <img src={food[3]} alt="" onClick={()=>showImage(3)} className="h-48 w-96"></img>
            <img src={food[4]} alt="" onClick={()=>showImage(4)} className="h-48 w-96"></img>
            <img src={food[5]} alt="" onClick={()=>showImage(5)} className="h-96 w-96 row-span-2"></img>
            <img src={food[6]} alt="" onClick={()=>showImage(6)} className="h-48 w-96"></img>
            <img src={food[7]} alt="" onClick={()=>showImage(7)} className="h-48 w-96"></img>
            <img src={food[8]} alt="" onClick={()=>showImage(8)} className="h-48 w-96"></img>
            <img src={food[9]} alt="" onClick={()=>showImage(9)} className="h-48 w-96"></img>
        </div>
        <div key={2} className={`grid grid-rows-3 grid-cols-3 justify-items-stretch ml-48 mr-48 ${handleStyles(2)}`}>
            <img src={drink[0]} onClick={()=>showImage(0)} alt="" className="h-48 w-auto col-span-2"></img>
            <img src={drink[1]} onClick={()=>showImage(1)} alt="" className="h-96 w-96 row-span-2"></img>
            <img src={drink[2]} onClick={()=>showImage(2)} alt="" className="h-48 w-auto col-span-2"></img>
            <img src={drink[3]} onClick={()=>showImage(3)} alt="" className="h-48 w-96"></img>
            <img src={drink[4]} onClick={()=>showImage(4)} alt="" className="h-48 w-96"></img>
            <img src={drink[5]} onClick={()=>showImage(5)} alt="" className="h-48 w-96"></img>
        </div>
        <div key={3} className={`grid grid-rows-2 grid-cols-3 justify-items-center ml-48 mr-48 ${handleStyles(3)}`}>
            <img src={dessert[2]} onClick={()=>showImage(0)} alt="" className="h-48 w-96"></img>
            <img src={dessert[1]} onClick={()=>showImage(1)} alt="" className="h-48 w-96"></img>
            <img src={dessert[0]} onClick={()=>showImage(2)} alt="" className="h-96 w-96 row-span-2"></img>
            <img src={dessert[3]} onClick={()=>showImage(3)} alt="" className="h-48 w-96"></img>
            <img src={dessert[4]} onClick={()=>showImage(4)} alt="" className="h-48 w-96"></img>
        </div>
        <div className={`${image?"photo active":"photo"}`}>
            <img src={arr[show.currentObject][index]} alt="" className="img"></img>
            <CloseSharpIcon onClick={showImage} className="close" fontSize="large"/>
            <ArrowBackIosNewSharpIcon onClick={()=>setIndex((arr[show.currentObject].length+ index-1)%arr[show.currentObject].length)} className="prev" fontSize="large"/>
            <ArrowForwardIosSharpIcon onClick={()=>setIndex((index+1)%arr[show.currentObject].length)} className="next" fontSize="large"/>
        </div>
    </div>)
}
   
    