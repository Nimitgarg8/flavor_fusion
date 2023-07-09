import React from 'react'
import {foodItems} from '../second/fooditems'
import { Record } from './record';
import { Link } from 'react-router-dom';
import './tracking.css'
import CloseSharpIcon from '@mui/icons-material/CloseSharp';

export default function Cart({items}){

    const [user,setUser] = React.useState({
        name:"",
        email:"",
        phone:"",
        address:""
    })

    function handleInput(e){
        const name = e.target.name;
        const value = e.target.value;
        setUser({...user,[name]:value})
        Record.changeName(user.name)
        Record.changeEmail(user.email)
        Record.changePhone(user.phone)
        Record.changeAddress(user.address)
        Record.changeTotal(total);
        console.log(Record)
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(user);
        setShow(false);

        setUser({name:"",
        email:"",
        phone:"",
        address:""})
    }

    const [show,setShow] = React.useState(false);

    let menuRef = React.useRef();

    React.useEffect(()=>{
        let handler = (e)=>{
            if(!menuRef.current.contains(e.target)){
                setShow(false);
            }
        }
        document.addEventListener("mousedown",handler);

        return () => {
            document.removeEventListener("mousedown",handler);
        }
    });

    var total = 0;
    return (
        <div className='mx-24 py-10'>
            <div className='mb-10'><h2 className='Sacramento text-8xl text-center'>My Cart</h2></div>
            <table className='mx-24 w-4/5'>
                <thead>
                    <tr className='pb-24' >
                        <th><h6 className='text-xl align-middle pt-5'>Items</h6></th>
                        <th><h6 className='text-xl align-middle pt-5'>Name</h6></th>
                        <th><h6 className='text-xl align-middle pt-5'>Price</h6></th>
                        <th><h6 className='text-xl align-middle pt-5'>Quantity</h6></th>
                        <th><h6 className='text-xl align-middle pt-5'>Subtotal</h6></th>
                    </tr>
                </thead>
                <br></br>
                <tbody className='pb-10'>
                    {
                        foodItems.map((item)=>{
                            if((item.count !== 0)){
                                total = total + item.price*item.count;
                            }
                            return (item.count!==0 && <tr className='my-10'>
                            <td className='flex justify-center'><img src={item.url} alt="" className='rounded-full w-24 h-24 relative'></img></td>
                            <td className='text-center'><p className='font-medium'>{item.name}</p></td>
                            <td className='text-center'><p>&#8377;{item.price}</p></td>
                            <td className='text-center'><p>{item.count}</p></td>
                            <td className='text-center'><p>&#8377;{item.count*item.price}</p></td>
                            <br></br>
                        </tr>)
                        })
                    }
                </tbody>
            </table>
            <div className='border-2 border-zinc-500 text-center mx-80 w-1/2 rounded-xl mt-10 p-4 bg-gradient-to-r from-white to-stone-100'>
                <h5 className='font-medium text-xl'>Price Details</h5>
                <div className='flex justify-between px-5 py-1'>
                    <span className="text-lg">Price</span>
                    <span className="text-lg">&#8377;{total}</span>
                </div>
                <div  className='flex justify-between px-5 py-1'>
                    <span className="text-lg">Discount</span>
                    <span className="text-lg">&#8377;{total*0.2}</span>
                </div>
                <div className='flex justify-between px-5 pt-1 pb-2'>
                    <span className="text-lg">Delivery Charges</span>
                    <span className='text-green-600 text-lg'>FREE Delivery</span>
                </div>
                <div className='flex justify-between px-5 pt-1 border-t border-dotted pb-2'>
                    <span className="text-lg">Total Amount</span>
                    <span className="text-lg">&#8377;{total = total===0?0:total-total*0.2}</span>
                </div >
                {total===0?<p className='text-lg'>Add something to order!</p>:Record.name===""?<button className='border-none w-1/2 text-lg font-medium bg-cyan-400 rounded-md py-1 hover:bg-cyan-600' onClick={()=>setShow(true)}>Place Order</button>:<Link to='/track'><button className={`border-none w-1/2 text-lg font-medium bg-cyan-400 rounded-md py-1 hover:bg-cyan-600`}>Place Order</button></Link>}
            </div>
            <div className='' ref={menuRef}>
                <CloseSharpIcon className='close1' fontSize='large' onClick={()=>setShow(false)}/>
                <form onSubmit={handleSubmit} className={`${show?"form active":"form"}`}>
                    <label className='flex flex-col align-middle justify-center pt-2'>
                        <span className='text-center p-2 block text-xl font-medium text-slate-100'>Name</span>
                        <input required="true" placeholder='name' name='name' type='text'  value={user.name}  onChange={handleInput} className='peer mt-1 block w-80 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-zinc-200 focus:ring-1 focus:ring-zinc-200'></input>
                        <p class="mt-2 invisible peer-invalid:visible text-pink-300 text-sm">
                            Please enter your name.
                        </p>
                    </label>
                    <label className='flex flex-col align-middle justify-center p-1'>
                        <span className='text-center p-2 block text-xl font-medium text-slate-100'>Email</span>
                        <input required placeholder='email' name='email' type='email' value={user.email} onChange={handleInput} className='peer mt-1 block w-80 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-zinc-200 focus:ring-1 focus:ring-zinc-200'></input>
                        <p class="mt-2 invisible peer-invalid:visible text-pink-300 text-sm">
                            Please provide a valid email address.
                        </p>
                    </label>
                    <label className='flex flex-col align-middle justify-center p-1'>
                        <span className='text-center p-2 block text-xl font-medium text-slate-100'>Phone No.</span>
                        <input required placeholder='phone' name='phone' type='tel' pattern='[0-9]{10}' value={user.phone} onChange={handleInput} className='peer mt-1 block w-80 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-zinc-200 focus:ring-1 focus:ring-zinc-200'></input>
                        <p class="mt-2 invisible peer-invalid:visible text-pink-300 text-sm">
                            Please enter a valid phone number.
                        </p>
                    </label>
                    <label className='flex flex-col align-middle justify-center p-1'>
                        <span className='text-center p-2 block text-xl font-medium text-slate-100'>Address</span>
                        <textarea required placeholder='address' name='address' type='text' value={user.address}  onChange={handleInput} className='peer mt-1 block w-80 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-zinc-200 focus:ring-1 focus:ring-zinc-200'></textarea>
                        <p class="mt-2 invisible peer-invalid:visible text-pink-300 text-sm">
                            Please enter your address.
                        </p>
                    </label>
                    <div className='flex flex-col align-middle pt-3'>
                        <button type="submit" className='text-center px-4 py-2 block text-xl font-medium text-slate-100 border border-white rounded-md'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}