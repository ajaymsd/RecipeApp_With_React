
import { useEffect, useState } from 'react';
import './index.css';
import Meal from './Meal';
import RecipeIndex from './Recipeindex';
import background from './res.jpg';

function App() {
  const [url,setUrl]=useState('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
  const [item,setItem]=useState([]);
  const [show,setShow]=useState(false);
  const [search,setSearch]=useState('');
  useEffect(()=>{
    fetch(url).then(res=>res.json()).then(data=>{
      console.log(data.meals);
      setItem(data.meals);
      setShow(true);
    })
  },[url])
  const setIndex=(alpha)=>{
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
}
const searchRecipe=(e)=>{
  if(e.key=="Enter"){
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
  }
  
}
  return (

    <div className="App">
      <div className='header'>
        <h2>Meal App</h2>
        <h3>Home</h3>
      </div>
      <div className='banner' style={{ backgroundImage: `url(${background})`,backgroundBlendMode:'lighten' ,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
      <div className='bancon'>
       <h1>Find Your Recipe Here</h1>
       <input type="text" name="search" onChange={e=>setSearch(e.target.value)} onKeyPress={searchRecipe}></input><br></br><br></br>
       <input type="submit" name="searchbtn" value="Search" ></input><br></br>
      </div>
      </div>
      <div className='rec'>
        <h2>Recommended</h2>
      </div>
      <div className='container'>
        {show ? <Meal data={item}></Meal>:"Not Found" }

      </div>
      <div className="indexContainer">
                 <RecipeIndex alphaIndex={(alpha)=>setIndex(alpha)}/>
          </div>
    </div>
  );
}

export default App;
