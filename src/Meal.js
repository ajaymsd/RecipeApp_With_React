import React from 'react'
import Myimg from './mealapp.jpg';
import { useNavigate } from 'react-router-dom';
function Meal({data}) {
  let navigate=useNavigate();
  return (
    <>
        {
            (!data)?"Not Found":data.map(item=>{
                return(
                  //Passing the recipes id which we got from API
                    <div className='cards' key={item.idMeal} onClick={()=>{navigate(`/${item.idMeal}`)}}>
                    <img src={item.strMealThumb} alt=""></img>
                    <h3>{item.strMeal}</h3>
                </div>
                )
            })
            
        }
        
    </>
  )
}

export default Meal