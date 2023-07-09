import React, { useEffect, useRef} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { sideBardata } from './sideBardata';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar(){
    const [sideBar,setSideBar] = React.useState(false);

    function showSideBar(){
        setSideBar(true)
    }

    let menuRef = useRef();

    useEffect(()=>{
        let handler = (e)=>{
            if(!menuRef.current.contains(e.target)){
                setSideBar(false);
            }
        }
        document.addEventListener("mousedown",handler);

        return () => {
            document.removeEventListener("mousedown",handler);
        }
    });

    return (
        <div>
            <div className='flex items-center justify-between border-transparent bg-gradient-to-r from-white from-50% to-stone-200'>
                <div className='flex items-center my-3 justify-start'>
                    <MenuIcon fontSize='large' color="action" className='ml-4 mr-2 hover:cursor-pointer' onClick={showSideBar}/>
                    <div>
                        <h4 className='font-medium'>Flavour Fusion</h4>
                        <p className='flex items-center'>
                            <VerifiedIcon sx={{fontSize:18}} color='success'/>
                            <span className='text-sm'>Official Website</span>
                        </p>
                    </div>
                </div>
                <div className='mr-4 space-x-3'>
                    <Link to='/track'><LocalMallOutlinedIcon color= 'action' sx={{fontSize:30}}/></Link>
                    <Link to='/search'><SearchOutlinedIcon color= 'action' sx={{fontSize:30}}/></Link>
                    <Link to='/cart'><ShoppingCartOutlinedIcon color= 'action' sx={{fontSize:30}}/></Link>
                </div>
            </div>

            <div ref={menuRef} className={sideBar?"nav-menu active":"nav-menu"}>
                <Link to='/'><h6 className='mt-3 ml-4 mb-3 font-medium text-base hover:cursor-pointer'>Flavour Fusion Delhi</h6></Link>
                <hr className='text-slate-100'></hr>
                <ul className='nav-menu-items mt-2 ml-4'>
                    <Link to='/'><li key={0}><h6 className='font-medium mb-2 hover:cursor-pointer'>Home</h6></li></Link>
                    <li key={1}>
                        <Link to='/food-section'>
                            <h6 className='font-medium mb-3 hover:cursor-pointer'>Digital Menu</h6>
                        </Link>
                        <ul>
                            {sideBardata.map((data,index) => {
                                return(
                                    <Link to='/food-section'>
                                        <li ley={index} className='ml-4 mb-2 hover:cursor-pointer'>{data.title}</li>
                                    </Link>
                                )
                            })}
                        </ul>
                    </li>
                    <li key={2}><h6 className='font-medium hover:cursor-pointer'>Rewards</h6></li>
                </ul>
            </div>
        </div>
     )
};