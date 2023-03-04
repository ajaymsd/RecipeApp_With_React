import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
function RecipeInfo() {
   // var vId="";
    const [item,setItem]=useState([]);
    //useParams is used to get a query parameters from url 
    const {MealId}=useParams();
    if(!MealId==""){
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`).then(res=>res.json()).then(data=>{
        setItem(data.meals[0]);
      })
    }
    // if(item){
    //     const url=item.strYouTube;
    //     const str=url.split("=");
    //     vId=str[str.length-1];
    //     //it returns the last value of url
    // }
  return (
    <>
    {
        (!item)?"Not Found":<>
        
            <div className='mealContent'>
                <img src={item.strMealThumb} alt="not found"></img>
                <div className='imageBanner'>
                    <h1>{item.strMeal}</h1>
                    <h2>{item.strArea} Food</h2>
                    <h3>Category : {item.strCategory} Food</h3>

                </div>
            </div>
            <div className='recipeDetails'>
                <div className='ingredients'>
                    <h1>Ingredients</h1><br></br>
                    <h3>{item.strIngredient1}:{item.strMeasure1}</h3>
                    <h3>{item.strIngredient2}:{item.strMeasure2}</h3>
                    <h3>{item.strIngredient3}:{item.strMeasure3}</h3>
                    <h3>{item.strIngredient4}:{item.strMeasure4}</h3>
                    <h3>{item.strIngredient5}:{item.strMeasure5}</h3>
                    <h3>{item.strIngredient6}:{item.strMeasure6}</h3>
                    <h3>{item.strIngredient7}:{item.strMeasure7}</h3>
                    <h3>{item.strIngredient8}:{item.strMeasure8}</h3>
                </div>
                <div className='instructions'>
                 <h1>Instructions</h1><br></br>
                 <h3>{item.strInstructions}</h3>
                </div>
                
                {/* <div className='video'>
                    <iframe src={`https://www.youtube.com/embed/${vId}`}>

                    </iframe>
                </div> */}
            </div>
        
        </>
    }
    </>
  )
}

export default RecipeInfo