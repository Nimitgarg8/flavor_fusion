import React from 'react'
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import First from '../first/First'
import Navbar from '../first/Navbar'
import './tracking.css'
import { Record } from './record';

export default function Track(){
    
    const status = 0;

    function checkStatus(index){
        if((index-status) < 1){
            return "done"
        }
        else if((index-status)===1){
            return "doing"
        }
        else if((index-status)>1){
            console.log(index)
            return "undone"
        }
    }

    return (
        <div>
            <First/>
            <Navbar/>
            <div className='my-12'><h2 className='Sacramento text-8xl text-center'>Order Details</h2></div>
            <div className='mt-10 ml-36'>
                {Record.name === ""?<p className='text-center text-xl mt-48'>You haven't ordered anything, Please order something...</p>:<table className='w-4/5'>
                    <thead>
                        <tr>
                            <th><h6 className='text-lg'>Order ID</h6></th>
                            <th><h6 className='text-lg'>Customer</h6></th>
                            <th><h6 className='text-lg'>Address</h6></th>
                            <th><h6 className='text-lg'>Total</h6></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><p className='text-center text-lg'>{Record.id}</p></td>
                            <td><p className='text-center text-lg'>{Record.name}</p></td>
                            <td><p className='text-center text-lg'>{Record.address}</p></td>
                            <td><p className='text-center text-lg'>&#8377;{Record.total}</p></td>
                        </tr>
                    </tbody>
                </table>}
            </div>
            {Record.name===""?"":<div className='flex mt-24 w-4/5 justify-evenly ml-24'>
                <div className={`flex flex-col items-center p-1 ${checkStatus(0)}`}>
                    <PointOfSaleOutlinedIcon fontSize='large'/>
                    <span>Payment</span>
                    <CheckCircleIcon className={`${checkStatus(0)} checked`} color='success'/>
                </div>
                <div className={`flex flex-col items-center ${checkStatus(1)}`}>
                    <FastfoodOutlinedIcon fontSize='large'/>
                    <span>Preparing</span>
                    <CheckCircleIcon className={`${checkStatus(0)} checked`} color='success'/>
                </div>
                <div className={`flex flex-col items-center ${checkStatus(2)}`}>
                    <DeliveryDiningOutlinedIcon fontSize='large'/>
                    <span>On the way</span>
                    <CheckCircleIcon className={`${checkStatus(0)} checked`} color='success'/>
                </div>
                <div className={`flex flex-col items-center ${checkStatus(3)}`}>
                    <MapsHomeWorkOutlinedIcon fontSize='large'/>
                    <span>Delivered</span>
                    <CheckCircleIcon className={`${checkStatus(0)} checked`} color='success'/>
                </div>
            </div>}
        </div>
    )
}

