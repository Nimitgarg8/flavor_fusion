import React from 'react'
import { foodItems } from './fooditems';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import veg from "../first/images/vegicon.png"

function FoodRows({type,items,setItems}){

    function add(id){
        setItems((prevItems)=>{
            const newItems = []
            for(let i=0;i<prevItems.length;i++){
                const currentItem = prevItems[i];
                if(currentItem.id === id){
                    if(currentItem.count === 0){
                        const updatedItem = {
                            ...currentItem,
                            count:1
                        }
                        newItems.push(updatedItem);
                        foodItems[i].changeCount(updatedItem.count)
                    }
                    else{
                        const updatedItem = {
                            ...currentItem,
                            count: currentItem.count+1
                        }
                        newItems.push(updatedItem);
                        foodItems[i].changeCount(updatedItem.count)
                    }
                }
                else{
                    newItems.push(currentItem)
                }
            }
            return newItems;
        })
    }

    function sub(id){
        
        setItems((prevItems)=>{
            const newItems = []
            for(let i=0;i<prevItems.length;i++){
                const currentItem = prevItems[i];
                if(currentItem.id === id && currentItem.count !==0){
                    const updatedItem = {
                        ...currentItem,
                        count: currentItem.count-1
                    }
                    newItems.push(updatedItem);
                    foodItems[i].changeCount(updatedItem.count)
                    console.log(foodItems[i].count);
                }
                else{
                    newItems.push(currentItem)
                }
            }
            return newItems;
        })
    }

    return (
        <div className={`flex flex-wrap justify-center ml-36 mr-36 mt-10`}>
        {
            items.map(function(item){
                if(type === ""){
                    return(
                        <div className=''>
                            {<div key={item.id} className='w-64 mx-3 outline outline-slate-100 shadow-lg shadow-slate-300 pb-1 my-5'>
                                <img src={item.url} alt='' className='w-64 h-80'></img>
                                <div className='flex mx-3 mt-2 mb-2'>
                                    {<img src={veg} alt='' className='w-6 h-6'></img>}
                                    <p>{item.name}</p>
                                </div>
                                <div className='flex justify-between mx-3 mb-2'>
                                    <p>&#8377;{item.price}</p>
                                    <div className='flex items-center justify-between border mx-1 px-1'>
                                        <RemoveIcon sx={{fontSize:20}} className='pr-1' onClick={()=>sub(item.id)}/>
                                        <p className='text-sm border-x px-2'>{item.count}</p>
                                        <AddIcon sx={{fontSize:20}} className='pl-1' onClick={()=>add(item.id)}/>
                                    </div>
                                </div>
                                <div></div>
                            </div>}
                        </div>
                    )
                }
                return(
                    <div className=''>
                        {type===item.type && <div key={item.id} className='w-64 mx-3 outline outline-slate-100 shadow-lg shadow-slate-300 pb-1 my-5'>
                            <img src={item.url} alt='' className='w-64 h-80'></img>
                            <div className='flex mx-3 mt-2 mb-2'>
                                {<img src={veg} alt='' className='w-6 h-6'></img>}
                                <p>{item.name}</p>
                            </div>
                            <div className='flex justify-between mx-3 mb-2'>
                                <p>&#8377;339</p>
                                <div className='flex items-center justify-between border mx-1 px-1'>
                                    <RemoveIcon sx={{fontSize:20}} className='pr-1' onClick={()=>sub(item.id)}/>
                                    <p className='text-sm border-x px-2'>{item.count}</p>
                                    <AddIcon sx={{fontSize:20}} className='pl-1' onClick={()=>add(item.id)}/>
                                </div>
                            </div>
                            <div></div>
                        </div>}
                    </div>
                )
            })
        }
        </div>
    )
}

export default FoodRows;