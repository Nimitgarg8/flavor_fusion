import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import RestaurantSharpIcon from '@mui/icons-material/RestaurantSharp';

function Footer(){

    return(
        <div className='mt-36 bg-black text-white text-center align-middle leading-10 pb-5 pt-5'>
            <div className='flex align-baseline justify-center space-x-4'>
                <RestaurantSharpIcon fontSize='large'/>
                <span className='text-4xl font-medium Amita'>Flavour Fusion</span>
            </div>
            <div className='pt-3'>
                <span className='text-lg'>Party | Functions | Takeaway</span>
            </div>
            <div className='py-3'>
                <span className='block text-lg'>Known for best food quality</span>
                <span className='text-lg'>Please give us a chance to serve !</span>
            </div>
            <div>
                <span className='font-medium text-lg'>OPEN 7 Days a week | From: 10:00 am to To: 10:00 pm</span>
            </div>
            <div className='pt-6'>
                <h4 className='text-xl font-medium pb-3'>FOLLOW US</h4>
                <div className='flex justify-center space-x-5'>
                    <a href='https://www.instagram.com/'><InstagramIcon fontSize='large'/></a>
                    <a href='https://www.facebook.com/'><FacebookOutlinedIcon fontSize='large'/></a>
                    <a href='https://www.twitter.com/'><TwitterIcon fontSize='large'/></a>
                </div>
            </div>
            <div className='pt-9'>
                <h4 className='text-xl font-medium pb-3'>CONTACT US</h4>
                <div className='flex align-center space-x-3 justify-center'>
                    <a href='#'>
                        <LocalPostOfficeOutlinedIcon fontSize='large'/>
                        <p>fusionFlavours@gmail.com</p>
                    </a>
                    <a href='#'>
                        <PhoneOutlinedIcon fontSize='large'/>
                        <p>+91 985XXX9231</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer