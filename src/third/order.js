import React, { PureComponent } from 'react'
import First from '../first/First'
import Navbar from '../first/Navbar'
import Cart from './cart'

export default function Order(){
    return(
        <div>
            <First/>
            <Navbar/>
            <Cart/>
        </div>
    )
}