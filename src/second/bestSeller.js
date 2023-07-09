import React, { useEffect } from 'react'
import img1 from '../first/images/bestseller.jpg';
import img2 from '../first/images/beverages.jpg'
import img3 from '../first/images/food.jpg'
import img4 from '../first/images/desserts.jpg'
import FoodRows from './foodRows';
import { foodItems } from './fooditems';
import FoodButton from './foodbutton';
import './food.css'
import Cart from '../third/cart';

function Bestseller(){

    const [state,setState] = React.useState({
        currentObject : {id:0,type:""},
        objects:[
            {id:0,type:""},{id:1,type:"food"},{id:2,type:"drink"},{id:3,type:"dessert"},
        ]
    })

    const [items,setItems] = React.useState(foodItems);

    function handleClick(index){
        setState({...state, 
            currentObject : state.objects[index],
        })
    }
    function toggleShow(index){
        if(state.currentObject.id === state.objects[index].id){
            return true;
        }
        else{
            return false;
        }
    }
    return(
        <div>
            <div className="flex flex-wrap justify-center space-x-6 mt-7">
                <FoodButton ButtonStyle={`group flex flex-col items-center opacity-70 ${toggleShow(0)?"opacity-90":""}`} Image={`w-24 h-24 rounded-2xl border-white shadow-2xl ring ring-offset-2 ring-slate-300 mb-3`} 
                    Title={`Best Sellers`} Source={img1} key={0} Click={()=>handleClick(0)}/>
                <FoodButton ButtonStyle={`group flex flex-col items-center opacity-70 ${toggleShow(1)?"opacity-90":""}`} Image={`w-24 h-24 rounded-2xl border-white shadow-2xl ring ring-offset-2 ring-slate-300 mb-3`} 
                    Title={`Snacks`} Source={img3} key={1} Click={()=>handleClick(1)}/>
                <FoodButton ButtonStyle={`group flex flex-col items-center opacity-70 ${toggleShow(2)?"opacity-90":""}`} Image={`w-24 h-24 rounded-2xl border-white shadow-2xl ring ring-offset-2 ring-slate-300 mb-3`} 
                    Title={`Beverages`} Source={img2} key={2} Click={()=>handleClick(2)}/>
                <FoodButton ButtonStyle={`group flex flex-col items-center opacity-70 ${toggleShow(3)?"opacity-90":""}`} Image={`w-24 h-24 rounded-2xl border-white shadow-2xl ring ring-offset-2 ring-slate-300 mb-3`} 
                    Title={`Dessert`} Source={img4} key={3} Click={()=>handleClick(3)}/>
            </div>
            <div></div>
            <div>
                <FoodRows type={state.currentObject.type} items = {items} setItems ={setItems}/>
            </div>
        </div>
    )
}

export default Bestseller;

