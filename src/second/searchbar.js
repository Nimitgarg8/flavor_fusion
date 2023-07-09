import React from 'react'
import First from '../first/First'
import Navbar from '../first/Navbar'
import { foodItems } from './fooditems';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import veg from "../first/images/vegicon.png"


function SearchBar(){

    const [searchItem,setSearchItem] = React.useState("")
    console.log(searchItem);

    const items = [];

    foodItems.forEach((item)=>{
        if (item.name.toLowerCase().indexOf(searchItem.toLowerCase()) === -1){
            return;
        }
        items.push(item);
        console.log(items);
    })

    const [product,setProduct] = React.useState(items)

    function add(id){
        setProduct((prevItems)=>{
            const newItems = []
            for(let i=0;i<prevItems.length;i++){
                const currentItem = prevItems[i];
                if(currentItem.id === id){
                    const updatedItem = {
                        ...currentItem,
                        count: currentItem.count+1
                    }
                    newItems.push(updatedItem);
                    foodItems[i].changeCount(updatedItem.count)
                }
                else{
                    newItems.push(currentItem)
                }
            }
            return newItems;
        })
    }

    function sub(id){
        
        setProduct((prevItems)=>{
            const newItems = []
            for(let i=0;i<prevItems.length;i++){
                const currentItem = prevItems[i];
                if(currentItem.id === id){
                    const updatedItem = {
                        ...currentItem,
                        count: currentItem.count-1
                    }
                    newItems.push(updatedItem);
                    foodItems[i].changeCount(updatedItem.count)
                }
                else{
                    newItems.push(currentItem)
                }
            }
            return newItems;
        })
    }

    return(
        <div>
            <First/>
            <Navbar/>
            <div className='sticky top-0 left-24 w-6/7 bg-stone-50 drop-shadow-sm py-3 rounded-md'>
                <input type='text' placeholder='Search...' name='search' value={searchItem} onChange={(e)=>{setSearchItem(e.target.value)}} className='sticky top-10 left-1/4 my-5 block w-2/4 px-3 py-2 text-lg bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-zinc-200 focus:ring-1 focus:ring-zinc-200'></input>
            </div>
            <div className={`flex flex-wrap justify-center ml-36 mr-36 mt-10`}>
            {
                items.map(function(item){
                    return(
                        <div className=''>
                            {<div key={item.id} className='w-64 mx-3 outline outline-slate-100 shadow-lg shadow-slate-300 pb-1 my-5'>
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
            })}
            </div>  
        </div>
    )
}

export default SearchBar;