import React from "react";
import { Link } from "react-router-dom";
import FoodButton from "../second/foodbutton";
import Bestseller from "../second/bestSeller";
import '../App.css'
import img1 from './images/bestseller.jpg';
import img2 from './images/beverages.jpg'
import img3 from './images/food.jpg'
import img4 from './images/desserts.jpg'

export default function Menu(){

    return(<div>
        <h2 className="Sacramento mt-12 text-center text-8xl mb-8">Our Menu</h2>
        <div className="flex flex-wrap justify-center space-x-6">
            <Link to='/food-section'>
                <FoodButton ButtonStyle={`flex flex-col items-center`} Image={`w-72 h-72 rounded-2xl`} Source={img1} Title={`Best Sellers`}/>
            </Link>
            <Link to='/food-section'>
                <FoodButton ButtonStyle={`flex flex-col items-center`} Image={`w-72 h-72 rounded-2xl`} Source={img3} Title={`Snacks`}/>
            </Link>
            <Link to='/food-section'>
                <FoodButton ButtonStyle={`flex flex-col items-center`} Image={`w-72 h-72 rounded-2xl`} Source={img2} Title={`Beverages`}/>
            </Link>
            <Link to='/food-section'>
                <FoodButton ButtonStyle={`flex flex-col items-center`} Image={`w-72 h-72 rounded-2xl`} Source={img4} Title={`Desserts`}/>
            </Link>
        </div>
    </div>)
}