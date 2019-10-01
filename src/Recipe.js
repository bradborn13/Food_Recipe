import React from 'react';
import './Recipe.css';
const Recipe =({title,calories,image,ingredients}) =>{
    return(

        <div className="card">
    <div className="face face1">
    <div className="content"> 
    <img src={image} />  
    <span> {title} </span>
    </div>
</div>

<div className="face face2">
    <span>Calories:{calories}</span> <br></br>
    <span>Receipt</span>
    <ol>
    {ingredients.map(ingredient => (
        <li>{ingredient.text}</li>
    ))}
    </ol>   
</div>
</div>

    );
};
export default Recipe;