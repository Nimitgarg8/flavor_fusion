import React from 'react'

function FoodButton({ButtonStyle,Image,Title,Source,Click}){
    return(
        <button className={ButtonStyle} onClick={Click}>
            <img src={Source} alt="" className={Image}></img>
            <p>{Title}</p>
        </button>
    )
}

export default FoodButton